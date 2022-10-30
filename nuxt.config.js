export default {
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: "en",
    },
    title: "kernelpanics.nl",
    meta: [
      { charset: "utf-8" },
      { hid: "robots", name: "robots", content: "index,follow" },
      { hid: "googlebot", name: "googlebot", content: "index,follow" },
      { hid: "google", name: "google", content: "notranslate" },
      { hid: "generator", name: "generator", content: "NuxtJS" },
      { hid: "subject", name: "subject", content: "Frontend and devops" },
      { hid: "rating", name: "rating", content: "General" },
      {
        hid: "referrer",
        name: "referrer",
        content: "no-referrer-when-downgrade",
      },
      { hid: "ICBM", name: "ICBM", content: "52.1517316, 4.4466505" },
      {
        hid: "geo.position",
        name: "geo.position",
        content: "52.1517316;4.4466505",
      },
      { hid: "geo.region", name: "geo.region", content: "nl-zh" },
      { hid: "geo.placename", name: "geo.placename", content: "Leiden" },
      { property: "og:locale", content: "en_GB" },
      {
        hid: "twitter.title",
        name: "twitter:title",
        content: "kernelpanics.nl",
      },
      {
        hid: "twitter.description",
        name: "twitter:description",
        content: "Frontend and devops",
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "https://kernelpanics.nl/twitter-card.webp",
      },
      { hid: "twitter:alt", name: "twitter:alt", content: "kernel panics" },
      {
        hid: "apple-mobile-web-app-title",
        name: "apple-mobile-web-app-title",
        content: "kernelpanics",
      },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico",
      },
      {
        rel: "license",
        href: "https://github.com/pgodschalk/kernelpanics.nl/blob/main/LICENSE.txt",
      },
      { rel: "me", type: "text/html", href: "https://gitlab.com/pgodschalk" },
      { rel: "me", type: "text/html", href: "https://github.com/pgodschalk" },
      { rel: "me", type: "text/html", href: "https://twitter.com/kdump8" },
      { rel: "me", type: "text/html", href: "https://t.me/pgodschalk" },
      {
        rel: "me",
        type: "text/html",
        href: "https://linkedin.com/patrick-godschalk",
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page
  // (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: "~/plugins/announcer.ts" },
    { src: "~/plugins/image-support.ts", mode: "client" },
    { src: "~/plugins/konami.ts" },
    { src: "~/plugins/sentry.ts" },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended)/
  // (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/stylelint
    "@nuxtjs/stylelint-module",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000:
    // https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      charset: null, // Set in meta to ensure it is at the top
      viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
      appleStatusBarStyle: "black",
      name: "kernelpanics.nl",
      author: "/humans.txt",
      description: "Frontend and devops",
      theme_color: "#1a56db",
      ogTitle: "kernelpanics.nl",
      ogDescription: "frontend and devops",
      ogHost: "https://kernelpanics.nl",
      ogImage: {
        path: "https://kernelpanics.nl/icon.png",
        width: 383,
        height: 383,
        type: "image/png",
      },
      twitterCard: "summary_large_image",
      twitterSite: "@kdump8",
    },
    manifest: {
      name: "kernelpanics.nl",
      short_name: "kernelpanics",
      description: "Frontend and devops",
      background_color: "#1a56db",
      useWebmanifestExtension: true,
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  devServerHandlers: [],
}
