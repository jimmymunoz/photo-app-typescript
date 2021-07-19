export {}
// // 10, '10'
// let idUser:  number | string;
// idUser = 10
// idUser = '10'

// // Buscar username dad con ID
// function getUsernameById(id: number | string) {
//   // logica de negocio, find user
//   return 'sqsqsqs'
// }

// getUsernameById(10)
// getUsernameById('20')


// Alias de Tipos: TS

export {}
// 10, '10'
type IdUser = number | string
type Username = string

let idUser: IdUser;
idUser = 10
idUser = '10'

// Buscar username dad con ID
function getUsernameById(id: IdUser): Username {
  // logica de negocio, find user
  return 'sqsqsqs'
}

getUsernameById(10)
getUsernameById('20')

// Tipos literales
// 100x100, 500x500, 1000x1000
type SquareSize = '100x100' | '500x500' | '1000x1000'
// let smallPicture: SquareSize = '200x200' // error
let smallPicture: SquareSize = '500x500' 
