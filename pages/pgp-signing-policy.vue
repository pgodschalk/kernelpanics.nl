<template>
  <TheTerminalEmulator initial-input="./pgp-signing-policy" />
</template>

<script lang="ts">
import Vue from "vue"
import TheTerminalEmulator from "~/components/TheTerminalEmulator.vue"

export default Vue.extend({
  components: { TheTerminalEmulator },
})
</script>
