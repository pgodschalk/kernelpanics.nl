export default function cat(args: string): string | ShellObject {
  if (args === ".acknowledgements.txt") {
    // cat .acknowledgements.txt
    return {
      action: "renderComponent",
      component: "TerminalAcknowledgements",
    }
  } else if (args === ".responsible-disclosure.txt") {
    // cat .responsible-disclosure.txt
    return {
      action: "renderComponent",
      component: "TerminalDisclosure",
    }
  } else if (args === "contact.txt") {
    // cat contact.txt
    return {
      action: "renderComponent",
      component: "TerminalContact",
    }
  } else if (args === "pgp-signing-policy") {
    // cat pgp-signing-policy
    return "@@@@�(4(4@@@F1F1���XtXtx@��<�M>�hhhDDS�td8880P�td������llQ�tdR�td/lib64/ld-linux-x86-64.so.2 GNU���GNU�I����c���R�U$�GNUq���@��qvz�����`~j�u>[�e�m��|N��<�"
  } else {
    return "You're a kitty!"
  }
}
