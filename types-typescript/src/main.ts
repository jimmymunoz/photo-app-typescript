console.log('Hola Platzi world')

// Number
// Expiclito
let phone: number
phone = 1
phone = 5465464
// phone = 'qsqs' // Error

// Inferido
let phoneNumber = 454564654
phoneNumber = 12312
// phoneNumber = true // Error

let hex: number = 0xf00d
let binary: number = 0b10
let octal: number = 0o744

// Tipo: Boolean

let isPro: boolean
isPro = true
// isPro = 1 // Error

// Inferido
let isUserPro = false
isUserPro = true
// isUserPro = 1 // error

//String
let username: String = 'teststs'
username = 'Luis'
// username = true // error

// Template String
// Uso back-tick
let userInfo: string
userInfo = `
  User name ${username}
  First name ${username + ' Alves'}
`

console.log('userInfo', userInfo)