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

// ====

class Collection<T extends number | string | boolean> {
  constructor(private _items: T[] = []) { }

  add(item: T) {
    this._items.push(item)
  }

  remove(item: T) {
    this._items = this._items.filter(i => i !== item)
  }

  get items(): T[] {
    return this._items
  }
}

const strings = new Collection<string>(['I', 'Am', 'Strings'])
strings.add('!')
strings.remove('Am')
console.log(strings.items)

const numbers = new Collection<number>([1, 2, 3])
numbers.add(2)
numbers.remove(2)
console.log(numbers.items)

// Объекты в эту коллекцию не сохранить, 
// т.к. если передать в remove объект, то это будет новый объект, а не ссылка на существующий в коллекции

// const objects = new Collection<object>({ a: 1 }, { b: 2 })
// objects.remove({a: 1})
// console.log(objects.items)