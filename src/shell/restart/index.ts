import reboot from "../reboot"

export default function restart(asSuperuser: boolean) {
  return reboot(asSuperuser)
}
