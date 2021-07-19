export {}
// <> // Angle Brancke syntax
let username: any
username = 'jim'

// tenemlos una cadena, TS confia en mi
let message: string = (<string>username).length > 5 ? `Welcome ${username}`: 'Its too short'

console.log('message', message)

let userNameWithId: any = 'Jimmy 1'
//Obtener el username ?
username = (<string>userNameWithId).substr(-1)
console.log('username', username)

// Syntaxis as
message = (username as string).length > 5 ? `Welcome ${username}`: 'Its too short'
console.log('message', message)

let helloUser: any
helloUser = 'hello paparazzi'
username = (helloUser as string).substring(6)

console.log('username', username)



