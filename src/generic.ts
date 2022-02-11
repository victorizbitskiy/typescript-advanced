// const cars: string[] = ['Ford', 'Audi']
// // либо
// const cars2: Array<string> = ['Ford', 'Audi']

// const promise = new Promise<string>(resolve => {
//   setTimeout(() => {
//     resolve('Promise resolved')
//   }, 1000)
// })

// promise.then(data => {
//   console.log(data.toLowerCase().trim())  
// })

function mergeObjects<T, R>(a: T, b: R) {
  return Object.assign({}, a, b)
}

const merged = mergeObjects({ name: 'Victor' }, { age: 30 })
const merged2 = mergeObjects({ model: 'Niva' }, { year: 2020 })

console.log(merged)
