// Orientation para Fotografias
// Old
// const landscape = 0
// const portrait = 1
// const square = 2
// const panorame = 3

enum PhotoOrientation {
  Landscape= 0,
  Portrait = 2,
  Square= 3,
  Panorame = 4,
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape
console.log('landscape', landscape)
console.log('landscape2', PhotoOrientation[0])
console.log('landscape3', PhotoOrientation[landscape])

// personaliscion indeces

enum PictureOrientation {
  Landscape= 10,
  Portrait,
  Square,
  Panorame,
}


console.log('portrait', PictureOrientation.Portrait)

enum Country {
  Bolivia = 'bol',
  Colombia = 'col',
  Mexico = 'mex'
}

console.log('Country', Country.Colombia)