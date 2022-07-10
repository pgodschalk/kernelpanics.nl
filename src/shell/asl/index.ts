export default function asl() {
  const male =
    '<span class="sr-only">Male</span><span aria-hidden="true">M</span>'
  const female =
    '<span class="sr-only">Female</span><span aria-hidden="true">F</span>'
  const sep = '<span class="sr-only"> </span><span aria-hidden="true">/</span>'
  const galadriel =
    '<span class="sr-only">Seven thousand eight hundred and thirty one</span><span aria-hidden="true">7,831</span>'

  const arr = [
    `2${sep}AMD64${sep}Server Rack`,
    `328${sep}${male}${sep}Transylvania`,
    `6${sep}${male}${sep}Battle School`,
    `48${sep}${male}${sep}The White House`,
    `7${sep}${female}${sep}Rapture`,
    `Exactly your age${sep}A gender you're attracted to${sep}Far far away.`,
    `${galadriel}${sep}${female}${sep}Lothlórien`,
    `42${sep}${male}${sep}FBI Field Office`,
  ]
  return arr[Math.floor(Math.random() * arr.length)]
}
