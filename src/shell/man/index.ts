export default function man(args: string) {
  // man
  if (!args) return "Oh, I'm sure you can figure it out."

  switch (args) {
    // man last
    case "last":
      return 'Man, last night was <strong class="font-medium">AWESOME</strong>.'
    // man help
    case "help":
      return "Man, help me out here."
    // man next
    case "next":
      return "Request confirmed; you will be reincarnated as a man next."
    // man cat
    case "cat":
      return "You are now riding a half-man half-cat."
    // man readme
    case "readme":
      return "A few hours of trial and error can save you several minutes of looking at the README."
    default:
      return `No manual entry for ${args}`
  }
}
