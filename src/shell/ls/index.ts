export default function ls(args: string) {
  if (args === '-l') {
    return `-rw-r--r-- 1 guest guest 0 Jan 01 00:00 .acknowledgements.txt
-rw-r--r-- 1 guest guest 0 Jan 01 00:00 contact.txt`
  }
  if (args === '-la') {
    return `-rw-r--r--  1 guest guest  0 Jan 01 00:00 .acknowledgements.txt
-rw-r--r--  1 guest guest  0 Jan 01 00:00 contact.txt
`
  }

  return 'contact.txt'
}
