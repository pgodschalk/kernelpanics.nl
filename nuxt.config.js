export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "kernelpanics.nl",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, viewport-fit=cover",
      },
      { name: "theme-color", content: "#1a56db" },
      {
        hid: "description",
        name: "description",
        content: "Frontend and devops",
      },
      { name: "googlebot", content: "index,follow" },
      { name: "generator", content: "NuxtJS" },
      { name: "subject", content: "Frontend and devops" },
      { name: "rating", content: "General" },
      { name: "referrer", content: "no-referrer-when-downgrade" },
      { name: "x-dns-prefetch-control", content: "off" },
      { name: "ICBM", content: "52.1517316, 4.4466505" },
      { name: "geo.position", content: "52.1517316;4.4466505" },
      { name: "geo.region", content: "nl-zh" },
      { name: "geo.placename", content: "Leiden" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@kdump8" },
      { name: "twitter:title", content: "kernel panics" },
      { name: "twitter:description", content: "Frontend and devops" },
      { name: "apple-mobile-web-app-title", content: "kernelpanics" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "mobile-web-app-capabale", content: "yes" },
      { name: "msapplication-config", content: "/browserconfig.xml" },
    ],
    link: [
      { rel: "manifest", type: "application/json", href: "/site.webmanifest" },
      { rel: "author", href: "mailto:patrick@kernelpanics.nl" },
      { rel: "me", type: "text/html", href: "https://gitlab.com/pgodschalk" },
      { rel: "me", type: "text/html", href: "https://github.com/pgodschalk" },
      { rel: "me", type: "text/html", href: "https://twitter.com/kdump8" },
      { rel: "me", type: "text/html", href: "https://t.me/pgodschalk" },
      {
        rel: "me",
        type: "text/html",
        href: "https://linkedin.com/patrick-godschalk",
      },
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon-32x32.png",
        sizes: "32x32",
      },
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico",
        sizes: "48x48",
      },
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon-16x16.png",
        sizes: "16x16",
      },
      {
        rel: "apple-touch-icon",
        type: "image/png",
        href: "/apple-touch-icon.png",
      },
      { rel: "mask-icon", type: "image/svg", href: "/safari-pinned-tab.svg" },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: "~/plugins/announcer.ts", mode: "client" },
    { src: "~/plugins/axe.ts", mode: "client" },
    { src: "~/plugins/image-support.ts", mode: "client" },
    { src: "~/plugins/konami.ts", mode: "client" },
    { src: "~/plugins/sentry.ts", mode: "client" },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
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
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  devServerHandlers: [],
}
