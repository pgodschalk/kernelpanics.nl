import curl from "../curl"

export default function screen() {
  return curl("https://kernelpanics.nl")
}
