export default function locate(args: string) {
  // locate
  if (!args) return "Locate what?"

  switch (args) {
    // locate ninja
    case "ninja":
      return "Ninja can not be found!"
    // locate keys
    case "keys":
      return "Have you checked your coat pocket?"
    // locate joke
    case "joke":
      return "Joke found on user."
    // locate problem
    case "problem":
      return "Problem exists between keyboard and chair."
    // locate raptor
    case "raptor":
      return "BEHIND YOU!!!"
    // locate $1
    default:
      return "Locate what?"
  }
}
