export default function shutdown(asSuperuser: boolean): ShellObject | string {
  if (asSuperuser) {
    return {
      data:
        'Broadcast message from guest@kernelpanics<br><br>The system is going down for maintenance NOW!',
      action: 'shutdown',
    }
  } else return 'Must be root.'
}
