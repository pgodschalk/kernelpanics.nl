<template>
  <article class="relative overflow-hidden py-16">
    <div
      class="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]"
    >
      <div
        class="relative mx-auto h-full max-w-prose text-lg"
        aria-hidden="true"
      >
        <svg
          class="absolute top-12 left-full translate-x-32 transform"
          width="404"
          height="384"
          fill="none"
          viewBox="0 0 404 384"
        >
          <defs>
            <pattern
              id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                class="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="384"
            fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
          />
        </svg>
        <svg
          class="absolute top-1/2 right-full -translate-y-1/2 -translate-x-32 transform"
          width="404"
          height="384"
          fill="none"
          viewBox="0 0 404 384"
        >
          <defs>
            <pattern
              id="f210dbf6-a58d-4871-961e-36d5016a0f49"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                class="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="384"
            fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
          />
        </svg>
        <svg
          class="absolute bottom-12 left-full translate-x-32 transform"
          width="404"
          height="384"
          fill="none"
          viewBox="0 0 404 384"
        >
          <defs>
            <pattern
              id="d3eb07ae-5182-43e6-857d-35c643af9034"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                class="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="384"
            fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
          />
        </svg>
      </div>
    </div>
    <div class="relative px-4 sm:px-6 lg:px-8">
      <div class="prose prose-lg prose-blue mx-auto mt-6 text-gray-500">
        <p
          >This page describes my OpenPGP public key signing policy. I am more
          than happy to sign other people's public keys, assuming the steps
          outlined in this document are followed.</p
        >
        <div class="mt-8 inline-flex rounded-md shadow">
          <a
            href="/pgp-key.asc"
            download
            class="flex items-center justify-center rounded-md border no-underline border-transparent bg-blue-600 px-5 py-3 text-base font-medium text-white hover:bg-blue-700"
            >Get my OpenPGP key &rarr;</a
          >
        </div>
        <pre class="text-sm">
pub   rsa4096/0x4E6C0EAA175F13A2 2021-03-12 [SC] [expires: 2025-03-12]
      Key fingerprint = 07B1 A680 11CA 609C 8AB0  F67C 4E6C 0EAA 175F 13A2
uid                   [ultimate] Patrick Godschalk &lt;patrick@kernelpanics.nl&gt;
uid                   [ultimate] Patrick Godschalk &lt;p.godschalk@ienpm.nl&gt;
uid                   [ultimate] [jpeg image of size 5275]
sub   rsa4096/0xDC5A4EE35F68AFAF 2021-03-12 [E] [expires: 2025-03-12]</pre
        >
        <h3>Why OpenPGP?</h3>
        <p
          >OpenPGP is a public key cryptographic system. It allows people to
          send and sign electronic messages in a secure and verifiable manner.
          OpenPGP depends on building a web of trust among its users, since
          there is no centralized authority. This web is built by people signing
          each other's public keys, and the level of trust or confidence you can
          have when interacting with someone presenting a public key depends on
          who has signed it and how careful they were in validating the owner's
          identity.</p
        >
        <p
          >I use OpenPGP to sign some of my e-mails, so if there is ever any
          need to verify that I really sent it and the message is intact, that
          verification can be done. Additionally, sometimes I encrypt my
          messages, when I want to ensure the confidentiality of the message.
          (You may be surprised to learn that the vast majority of time an
          e-mail is in transit from one server to another, it is not encrypted,
          so anyone listening in could view its contents. OpenPGP encryption
          prevents this.)</p
        >
        <h3>My location</h3>
        <p>I am currently living in Leiden, The Netherlands.</p>
        <h3>Signature levels</h3>
        <p
          >There are four types of signatures used for certification of a key
          holder's identify, as described in
          <a
            href="https://datatracker.ietf.org/doc/html/rfc4880"
            target="_blank"
            rel="external noopener"
            >RFC 4880</a
          ></p
        >
        <ul>
          <li>
            <strong>0x10</strong>: Generic certification of a User ID and
            Public-Key packet<br />The issuer of this certification does not
            make any particular assertion as to how well the certifier has
            checked that the owner of the key is in fact the person described by
            the User ID.
          </li>
          <li>
            <strong>0x11</strong>: Persona certification of a User ID and
            Public-Key packet<br />The issuer of this certification has not done
            any verification of the claim that the owner of this key is the User
            ID specified.
          </li>
          <li>
            <strong>0x12</strong>: Casual certification of a User ID and
            Public-Key packet<br />The issuer of this certification has done
            some casual verification of the claim of identity.
          </li>
          <li>
            <strong>0x13</strong>: Positive certification of a User ID and
            Public-Key packet<br />The issuer of this certification has done
            substantial verification of the claim of identity.
          </li>
        </ul>
        <p
          >Because both <em>0x10</em> and <em>0x11</em> do not actually convey
          any useful information about how well the signer verified the signee's
          identity, I will not sign public keys with either of these two
          levels.</p
        >
        <p
          >For me to sign your public key with <em>0x12</em> (casual
          certification), the following requirements need to be met by the
          signee:</p
        >
        <ul>
          <li>Meet in person, either individually or at some signing party</li>
          <li>Present at least one government-issued photo ID</li>
          <li
            >Give me a written copy of your key's fingerprint, so I can verify I
            received the correct key before signing it</li
          >
        </ul>
        <p
          >For me to sign your key with <em>0x13</em> (positive certification),
          the following in addition to the requirements for <em>0x12</em> need
          to be met by the signee:</p
        >
        <ul>
          <li
            >I need to know you personally, and feel comfortable that you really
            are who you claim to be, or</li
          >
          <li
            >Someone whose key I have already signed with <em>0x13</em> will
            vouch for you</li
          >
        </ul>
        <h3>Signing process</h3>
        <p
          >When I agree to sign someone's key, I expect that they will be
          willing and able to sign my public key in return. This helps to
          strengthen the web of trust with mutual verification.</p
        >
        <p>These are the steps I will take to sign your public key:</p>
        <ol>
          <li>Arrange to meet at some public location</li>
          <li
            >At the meeting, each person will identify themselves to the
            satisfaction of the other following established requirements for
            IDs, etc.</li
          >
          <li
            >Upon achieving positive identification, exchange written or printed
            copies of the public key's fingerprint, along with the associated
            UID(s) to be signed and the signer's e-mail address to which signing
            requests will be sent in the next step</li
          >
          <li
            >After the meeting, the signee will send an e-mail to the signer's
            specified e-mail address for <strong>each UID</strong> they wish to
            have signed. Each e-mail <strong>must be signed</strong> with the
            signee's public key, and the sending e-mail address must match the
            UID <strong>exactly</strong></li
          >
          <li>I will then locally sign each UID requested</li>
          <li
            >After signing your public key, I will encrypt the signed copy to
            the signee and send an e-mail signed with my public key to the
            corresponding UID's e-mail address with the encrypted signed key
            attached</li
          >
          <li
            >When you receive this e-mail, you may import my signature, and then
            (if you wish, and I would recommend) push the signature to a public
            key server</li
          >
        </ol>
        <p
          >Requiring the signee to send a signed e-mail from each UID address
          and then sending the signed public keys back to the UID address
          encrypted ensures that the signee has control of both the e-mail
          account claimed by the UID and the OpenPGP public/private key pair
          used by the signee. Skipping either of these steps could potentially
          allow signatures to be made which do not accurately reflect the true
          identity of the signee.</p
        >
        <h3
          >Signing subsequent keys before expiration / revocation of old key</h3
        >
        <p
          >If I have signed your public key and it is set to expire in the near
          future, or if you decide to generate a new public key and revoke your
          old one, I will sign your new key without needing to meet in person if
          the following conditions are met:</p
        >
        <ol>
          <li
            >Send me an e-mail signed with your old key. This e-mail needs to
            list the full fingerprint of the new key, along with the new primary
            UID (even if it remains the same as the old key)</li
          >
          <li
            >The old key <strong>cannot</strong> have expired or been revoked
            before the e-mail is sent</li
          >
          <li
            >When I receive your message and verify its signature, I will send
            you a signed e-mail acknowledging receipt</li
          >
          <li
            >Then follow the signing process as outlined above, beginning at
            step 4 using the newly generated key to perform the needed
            signings</li
          >
        </ol>
        <p
          ><strong>Note:</strong> I will only guarantee to sign the new primary
          UID and any sub-UIDs that I had previously signed on the old key. New
          sub-UIDs will be signed at my discretion.</p
        >
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "SigningPolicyContent",
})
</script>
