// Type: object
let user: object
user = {} //Object

user = {
  id: 1,
  username: "jmunoz",
  firstName: 'jimmy',
  isPro: true
}

console.log('user', user)
// Object vs object(Class HJs vs Typo TS)

const myObj = {
  id: 1,
  username: "jmunoz",
  firstName: 'jimmy',
  isPro: true
}

const isIstance  =  myObj instanceof Object
console.log('isIstance', isIstance)

// console.log('user.username', user.username)
console.log('user.username', myObj.username)