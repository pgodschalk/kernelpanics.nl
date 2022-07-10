export default function cat(args: string): string | ShellObject {
  if (args === '.acknowledgements.txt') {
    return {
      action: 'renderComponent',
      component: 'TerminalAcknowledgements',
    }
  } else if (args === 'contact.txt') {
    return {
      action: 'renderComponent',
      component: 'TerminalContact',
    }
  } else {
    return "You're a kitty!"
  }
}
