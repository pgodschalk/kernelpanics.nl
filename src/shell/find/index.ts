export default function find(args: string): Promise<ShellPromise> | string {
  if (args === "bunny") {
    // find bunny
    return new Promise((resolve, reject) => {
      fetch("https://source.unsplash.com/random?bunny")
        .then((res) => {
          resolve({
            type: "image",
            data: {
              src: res.url,
              alt: "Random picture of a bunny",
            },
          })
        })
        .catch((e) => {
          reject(new Error(e))
        })
    })
  } else {
    // find
    return "What do you want to find? Bunny would be nice."
  }
}
