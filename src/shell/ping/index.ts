export default function ping(args: string) {
  if (args)
    return `Okay, pinging ${args} with an IE6 VM. That'll be fun for the analytics.`

  return 'There is another submarine three miles ahead, bearing 225, forty fathoms down.'
}
