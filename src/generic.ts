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


// функция работает 
function mergeObjects<T extends object, R extends object>(a: T, b: R) {
  return Object.assign({}, a, b)
}

const merged = mergeObjects({ name: 'Victor' }, { age: 30 })
const merged2 = mergeObjects({ model: 'Niva' }, { year: 2020 })

// const merged3 = mergeObjects('Niva', 2020 ) // не корректно, т.к. функция работает только с объектами

// console.log(merged)

// ====
interface Ilength {
  length: number
}

function withCount<T extends Ilength>(value: T): { value: T, count: string } {
  return {
    value,
    count: `В этом объекте ${value.length} символов`
  }
}

console.log(withCount('Hello Typescript'))
console.log(withCount([1, 2, 3, 4, 7]))
// console.log(withCount(1)) // ошибка
console.log(withCount({ length: 4 })) // ошибка

// ====
function getObjectValue<T extends Object, R extends keyof T>(obj: T, key: R) {
  return obj[key]
}

const person = {
  name: 'Victor',
  age: 30,
  job: 'Fullstack'
}

console.log(getObjectValue(person, 'name'))
console.log(getObjectValue(person, 'age'))
console.log(getObjectValue(person, 'job'))

