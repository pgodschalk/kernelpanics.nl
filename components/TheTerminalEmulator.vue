<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="w-screen h-screen font-mono bg-black dark:bg-black">
    <!-- .shutdown class, adds a short 1s animation to fade to black
         permanently -->
    <div :class="{ shutdown }">
      <!--- .bg-black[.flash] classes, flash is set on konami event to flash
            the entire screen for 1s, add click/keyup.enter event handlers to
            ensure focus is always on the input element -->
      <div
        class="w-screen h-screen"
        :class="bgColor"
        @click="focusInput"
        @keyup.enter="focusInput"
      >
        <!--- .py-inset.[konami-[1-5]], konami is set after a set of konami key
              codes, incrementing increases easter egg intensity -->
        <div class="py-inset" :class="[konamiClass]">
          <!--- header, can be set to sr-only if screen is cleared-->
          <header
            :class="cleared ? 'sr-only' : `fixed w-screen ${bgColor} px-4 p-4`"
          >
            <h1
              class="w-full text-3xl font-bold bg-white dark:bg-white px-inset"
            >
              <span aria-hidden="true">patrick_godschalk ()</span>
              <span class="sr-only">patrick godschalk</span>
            </h1>
            <div
              class="w-full mt-4 text-xl font-bold bg-white dark:bg-white px-inset"
            >
              <span class="lowercase"
                >frontend <span class="sr-only">and</span
                ><span aria-hidden="true">&&</span> devops</span
              >
            </div>
          </header>
          <!--- main view -->
          <main
            :class="
              !cleared
                ? `pt-32 px-4 text-white dark:text-white ${bgColor}`
                : `px-4 text-white dark:text-white ${bgColor}`
            "
          >
            <!-- show PGP signing policy -->
            <SlideoverWide
              :visible="pgpSigningPolicyVisible"
              title="OpenPGP Key Signing Policy"
              @close="
                pgpSigningPolicyVisible = false
                loggedIn = true
                readline = ''
              "
            >
              <SigningPolicyContent />
            </SlideoverWide>

            <!--- render initial input, if present -->
            <div v-if="initialInput">
              <span
                >guest@kernelpanics:~$
                <client-only>
                  <Typewriter
                    class="inline-block typewriter"
                    :replace-interval="500"
                    :replace="[{ from: '', to: initialInput }]"
                  />
                </client-only>
              </span>
              <TerminalAcknowledgements
                v-if="initialInput === 'cat .acknowledgements.txt' && loggedIn"
              />
              <TerminalContact
                v-if="initialInput === 'cat contact.txt' && loggedIn"
              />
              <TerminalDisclosure
                v-if="
                  initialInput === 'cat .responsible-disclosure.txt' && loggedIn
                "
              />
            </div>

            <!--- Render previously entered commands-->
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
              <TerminalDisclosure
                v-if="line.component === 'TerminalDisclosure'"
              />
            </div>

            <!--- Render input -->
            <div v-if="loggedIn">
              <span aria-hidden="true" class="whitespace-pre"
                >guest@kernelpanics:~$&nbsp;{{ readline }}</span
              >
              <span class="sr-only"
                >This is a terminal view. You are logged in as guest on
                kernelpanics, and currently in the home directory.</span
              >
              <span
                class="relative inline-block bg-white dark:bg-white cursor"
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
                  @keydown="setCaret"
                  @keyup="setCaret"
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
/**
 * Singleton component for rendering the terminal emulator.
 */
import Typewriter from "typewriter-vue"
import Vue from "vue"
import { v4 as uuidv4 } from "uuid"

import shell from "@/src/shell"
import SigningPolicyContent from "~/components/SigningPolicyContent.vue"
import SlideoverWide from "~/components/SlideoverWide.vue"
import TerminalAcknowledgements from "@/components/TerminalAcknowledgements.vue"
import TerminalContact from "@/components/TerminalContact.vue"
import TerminalDisclosure from "@/components/TerminalDisclosure.vue"

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
  components: {
    TerminalAcknowledgements,
    TerminalContact,
    TerminalDisclosure,
    SigningPolicyContent,
    SlideoverWide,
    Typewriter,
  },
  props: {
    /**
     * Initial command to be ran before user interactive mode is available
     */
    initialInput: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      // Boolean for cursor blinking state, set to false on any keydown event
      blink: true,

      // Current character under the active cursor position
      caretCharacter: "",

      // Caret position, relative to EOL; EOL is 0
      caretPosition: 0,

      // Whether screen has been cleared, used in determining whether to show
      // header or not
      cleared: false,

      // Boolean for if screen is currently set to display a flashing animation
      flash: false,

      // Array of previously entered commands, used for !!, may be later used
      // for up-arrow and reverse-i-search
      history: [] as string[],

      // Current konami intensity level, from 0 (lowest) to 6 (highest)
      konami: 0,

      // Options to pass to vue-konami
      konamiOpts: {
        chain: "38-38-40-40-37-39-37-39-66-65",
        timeout: 10000,
      },

      // Boolean for if user is in an interactive session, set to true after
      // component is mounted and any initial input has been handled, may be
      // set to false again if user uses `exit`
      loggedIn: false,

      // Boolean for if PGP Signing Policy slideover should be shown
      pgpSigningPolicyVisible: false,

      // Currently active input
      readline: "",

      // Read/print loop, contains both input and output to render to DOM
      rpl: [] as rpl[],

      // Boolean for if application is in a shutdown state (when user has used
      // `shutdown` or `reboot`)
      shutdown: false,
    }
  },
  computed: {
    // Return flash class for background div if currently flashing
    bgColor() {
      if (this.flash) return "flash bg-black dark:bg-black"
      return "bg-black dark:bg-black"
    },

    // Return konami class based on konami intensity
    konamiClass() {
      let className = ""
      for (let i = 0; i < this.konami; i++) {
        className += ` konami-${i + 1}`
      }
      return className
    },
  },
  mounted() {
    // Do our best to ensure input element has active focus immediately
    this.focusInput()

    // Default new component without initial input
    if (!this.initialInput) {
      this.loggedIn = true
    } else {
      // Handle initial input if passed as prop
      switch (this.initialInput) {
        case "./pgp-signing-policy":
          setTimeout(() => {
            this.pgpSigningPolicyVisible = true
          }, 2500)
          break
        case "cat .acknowledgements.txt":
          setTimeout(() => {
            this.loggedIn = true
          }, 2500)
          break
        case "cat contact.txt":
          setTimeout(() => {
            this.loggedIn = true
          }, 2000)
          break
        case "cat .responsible-disclosure.txt":
          setTimeout(() => {
            this.loggedIn = true
          }, 3300)
          break
      }
    }
  },
  updated() {
    // Always scroll to bottom after every DOM change
    window.scrollTo(0, document.body.scrollHeight)
  },
  methods: {
    // Set focus on #readline element, use document instead of ref to avoid
    // issues with SSR
    focusInput() {
      // Ensure focus is not set when signing policy is visible, to ensure text
      // selection remains possible
      if (!this.pgpSigningPolicyVisible) {
        document.getElementById("readline")?.focus()
      }
    },
    // Set caret position and character
    setCaret(e: KeyboardEvent) {
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
    // Handle text inputted by the user in the readline
    handleInput() {
      // Store user input in a local var
      const readline = this.readline

      // Clear current user input
      this.readline = ""

      // Send user input to the RPL array
      this.rpl.push({
        content: readline,
        uuid: uuidv4(),
        readline: true,
      })

      // Shell module can return any of:
      let res: string | ShellObject | Promise<ShellPromise>

      if (readline.trim() === "!!") {
        // !!: Run last command
        res = shell(this.history[this.history.length - 1])
      } else if (readline.trim() === "sudo !!") {
        // sudo $1: Run last command with superuser privileges
        res = shell(`sudo ${this.history[this.history.length - 1]}`)
      } else if (readline.trim() !== "") {
        // $1: Run a command
        this.history.push(readline)
        res = shell(readline)
      } else {
        // "": Just print a newline
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
      else if (typeof (res as Promise<ShellPromise>).then === "function") {
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
        ;(res as Promise<ShellPromise>)
          .then((res) => {
            let content = ""
            if (res.type === "image") {
              const data = res.data as ShellPromiseData
              content = `<img class="w-64" src="${data.src}" alt="${data.alt}">`
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
          content: (res as ShellObject).data!,
          readline: false,
          placeholder: false,
        })

        if ((res as ShellObject).action === "clear") {
          // "clear" action, clear entire screen including header
          this.rpl = []
          this.cleared = true
        }
        if ((res as ShellObject).action === "exit") {
          // "exit" action, permanently log out
          this.loggedIn = false
        }
        if ((res as ShellObject).action === "reboot") {
          // "reboot" action, fade screen to black and reload window after 5s
          this.shutdown = true
          setTimeout(() => {
            window.location.reload()
          }, 5000)
        }
        if ((res as ShellObject).action === "renderComponent") {
          // render a new component as response
          this.rpl.push({
            uuid: uuidv4(),
            content: "",
            readline: false,
            component: (res as ShellObject).component!,
          })
        }
        if ((res as ShellObject).action === "showSigningPolicy") {
          // "showSigningPolicy" action, show the slideover containing the
          // PGP signing policy
          this.loggedIn = false
          this.pgpSigningPolicyVisible = true
        }
        if ((res as ShellObject).action === "shutdown") {
          // "shutdown" action, permanently fade screen to black
          this.shutdown = true
        }
      }
    },
    handleKonami() {
      // Flash the screen for 1s and increase konami intensity by 1 up to a
      // maximum of 5
      if (this.konami < 6) {
        this.flash = true
        this.konami++
        setTimeout(() => {
          this.flash = false
        }, 1000)
      }
    },
    preventSelection(e: Event) {
      // Ensure input selection (e.g. shift+left arrow, shift+home, etc.) is
      // prevented
      ;(e.target as HTMLInputElement).selectionStart = (
        e.target as HTMLInputElement
      ).selectionEnd
    },
  },
})
</script>

<style lang="scss">
// Ensure screen always fills the viewport and never overflows the viewport
body {
  max: {
    width: 100vw;
    height: 100vh;
  }

  overflow: hidden;
}

// Hide the default cursor from vue-typewriter
.typewriter.content *:last-child::after {
  font-size: 0;
  content: "";
}
</style>

<style scoped lang="scss">
// Y-axis margins for viewport safe area (e.g. iPhone notch, rounder corners,
// etc.)
.py-inset {
  padding: {
    top: env(safe-area-inset-top);
    bottom: env(safe-area-inset-bottom);
  }
}

// X-axis margins for viewport safe area (e.g. iPhone notch, rounder corners,
// etc.)
.px-inset {
  padding: {
    right: env(safe-area-inset-right);
    left: env(safe-area-inset-left);
  }
}

// Custom cursor to display in the form input
.cursor {
  top: 0.125rem;
  width: 1ch;
  height: 1rem;
  margin-left: -1ch;

  // Character currently under the cursor in the form input
  &__character {
    top: -0.125rem;
  }

  // Cursor blinking animation
  &--blink {
    animation: blink 1.2s step-end infinite;
  }
}

// Blinking animation
@keyframes blink {
  0%,
  100% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }
}

// Placeholder element for a response returning a promise when promise is not
// yet fulfilled
.placeholder {
  font-size: 0;

  // Render brackets
  &::before {
    position: absolute;
    display: inline-block;
    width: 100px;
    font-size: 1rem;
    white-space: pre;
    content: "[   ]";
  }

  // Render ellipsis with repeating animation
  &::after {
    display: inline-block;
    margin-left: 1ch;
    overflow: hidden;
    font-size: 1rem;
    content: "...";
    animation: ellipsis steps(4, end) 900ms infinite;
  }
}

// Ellipsis animation, shows 0, 1, 2 and 3 ellipsis in steps
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

// Shutdown state, runs blank animation for 1s after 2s
.shutdown {
  animation: blank 1s;
  animation-delay: 2s;
  animation-fill-mode: forwards;
}

// Shutdown animation, goes from 100% to 0% opacity
@keyframes blank {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

// Flash state, runs flash animation for 1s
.flash {
  animation: flash 1s linear;
}

// Flash animation, goes from black background to almost full--white background
@keyframes flash {
  0% {
    background-color: hsl(216deg 83% 88%);
  }

  100% {
    background-color: hsl(0deg 0% 0%);
  }
}

// Konami intensity 1: uppercase all text
.konami-1 {
  text-transform: uppercase;
}

// Konami intensity 2: add a slight, barely visible gray text-shadow
.konami-2 {
  text-shadow: hsl(0deg 0% 50%) 0 0 2px;
}

// Konami intensity 3: replace text-shadow with a very visible red glow
.konami-3 {
  text-shadow: hsl(16deg 100% 50%) 0 0 10px;
}

// Konami intensity 4: shake the screen, except for users indicating they
// prefer reduced motion
.konami-4 {
  transform-origin: 50% 50%;
  animation: shake 0.8s linear;
  animation-iteration-count: infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: initial;
  }
}

// Konami intensity 5: add a 40% translucent grayscale image of Richard
// Stallman in the center of the screen
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

  // Browser supports webp
  .webp &::before {
    background-image: url("~assets/stallman.webp");
  }

  // Browser supports avif, but not webp
  .notwebp.avif &::before {
    background-image: url("~assets/stallman.avif");
  }

  // Browser supports neither webp nor avif
  .notwebp.notavif &::before {
    background-image: url("~assets/stallman.png");
  }
}

// Shake animatiob
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
