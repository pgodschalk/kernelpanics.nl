import apt from "../apt"

export default function aptget(args: string, asSuperuser: boolean) {
  return apt(args, asSuperuser)
}
