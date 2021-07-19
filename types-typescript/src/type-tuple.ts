export {}
// [1, 'user']
let user: [number, string]
user = [1, 'Jimmy']

console.log('user', user)
console.log('user', user[1])
console.log('user', user[1].length)
console.log('id', user[0])

// Tupas convarios valores
// id, usernalen isPro
let userInfo: [number, string, boolean]
userInfo = [2, 'jimmmy', true]
console.log('userInfo', userInfo)

// Arreglo de tuplas
let array : [number, string][] = []
array.push([1, 'jimmym'])
array.push([2, 'jisss'])
array.push([3, 'lensQueen'])


// Uso de funciones de array
// lensQueen -> lensQueen0001

array[2][1] = array[2][1].concat('001')

console.log('array', array)

