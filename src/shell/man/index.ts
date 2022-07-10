export default function man(args: string) {
  if (!args) return "Oh, I'm sure you can figure it out."

  switch (args) {
    case 'last':
      return 'Man, last night was <strong class="font-medium">AWESOME</strong>.'
    case 'help':
      return 'Man, help me out here.'
    case 'next':
      return 'Request confirmed; you will be reincarnated as a man next.'
    case 'cat':
      return 'You are now riding a half-man half-cat.'
    case 'readme':
      return 'A few hours of trial and error can save you several minutes of looking at the README.'
    default:
      return `No manual entry for ${args}`
  }
}
