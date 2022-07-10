export default function locate(args: string) {
  if (!args) return 'Locate what?'

  switch (args) {
    case 'ninja':
      return 'Ninja can not be found!'
    case 'keys':
      return 'Have you checked your coat pocket?'
    case 'joke':
      return 'Joke found on user.'
    case 'problem':
      return 'Problem exists between keyboard and chair.'
    case 'raptor':
      return 'BEHIND YOU!!!'
    default:
      return `Locate what?`
  }
}
