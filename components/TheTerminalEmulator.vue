<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="w-screen h-screen font-mono bg-black">
    <div :class="{ shutdown }">
      <!-- eslint-disable-next-line vuejs-accessibility/click-events-have-key-events -->
      <div class="w-screen h-screen" :class="bgColor" @click="focusInput">
        <div class="py-inset" :class="[konamiClass]">
          <header
            :class="cleared ? 'sr-only' : `fixed w-screen ${bgColor} px-4 p-4`"
          >
            <h1 lang="nl" class="w-full text-3xl font-bold bg-white px-inset">
              <span aria-hidden="true">kernel_panics ()</span>
              <span class="sr-only">kernel panics</span>
            </h1>
            <div class="w-full mt-4 text-xl font-bold bg-white px-inset">
              <span class="lowercase"
                >things <span class="sr-only">and</span
                ><span aria-hidden="true">&&</span> stuff</span
              >
            </div>
          </header>
          <main
            :class="
              !cleared
                ? `pt-32 px-4 text-white ${bgColor}`
                : `px-4 text-white ${bgColor}`
            "
          >
            <div v-for="line in rpl" :key="line.uuid" aria-live="polite">
              <span v-if="line.readline" aria-hidden="true"
                >guest@kernelpanics:~$</span
              >
              <span
                :aria-hidden="line.readline ? true : false"
                class="whitespace-pre"
                :class="line.placeholder ? 'placeholder relative' : undefined"
                v-html="line.content"
              />
              <TerminalAcknowledgements
                v-if="line.component === 'TerminalAcknowledgements'"
              />
              <TerminalContact v-if="line.component === 'TerminalContact'" />
            </div>
            <div v-if="loggedIn">
              <span aria-hidden="true" class="whitespace-pre"
                >guest@kernelpanics:~$&nbsp;{{ readline }}</span
              >
              <span class="sr-only"
                >This is a terminal view. You are logged in as guest on
                kernelpanics, and currently in the home directory.</span
              >
              <span
                class="relative inline-block bg-white cursor"
                :class="blink && !shutdown ? 'cursor--blink' : undefined"
                :style="`left: ${caretPosition}ch`"
              >
                <span class="relative cursor__character">
                  {{ caretCharacter }}
                </span>
              </span>
            </div>
            <form
              v-if="!shutdown"
              class="sr-only"
              @submit.prevent="handleInput"
            >
              <label for="readline">
                Input a bash command, press enter to submit
                <input
                  id="readline"
                  ref="rlinput"
                  v-model="readline"
                  v-konami:konamiOpts.custom="handleKonami"
                  type="text"
                  @keydown="getCaretPosition"
                  @keyup="getCaretPosition"
                  @select="preventSelection"
                />
              </label>
            </form>
            <div ref="scroller" />
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import { v4 as uuidv4 } from "uuid"
import shell from "@/src/shell"

import TerminalAcknowledgements from "@/components/TerminalAcknowledgements.vue"
import TerminalContact from "@/components/TerminalContact.vue"

/* global ShellPromise */
interface rpl {
  content: string
  uuid: string
  readline: boolean
  placeholder?: boolean
  component?: string
}

export default Vue.extend({
  name: "TerminalEmulator",
  components: { TerminalAcknowledgements, TerminalContact },
  data() {
    return {
      blink: true,
      caretCharacter: "",
      caretPosition: 0,
      cleared: false,
      flash: false,
      history: [] as string[],
      konami: 0,
      konamiOpts: {
        timeout: 10000,
        chain: "38-38-40-40-37-39-37-39-66-65",
      },
      loggedIn: true,
      readline: "",
      rpl: [] as rpl[],
      shutdown: false,
    }
  },
  computed: {
    bgColor() {
      if (this.flash) return "flash bg-black"
      return "bg-black"
    },
    konamiClass() {
      let className = ""
      for (let i = 0; i < this.konami; i++) {
        className += ` konami-${i + 1}`
      }
      return className
    },
  },
  mounted() {
    this.focusInput()
  },
  updated() {
    window.scrollTo(0, document.body.scrollHeight)
  },
  methods: {
    focusInput() {
      document.getElementById("readline")?.focus()
    },
    getCaretPosition(e: KeyboardEvent) {
      // Prevent blinking the cursor when the caret position is being changed
      if (e.type === "keydown") this.blink = false
      if (e.type === "keyup") this.blink = true

      // Set the correct caret position based on the position of the caret in
      // the hidden input element
      this.caretPosition =
        Number((e.target as HTMLInputElement).selectionStart) -
        (e.target as HTMLInputElement).value.length
      // Set the character inside of the caret
      this.caretCharacter = (e.target as HTMLInputElement).value.charAt(
        (e.target as HTMLInputElement).value.length + this.caretPosition
      )
    },
    handleInput() {
      // Clear current user input and send it to RPL array
      const readline = this.readline
      this.readline = ""
      this.rpl.push({
        content: readline,
        uuid: uuidv4(),
        readline: true,
      })

      // Do runtime type checking later
      let res: any

      if (readline.trim() === "!!") {
        // Run last command
        res = shell(this.history[this.history.length - 1])
      } else if (readline.trim() === "sudo !!") {
        // Run last command with superuser privileges
        res = shell(`sudo ${this.history[this.history.length - 1]}`)
      } else if (readline.trim() !== "") {
        // Run a command
        this.history.push(readline)
        res = shell(readline)
      } else {
        // Just print a newline
        res = ""
      }

      // Regular string response
      if (typeof res === "string") {
        this.rpl.push({
          uuid: uuidv4(),
          content: res,
          readline: false,
        })
      }

      // Promise response
      else if (typeof res.then === "function") {
        // Get the index, we push a placeholder next and later use this index
        // to overwrite the placeholder with the actual response
        const index = this.rpl.length

        // Push the placeholder
        this.rpl.push({
          uuid: uuidv4(),
          content: "Loading...",
          readline: false,
          placeholder: true,
        })

        // Fill in the response
        res
          .then((res: ShellPromise) => {
            let content = ""
            if (res.type === "image") {
              content = `<img class="w-64" src="${res.data}" alt="Random picture of a bunny">`
            }

            this.rpl[index] = {
              uuid: uuidv4(),
              content,
              readline: false,
              placeholder: false,
            }
            this.$forceUpdate()
          })
          .catch((e: Error) => {
            this.rpl[index] = {
              uuid: uuidv4(),
              content: `Error: ${String(e)}`,
              readline: false,
              placeholder: false,
            }
          })
      }

      // Object response, basically a data string and an action triggering some
      // special behaviour
      else {
        this.rpl.push({
          uuid: uuidv4(),
          content: res.data,
          readline: false,
          placeholder: false,
        })
        if (res.action === "clear") {
          this.rpl = []
          this.cleared = true
        }
        if (res.action === "exit") {
          this.loggedIn = false
        }
        if (res.action === "reboot") {
          this.shutdown = true
          setTimeout(() => {
            window.location.reload()
          }, 5000)
        }
        if (res.action === "renderComponent") {
          this.rpl.push({
            uuid: uuidv4(),
            content: "",
            readline: false,
            component: res.component,
          })
        }
        if (res.action === "shutdown") {
          this.shutdown = true
        }
      }
    },
    handleKonami() {
      if (this.konami < 6) {
        this.flash = true
        this.konami++
        setTimeout(() => {
          this.flash = false
        }, 1000)
      }
    },
    preventSelection(e: Event) {
      ;(e.target as HTMLInputElement).selectionStart = (
        e.target as HTMLInputElement
      ).selectionEnd
    },
  },
})
</script>

<style lang="scss">
// stylelint-disable-next-line selector-max-type
body {
  max: {
    width: 100vw;
    height: 100vh;
  }
  overflow: hidden;
}
</style>

<style scoped lang="scss">
@media (prefers-color-scheme: dark) {
  // Ensure plugins do not attempt overriding CSS
  // stylelint-disable-next-line selector-class-pattern
  .__UNUSED_PLACEHOLDER {
    height: 0;
  }
}

.py-inset {
  padding: {
    top: env(safe-area-inset-top);
    bottom: env(safe-area-inset-bottom);
  }
}

.px-inset {
  padding: {
    right: env(safe-area-inset-right);
    left: env(safe-area-inset-left);
  }
}

.cursor {
  top: 0.125rem;
  width: 1ch;
  height: 1rem;
  margin-left: -1ch;

  &__character {
    top: -0.125rem;
  }

  &--blink {
    animation: blink 1.2s step-end infinite;
  }
}

@keyframes blink {
  from,
  to {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }
}

.placeholder {
  font-size: 0;

  &::before {
    position: absolute;
    display: inline-block;
    width: 100px;
    font-size: 1rem;
    white-space: pre;
    content: "[   ]";
  }

  &::after {
    display: inline-block;
    margin-left: 1ch;
    overflow: hidden;
    font-size: 1rem;
    content: "...";
    animation: ellipsis steps(4, end) 900ms infinite;
  }
}

@keyframes ellipsis {
  0% {
    width: 0;
  }

  33% {
    width: 1ch;
  }

  66% {
    width: 2ch;
  }

  100% {
    width: 3ch;
  }
}

.shutdown {
  animation: blank 1s;
  animation-delay: 2s;
  animation-fill-mode: forwards;
}

@keyframes blank {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

.flash {
  animation: flash 1s linear;
}

@keyframes flash {
  0% {
    background-color: hsl(216, 83%, 88%);
  }

  100% {
    background-color: hsl(0, 0%, 0%);
  }
}

.konami-1 {
  text-transform: uppercase;
}

.konami-2 {
  text-shadow: hsl(0, 0%, 50%) 0 0 2px;
}

.konami-3 {
  text-shadow: hsl(16, 100%, 50%) 0 0 10px;
}

.konami-4 {
  transform-origin: 50% 50%;
  animation: shake 0.8s linear;
  animation-iteration-count: infinite;
}

.konami-5 {
  &::before {
    position: absolute;
    top: calc(50vh - 150px);
    left: calc(50vw - 150px);
    width: 300px;
    height: 300px;
    content: "";
    filter: grayscale(1);
    background: {
      size: contain;
      repeat: no-repeat;
    }
    opacity: 0.4;
  }

  .webp &::before {
    background-image: url("~assets/stallman.webp");
  }

  .notwebp.avif &::before {
    background-image: url("~assets/stallman.avif");
  }

  .notwebp.notavif &::before {
    background-image: url("~assets/stallman.png");
  }
}

@keyframes shake {
  0% {
    transform: translate(2px, 1px) rotate(0deg);
  }

  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }

  20% {
    transform: translate(-3px, 0) rotate(1deg);
  }

  30% {
    transform: translate(0, 2px) rotate(0deg);
  }

  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }

  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }

  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }

  70% {
    transform: translate(2px, 1px) rotate(-1deg);
  }

  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }

  90% {
    transform: translate(2px, 2px) rotate(0deg);
  }

  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}
</style>
