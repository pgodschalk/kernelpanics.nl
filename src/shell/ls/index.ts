export default function ls(args: string) {
  if (args === "-l") {
    // ls -l
    return `-rw-r--r-- 1 guest guest 0 Jan 01 00:00 .acknowledgements.txt
-rw-r--r-- 1 guest guest 0 Jan 01 00:00 .responsible-disclosure.txt
-rw-r--r-- 1 guest guest 0 Jan 01 00:00 contact.txt
-rwxr-xr-x 1 guest guest 0 Jan 01 00:00 pgp-signing-policy`
  }
  if (args === "-la") {
    // ls -la
    return `-rw-r--r--  1 guest guest  0 Jan 01 00:00 .acknowledgements.txt
-rw-r--r--  1 guest guest  0 Jan 01 00:00 .responsible-disclosure.txt
-rw-r--r--  1 guest guest  0 Jan 01 00:00 contact.txt
-rwxr-xr-x  1 guest guest  0 Jan 01 00:00 pgp-signing-policy
`
  }

  // ls
  return `contact.txt
pgp-signing-policy`
}
