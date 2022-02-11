// const cars: string[] = ['Ford', 'Audi']
// // либо
// const cars2: Array<string> = ['Ford', 'Audi']

const promise = new Promise<string>(resolve => {
  setTimeout(() => {
    resolve('Promise resolved')
  }, 1000)
})

promise.then(data => {
  console.log(data.toLowerCase().trim())  
})