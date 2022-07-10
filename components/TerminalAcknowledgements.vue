<template>
  <div>
    <h2 class="mt-6 font-bold">Particular appreciations</h2>
    <ul>
      <li v-for="item in generalAcknowledgements" :key="item.name">
        <a
          :href="item.url"
          hreflang="en"
          type="text/html"
          rel="external noopener"
          >{{ item.name }} for {{ item.reason }}</a
        >
      </li>
    </ul>
    <h2 class="mt-6 font-bold">Built with</h2>
    <ul>
      <li
        v-for="item in opensourceAcknowledgements"
        :key="item.name"
        class="inline"
      >
        <a
          :href="item.url"
          hreflang="en"
          type="text/html"
          rel="external noopener"
          >{{ item.name }},
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TerminalAcknowledgements',
  data() {
    return {
      generalAcknowledgements: [
        {
          name: 'Randall "xkcd" Munroe',
          url: 'https://xkcd.com',
          reason: 'inspiration and most of the humour for the terminal',
        },
        {
          name: 'Max "chromakode" Goodhart',
          url: 'https://github.com/chromakode/xkcdfools',
          reason: 'the original terminal implementation',
        },
      ],
      opensourceAcknowledgements: [
        { name: 'Axios', url: 'https://github.com/axios/axios' },
        { name: 'Babel', url: 'https://babeljs.io' },
        {
          name: 'commitlint',
          url: 'https://github.com/conventional-changelog/commitlint',
        },
        { name: 'CoreJS', url: 'https://github.com/zloirock/core-js' },
        {
          name: 'DefinitelyTyped',
          url: 'https://github.com/DefinitelyTyped/DefinitelyTyped',
        },
        {
          name: 'detect-browser',
          url: 'https://github.com/DamonOehlman/detect-browser',
        },
        { name: 'ESLint', url: 'https://eslint.org' },
        { name: 'Git', url: 'https://git-scm.com' },
        { name: 'Husky', url: 'https://github.com/typicode/husky' },
        { name: 'Jest', url: 'https://jestjs.io' },
        { name: 'lint-staged', url: 'https://github.com/okonet/lint-staged' },
        { name: 'node-fibers', url: 'https://github.com/laverdet/node-fibers' },
        { name: 'NuxtJS', url: 'https://nuxtjs.org' },
        { name: 'Prettier', url: 'https://prettier.io' },
        { name: 'Sass', url: 'https://sass-lang.com' },
        { name: 'stylelint', url: 'https://stylelint.io' },
        { name: 'Tailwind CSS', url: 'https://tailwindcss.com' },
        { name: 'TypeScript', url: 'https://www.typescriptlang.org' },
        { name: 'uuid', url: 'https://github.com/uuidjs/uuid' },
        { name: 'Vetur', url: 'https://github.com/vuejs/vetur' },
        { name: 'Visual Studio Code', url: 'https://code.visualstudio.com' },
        {
          name: 'Vue Konami',
          url: 'https://github.com/cadgerfeast/vue-konami',
        },
        { name: 'Vue Test Utils', url: 'https://vue-test-utils.vuejs.org' },
        { name: 'Vue-A11y', url: 'https://vue-a11y.com' },
        { name: 'Vue.js', url: 'https://vuejs.org' },
      ],
    }
  },
})
</script>
