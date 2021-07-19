// tipo explicito
let idUser : any
idUser  = 1 // Number
idUser  = '1' // String
console.log('idUser', idUser)


// tipo inferido
let otherid
otherid = 1
otherid = '1'
console.log('otherid', otherid)

let surprise: any = 'Hello typescript'
// surprise.sayHello() // Error
let res = surprise.substring(6) // Error
console.log('res', res)