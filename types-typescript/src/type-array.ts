// Corchetes []

// Tipo explicito
let users: string[]
users = ['jimmy', 'xxxx']
// users = [1, 'xxxx'] // Error
// users = ['sdqsdsq', true] // Error

// Tipo inferido
let otherUsers = ['qsdsqsd', 'ereerer', 'sdsdsd']
// otherUsers = ['sdqsdsq', true] // Error


// Array<Tipo>
let picturesTitles :Array<string>
picturesTitles = ['Favorite susnset', 'Vacation time']

// Acediento a los valores en Array
console.log('First user', users[0])
console.log('First Title', picturesTitles[0])

// Propiedades en array

console.log('users.length', users.length)

// uso de funcitones en arreglos
users.push('new Users')
users.sort()
console.log('users',users)

