// Void

// Tipo explicito
function showInfo(user:any) : any {
  console.log('User info', user.id, user.username, user.firstName)
}

showInfo({id: 1, username: 'sqsqqsd', firstName: 'Jimmy'})

// Tipo inferido
function showFormattedInfo(user:any) {
  console.log('User info', `
  ${user.id}, ${user.username}, ${user.firstName}
  `)
}

showFormattedInfo({id: 1, username: 'sqsqqsd', firstName: 'Jimmy'})

// tipo void, como tipo de dato envariable
let unusable : void
unusable = null
unusable = undefined

// Tipo Never
function handleError(code:number, message: string): never {
  // Process your code here
  // Generate message
  throw new Error(`${message}. Code: ${code}`);
}

try {

  handleError(404, 'Not found')
} catch (e) {

}

function sumNumbers(limit:number) : never {
  let sum = 0
  // ciclo infinito
  while(true) {
    sum++;
  }
}

sumNumbers(10)

