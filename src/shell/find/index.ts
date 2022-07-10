export default function find(args: string): Promise<ShellPromise> | string {
  if (args === 'bunny') {
    return new Promise((resolve, reject) => {
      fetch('https://source.unsplash.com/random?bunny')
        .then((res) => {
          resolve({
            type: 'image',
            data: res.url,
          })
        })
        .catch((e) => {
          reject(new Error(e))
        })
    })
  } else {
    return 'What do you want to find? Bunny would be nice.'
  }
}
