<template>
  <div>
    <h2 class="mt-6 font-bold">Responsible disclosure policy</h2>
    <p
      >As this is my personal website, there is no bug bounty. There is no money
      to be had here.</p
    >
    <h3>How I approach security issues</h3>
    <ul>
      <li
        >I will not take legal action against anyone for disclosing
        vulnerabilies as instructed here;</li
      >
      <li
        >Vulnerability reports will always be responded to as fast as possible -
        usually within 72 hours;</li
      >
    </ul>
    <h3 class="mt-6 font-bold">Rules</h3>
    <ul>
      <li
        >Testing should be limited to sites and services that I directly
        operate. I will not accept reports for third-party services or providers
        that integrate with my website through my APIs;</li
      >
      <li
        >Don't perform any actions that could harm the reliability or integrity
        of my services and data. Some examples of harmful activites that are not
        permitted under this policy include: brute forcing, denial of service
        (DoS), spamming, timing attacks, etc;</li
      >
      <li>Don't use scanners or automated tools to find vulnerabilies;</li>
      <li
        >No information about issues found should be publicly disclosed or
        shared until I've completed my investigation and resolution. After
        confirmation, you are free to document and publish any information about
        the issues you've found.</li
      >
    </ul>
    <h3 class="mt-6 font-bold">Out of Scope vulnerabilities</h3>
    <p
      >When reporting vulnerabilities, please consider (1) attack scenario /
      exploitability, and (2) security impact of the bug. The following issues
      are generally considered out of scope (not an exhaustive list):</p
    >
    <p
      >Account/E-mail enumeration; attacks requiring MITM or physical access to
      a user's device; brute force attacks; clickjacking; content spoofing and
      text injection; CSRF vulnerabilities; Denial of Service attacks; email
      SPF, DKIM and DMARC records; invite enumeration; missing HttpOnly/Secure
      cookie flags; open CORS headers; publicly accessible login panels; reports
      from scanners and automated tools; self-exploitation (like token reuse and
      console scripting); social engineering or phishing attacks targeting users
      or me</p
    >
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "TerminalDisclosure",
})
</script>
