<template>
  <div class="w-screen h-screen font-mono bg-black dark:bg-black">
    <div class="py-inset">
      <header class="fixed w-screen p-4 px-4">
        <h1 class="w-full text-3xl font-bold bg-white dark:bg-white px-inset">
          <span aria-hidden="true">patrick_godschalk :(</span>
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
      <main class="px-4 pt-32 text-white">
        <p aria-hidden="true"
          >{{ getTimestamp() }} init[1]: segfault at 0
          ip&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(null)
          sp 00007fffc8e30628 error 14 in systemd055b524b53000+15c000]</p
        >
        <p
          ><span aria-hidden="true">{{ getTimestamp() }}</span> Kernel panic -
          not syncing:
          <span
            class="text-red-400 dark:text-red-400 motion-safe:animate-pulse"
            >{{ error.message }}</span
          >! exitcode=<span aria-hidden="true">0x0</span
          ><span
            class="font-bold text-red-400 dark:text-red-400 motion-safe:animate-pulse"
            >{{ error.statusCode }}</span
          ></p
        >
        <p aria-hidden="true">{{ getTimestamp() }}</p>
        <p aria-hidden="true"
          >{{ getTimestamp() }} CPU: 0 PID: 1 Comm: init Not tainted
          5.15.0-52-generic #52~22.04.1-Linux</p
        >
        <p aria-hidden="true">{{ getTimestamp() }} Call Trace:</p>
        <p aria-hidden="true"
          >{{ getTimestamp() }} &nbsp;dump_stack+0x63/0x8b</p
        >
        <p aria-hidden="true">{{ getTimestamp() }} &nbsp;panic+0xe4/0x24d</p>
        <p aria-hidden="true">{{ getTimestamp() }} &nbsp;do_exit+0xaee/0xaf0</p>
        <p aria-hidden="true"
          >{{ getTimestamp() }} &nbsp;do_group_exit+0x43/0xb0</p
        >
        <p aria-hidden="true"
          >{{ getTimestamp() }} &nbsp;get_signal+0x296/0x5d0</p
        >
        <p aria-hidden="true"
          >{{ getTimestamp() }} &nbsp;do_signal+0x37/0x750</p
        >
        <p aria-hidden="true"
          >{{ getTimestamp() }} &nbsp;? pick_next_task_fair+0x449/0x570</p
        >
        <p aria-hidden="true"
          >{{ getTimestamp() }} &nbsp;? __switch_to+0x13f/0x540</p
        >
        <p aria-hidden="true">{{ getTimestamp() }} &nbsp;? printk+0x52/0x6e</p>
        <p aria-hidden="true"
          >{{ getTimestamp() }} &nbsp;? __schedule+0x3de/0x8b0</p
        >
        <p aria-hidden="true"
          >{{ getTimestamp() }} &nbsp;exit_to_usermode_loop+0x80/0xd0</p
        >
        <p aria-hidden="true"
          >{{ getTimestamp() }} &nbsp;prepare_exit_to_usermode+0x66/0x90</p
        >
        <p aria-hidden="true"
          >{{ getTimestamp() }} &nbsp;? page_fault+0x36/0x60</p
        >
        <p aria-hidden="true">{{ getTimestamp() }} &nbsp;retint_user+0x8/0x8</p>
        <p aria-hidden="true"
          >{{ getTimestamp() }} RIP:
          0033:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(null)</p
        >
        <p aria-hidden="true"
          >{{ getTimestamp() }} RSP: 002b:00007fffc8e30628 EFLAGS: 00010246</p
        >
        <p aria-hidden="true"
          >{{ getTimestamp() }} RAX: 00007fef29a26ca0 RBX: 00007fef27f31cb0 RCX:
          00007fef2981aef8</p
        >
        <p aria-hidden="true"
          >{{ getTimestamp() }} RDX: 00007fffc8e30648 RSI: 00007fef2981ab70 RD1:
          00007fef2808f72e</p
        >
        <p aria-hidden="true"
          >{{ getTimestamp() }} RBP: 00007fffc8e307d0 R00: 00007fffc8e30680 R09:
          0000000000000000</p
        >
        <p aria-hidden="true"
          >{{ getTimestamp() }} R10: 00007fef282c6050 R11: 0000000000000000 R12:
          00007fef29a054c8</p
        >
        <p aria-hidden="true"
          >{{ getTimestamp() }} R13: 00007fef27f11000 R14: 00007fef27f31fb0 R15:
          0000000000 3b4158</p
        >
        <p aria-hidden="true"
          >{{ getTimestamp() }} Kernel Offset: 0x26e00000 from
          0x:ffffffff81000000 (relocation: range:
          0xffffffff80000000-0xffffffffbfffffff)</p
        >
        <p aria-hidden="true"
          >{{ getTimestamp() }} ---[ end: Kernel panic - not syncing:
          {{ error.message }}! exitcode=0x0{{ error.statusCode }}]</p
        >
        <p aria-hidden="true">{{ getTimestamp() }}</p>
        <p class="sr-only"
          >This error page visually pretends to be a kernel panic, for brevity,
          screen readers only read the first line.</p
        >
      </main>
      <footer
        class="absolute bottom-0 left-0 z-10 w-full px-4 py-6 text-center text-white bg-black dark:text-white dark:bg-black md:pb-20"
      >
        <a
          class="inline-block px-12 py-3 border-2 border-white hover:text-black dark:hover:text-black hover:bg-white dark:hover:bg-white"
          href="https://kernelpanics.nl"
          >Reboot</a
        >
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  layout: "error",
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getTimestamp() {
      return `[ ${Date.now().toString().slice(0, 2)}.${Date.now()
        .toString()
        .slice(-6)}]`
    },
  },
})
</script>
