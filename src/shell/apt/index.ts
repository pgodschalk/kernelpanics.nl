import { detect } from "detect-browser"
const browser = detect()

export default function apt(args: string, asSuperuser: boolean) {
  // apt
  if (!args) return "This APT has Super Cow Powers."

  switch (args) {
    // apt update
    case "update":
      if (!asSuperuser) return errNoSuperuser()
      return "Reading package lists... Done"
    // apt upgrade
    case "upgrade":
      if (!asSuperuser) return errNoSuperuser()
      if (browser!.name === "ie")
        return `<a href="https://browsehappy.com/" rel="external noopener" target="_blank">To complete installation, click here.</a>`
      return "This looks pretty good to me."
    // apt dist-upgrade
    case "dist-upgrade":
      if (!asSuperuser) return errNoSuperuser()
      if (!browser!.os) return "You are already running something fancy."
      return `You are already running ${browser!.os}.`
    // apt moo
    case "moo":
      return '<div class="whitespace-pre">        (__)<br>        (oo)<br>  /------\\/ <br> / |    ||  <br>*  /\\---/\\  <br>   ~~   ~~  <br>...."Have you mooed today?"...</div>'
    // apt $1
    default:
      return `E: Invalid operation ${args}`
  }
}

const errNoSuperuser = () => {
  return "E: Unable to lock the administration directory, are you root?"
}
