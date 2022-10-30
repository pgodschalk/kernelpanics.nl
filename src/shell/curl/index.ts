export default function curl(args: string) {
  if (!args) return "Please specify a URL."
  return `<iframe class="w-full h-64" src="${args}" referrerpolicy="no-referrer">`
}
