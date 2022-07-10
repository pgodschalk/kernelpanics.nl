export default function reboot(asSuperuser: boolean): ShellObject | string {
  if (asSuperuser) {
    return {
      data:
        'Broadcast message from guest@kernelpanics<br><br>The system is going down for maintenance NOW!',
      action: 'reboot',
    }
  } else return 'Must be root.'
}
