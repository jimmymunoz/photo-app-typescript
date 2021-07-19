// Crear una fotografia

// JS
// function createPicture(title, date, size) {
//   // title
// }

type SquareSize = '100x100' | '500x500' | '1000x1000'

function createPicture(title: string, date: string, size: SquareSize) {
  // title
  console.log('Create pictire using', title, date, size)
}

createPicture('My birthdate', '2020-30-01', '100x100')

// Parametros opcionales
function createPictureOpt(title?: string, date?: string, size?: SquareSize) {
  // title
  console.log('Create pictire using', title, date, size)
}

createPictureOpt('Colombia Trip', '2020-30-01')

// Flat array fucntion
let createPic = (title: string, date: string, size: SquareSize): object => {
  return {
    title,
    date,
    size,
  }
}

const picture = createPic('Platzi session', '2020-03-10', '500x500')
console.log('picture', picture)


// Tipo de retorno con TypeScript
function handleError(code:number, message: string) : never | string {
  // Processamin codigo - mensaje
  if (message === 'error') {
    throw new Error(`${message}. Code error: ${code}`);
  }
  return 'An error has occurred'
}

try {
  let result = handleError(200, 'ok')
  console.log('result', result)
  result = handleError(400, 'error')
  console.log('result', result)
} catch (e) {

}