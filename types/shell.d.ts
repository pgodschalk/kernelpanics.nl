interface ShellObject {
  action:
    | 'clear'
    | 'exit'
    | 'reboot'
    | 'renderComponent'
    | 'shutdown'
    | 'website'
  data?: string
  component?: string
}

interface ShellPromise {
  type: 'image'
  data: string
}
