<template>
  <div>
    <script type="application/ld+json">
      {
        "@context": "https://schema.org/",
        "@type": "Person",
        "name": "Patrick Godschalk",
        "url": "https://kernelpanics.nl",
        "image": "https://kernelpanics.nl/icon.png",
        "sameAs": [
          "https://facebook.com/p.godschalk",
          "https://twitter.com/kdump8",
          "https://instagram.com/patrick_godschalk",
          "https://www.youtube.com/channel/UCkbj02BmMwS01THhB0fgURg",
          "https://linkedin.com/in/patrick-godschalk",
          "https://pinterest.com/littleoddlife/",
          "https://soundcloud.com/patrick-godschalk",
          "https://www.tumblr.com/argure",
          "https://github.com/pgodschalk",
          "https://kernelpanics.nl"
        ],
        "jobTitle": "Senior Fullstack Engineer",
        "worksFor": {
          "@type": "Organization",
          "name": "Mozard"
        }
      }
    </script>
    <ul class="mt-6">
      <li>
        E-mail:
        <a href="mailto:patrick@kernelpanics.nl" rel="author"
          >patrick@kernelpanics.nl</a
        >
      </li>
      <li>
        Location:
        <a
          href="https://www.openstreetmap.org/search?query=leiden#map=13/52.1518/4.4815"
          hreflang="en"
          target="_blank"
          rel="external noopener"
          >Leiden, The Netherlands</a
        >
      </li>
      <li>
        Website:
        <a
          type="text/html"
          href="https://kernelpanics.nl"
          hreflang="nl"
          rel="author"
          >kernelpanics.nl</a
        >
      </li>
    </ul>
    <ul class="mt-6">
      <li>
        GitLab:
        <a
          href="https://gitlab.com/pgodschalk"
          hreflang="en"
          rel="author external noopener"
          >pgodschalk</a
        >
      </li>
      <li>
        GitHub:
        <a
          href="https://github.com/pgodschalk"
          hreflang="en"
          rel="author external noopener"
          >pgodschalk</a
        >
      </li>
    </ul>
    <ul class="mt-6">
      <li>
        Twitter:
        <a
          href="https://twitter.com/kdump8"
          hreflang="en"
          rel="author external noopener"
          >@kdump8</a
        >
      </li>
      <li>
        Telegram:
        <a
          href="https://t.me/pgodschalk"
          hreflang="en"
          rel="author external noopener"
          >@pgodschalk</a
        >
      </li>
      <li>
        LinkedIn:
        <a
          href="https://linkedin.com/patrick-godschalk"
          hreflang="en"
          rel="author external noopener"
          >patrick-godschalk</a
        >
      </li>
    </ul>
    <p class="mt-6"
      >OpenPGP Key: <a href="/pgp-key.asc" download>0x4E6C0EAA175F13A2</a></p
    >
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "TerminalContact",
})
</script>
