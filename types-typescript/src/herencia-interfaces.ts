export {}

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorame,
}

interface Entity {
  id: number
  title: string
}

interface Album extends Entity {
  description: string
}

interface Picture extends Entity {
  
  orientation: PhotoOrientation
}

const album: Album = {
  id: 1,
  title: 'Meetups',
  description: 'Community events'
}

const picture: Picture = {
  id: 1,
  title: 'Family',
  orientation: PhotoOrientation.Landscape
}

let newPicture = { } as Picture
newPicture.id = 2
newPicture.title = 'Moon'

console.log("album", album)
console.log("picture", picture)
console.log("newPicture", newPicture)