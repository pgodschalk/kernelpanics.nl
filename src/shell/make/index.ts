export default function make(args: string, asSuperuser: boolean) {
  if (!args)
    return 'make: <span aria-hidden="true">***</span> No targets specified and no makefile found.  Stop.'

  switch (args) {
    case 'me a sandwich':
      if (asSuperuser) return 'Okay.'
      return 'What? Make it yourself.'
    case 'love':
      return 'I put on my robe and wizard hat.'
    default:
      return `make: <span aria-hidden="true">***</span> No rule to make target \`${
        args.split(' ')[0]
      }'.  Stop.`
  }
}
