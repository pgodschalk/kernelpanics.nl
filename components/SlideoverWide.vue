<template>
  <div
    class="relative z-10"
    aria-labelledby="slide-over-title"
    role="dialog"
    aria-modal="true"
  >
    <div class="fixed inset-0"></div>
    <div class="fixed inset-0 overflow-hidden">
      <div class="absolute inset-0 overflow-hidden">
        <div
          class="fixed inset-y-0 right-0 flex max-w-full pl-10 pointer-events-none sm:pl-16"
        >
          <transition
            enter-class="translate-x-full"
            enter-to-class="translate-x-0"
            enter-active-class="transition duration-500 ease-in-out transform sm:duration-700"
            leave-class="translate-x-0"
            leave-to-class="translate-x-full"
            leave-active-class="transition duration-500 ease-in-out transform sm:duration-700"
          >
            <div
              v-show="visible"
              class="w-screen pointer-events-auto transition-x-full"
            >
              <div
                class="flex flex-col h-full py-6 overflow-y-scroll bg-white shadow-xl"
              >
                <div class="px-4 sm:px-6">
                  <div class="flex items-start justify-between">
                    <div class="mx-auto max-w-prose text-lg">
                      <h2
                        id="slide-over-title"
                        class="font-sans text-lg font-medium text-gray-900"
                      >
                        <span
                          class="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl"
                          >{{ title }}</span
                        >
                      </h2>
                    </div>
                    <div class="flex items-center ml-3 h-7">
                      <button
                        type="button"
                        class="text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        @click="$emit('close', '')"
                      >
                        <span class="sr-only">Close panel</span>
                        <!-- Heroicon name: outline/x-mark -->
                        <svg
                          class="w-6 h-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  class="relative flex-1 px-4 mt-6 font-sans text-gray-900 sm:px-6"
                >
                  <slot />
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "SlideoverWide",
  props: {
    title: {
      type: String,
      required: true,
    },
    visible: {
      type: Boolean,
      required: true,
    },
  },
})
</script>
