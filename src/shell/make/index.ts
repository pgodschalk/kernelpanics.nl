export default function make(args: string, asSuperuser: boolean) {
  // make
  if (!args)
    return 'make: <span aria-hidden="true">***</span> No targets specified and no makefile found.  Stop.'

  switch (args) {
    // make me a sandwich
    case "me a sandwich":
      if (asSuperuser) return "Okay."
      return "What? Make it yourself."
    // make love
    case "love":
      return "I put on my robe and wizard hat."
    // make $1
    default:
      return `make: <span aria-hidden="true">***</span> No rule to make target \`${
        args.split(" ")[0]
      }'.  Stop.`
  }
}
