interface ShellObject {
  action:
    | "clear"
    | "exit"
    | "reboot"
    | "renderComponent"
    | "showSigningPolicy"
    | "shutdown"
    | "website"
  data?: string
  component?: string
}

interface ShellPromiseData {
  src: string
  alt: string
}

interface ShellPromise {
  type: "image"
  data: string | ShellPromiseData
}
