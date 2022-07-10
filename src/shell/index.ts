import apt from './apt'
import aptget from './aptget'
import asl from './asl'
import bash from './bash'
import cat from './cat'
import cheat from './cheat'
import clear from './clear'
import code from './code'
import curl from './curl'
import date from './date'
import echo from './echo'
import ed from './ed'
import emacs from './emacs'
import exit from './exit'
import fg from './fg'
import find from './find'
import finger from './finger'
import fuck from './fuck'
import halp from './halp'
import hello from './hello'
import help from './help'
import hi from './hi'
import hint from './hint'
import i from './i'
import kill from './kill'
import locate from './locate'
import logout from './logout'
import lpr from './lpr'
import mail from './mail'
import make from './make'
import man from './man'
import moo from './moo'
import more from './more'
import nano from './nano'
import patrick from './patrick'
import perl from './perl'
import ping from './ping'
import poweroff from './poweroff'
import pwd from './pwd'
import reboot from './reboot'
import restart from './restart'
import quit from './quit'
import screen from './screen'
import serenity from './serenity'
import shutdown from './shutdown'
import ssh from './ssh'
import su from './su'
import sudo from './sudo'
import telnet from './telnet'
import tmux from './tmux'
import top from './top'
import uname from './uname'
import vi from './vi'
import vim from './vim'
import website from './website'
import wget from './wget'
import who from './who'
import whoami from './whoami'
import write from './write'
import xyzzy from './xyzzy'
import ls from './ls'

export default function shell(
  input: string,
  asSuperuser: boolean = false
): string | ShellObject | Promise<ShellPromise> {
  const binary = input.trim().split(' ')[0]
  const args = input
    // Remove leading and trailing whitespace
    .trim()
    // Collapse multiple spaces into one space
    .replace(/ +(?= )/g, '')
    // Array from each word
    .split(' ')
    // Filter out the binary
    .filter((item, index) => {
      if (index > 0) return item
      return ''
    })
    // Convert back to a string
    .join(' ')

  switch (binary) {
    case './website':
      return website()
    case 'apt':
      return apt(args, asSuperuser)
    case 'apt-get':
      return aptget(args, asSuperuser)
    case 'asl':
      return asl()
    case 'bash':
      return bash()
    case 'cat':
      return cat(args)
    case 'cheat':
      return cheat()
    case 'clear':
      return clear()
    case 'code':
      return code()
    case 'curl':
      return curl(args)
    case 'date':
      return date()
    case 'echo':
      return echo()
    case 'ed':
      return ed()
    case 'emacs':
      return emacs()
    case 'exit':
      return exit()
    case 'fg':
      return fg()
    case 'find':
      return find(args)
    case 'finger':
      return finger()
    case 'fuck':
      return fuck()
    case 'halp':
      return halp()
    case 'hello':
      return hello(args)
    case 'help':
      return help()
    case 'hi':
      return hi()
    case 'hint':
      return hint()
    case 'i':
      return i(args)
    case 'kill':
      return kill()
    case 'locate':
      return locate(args)
    case 'logout':
      return logout()
    case 'lpr':
      return lpr()
    case 'ls':
      return ls(args)
    case 'mail':
      return mail()
    case 'make':
      return make(args, asSuperuser)
    case 'man':
      return man(args)
    case 'moo':
      return moo()
    case 'more':
      return more()
    case 'nano':
      return nano()
    case 'patrick':
      return patrick()
    case 'perl':
      return perl()
    case 'ping':
      return ping(args)
    case 'poweroff':
      return poweroff(asSuperuser)
    case 'pwd':
      return pwd()
    case 'reboot':
      return reboot(asSuperuser)
    case 'restart':
      return restart(asSuperuser)
    case 'quit':
      return quit()
    case 'screen':
      return screen()
    case 'serenity':
      return serenity()
    case 'shutdown':
      return shutdown(asSuperuser)
    case 'ssh':
      return ssh()
    case 'su':
      return su()
    case 'sudo':
      if (!args) return sudo()
      return shell(args, true)
    case 'telnet':
      return telnet()
    case 'tmux':
      return tmux()
    case 'top':
      return top()
    case 'uname':
      return uname()
    case 'vi':
      return vi()
    case 'vim':
      return vim()
    case 'website':
      return website()
    case 'who':
      return who()
    case 'whoami':
      return whoami()
    case 'wget':
      return wget(args)
    case 'write':
      return write()
    case 'xyzzy':
      return xyzzy()
    default:
      return 'Unrecognized command. Type "help" for assistance.'
  }
}
