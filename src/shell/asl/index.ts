export default function asl() {
  const male =
    '<span class="sr-only">Male</span><span aria-hidden="true">M</span>'
  const female =
    '<span class="sr-only">Female</span><span aria-hidden="true">F</span>'
  const separator =
    '<span class="sr-only"> </span><span aria-hidden="true">/</span>'
  const galadriel =
    '<span class="sr-only">Seven thousand eight hundred and thirty one</span><span aria-hidden="true">7,831</span>'

  const arr = [
    `2${separator}AMD64${separator}Server Rack`,
    `328${separator}${male}${separator}Transylvania`,
    `6${separator}${male}${separator}Battle School`,
    `48${separator}${male}${separator}The White House`,
    `7${separator}${female}${separator}Rapture`,
    `Exactly your age${separator}A gender you're attracted to${separator}Far far away.`,
    `${galadriel}${separator}${female}${separator}Lothlórien`,
    `42${separator}${male}${separator}FBI Field Office`,
  ]
  return arr[Math.floor(Math.random() * arr.length)]
}
