import shutdown from "../shutdown"

export default function poweroff(asSuperuser: boolean) {
  return shutdown(asSuperuser)
}
