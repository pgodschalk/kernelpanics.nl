import { detect } from 'detect-browser'
const browser = detect()

export default function apt(args: string, asSuperuser: boolean) {
  if (!args) return 'This APT has Super Cow Powers.'

  switch (args) {
    case 'update':
      if (!asSuperuser) return errNoSuperuser()
      return 'Reading package lists... Done'
    case 'upgrade':
      if (!asSuperuser) return errNoSuperuser()
      if (browser!.name === 'ie')
        return `<a href="https://browsehappy.com/" rel="external noopener" target="_blank">To complete installation, click here.</a>`
      return 'This looks pretty good to me.'
    case 'dist-upgrade':
      if (!asSuperuser) return errNoSuperuser()
      if (!browser!.os) return 'You are already running something fancy.'
      return `You are already running ${browser!.os}.`
    case 'moo':
      return '<div class="whitespace-pre">        (__)<br>        (oo)<br>  /------\\/ <br> / |    ||  <br>*  /\\---/\\  <br>   ~~   ~~  <br>...."Have you mooed today?"...</div>'
    default:
      return `E: Invalid operation ${args}`
  }
}

function errNoSuperuser() {
  return 'E: Unable to lock the administration directory, are you root?'
}
