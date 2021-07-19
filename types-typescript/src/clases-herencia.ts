export {}

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorame,
}

// Superclasse

abstract class Item {
  protected readonly _id: number
  protected _title: string

  constructor(id: number, title: string) {
    this._id = id
    this._title = title
  }

  get id() {
    return this._id
  }

  set title(title: string) {
    this._title = title
  }

  get title() {
    return this._title
  }
}

class Picture extends Item {
  public static photoOrientation = PhotoOrientation

  // Propiedades
  private _orientation: PhotoOrientation

  public constructor(id: number, title: string, orientation: PhotoOrientation) {
    super(id, title)
    this._orientation = orientation
  }

  get orientation() {
    return this._orientation
  }

  set orientation(orientation: PhotoOrientation) {
    this._orientation = orientation
  }

  // Comportamiento
  public toString() {
    return `[
      id: ${this._id}
      title: ${this._title},
      orientation: ${this._orientation},
    ]`
  }
}

class Album extends Item  {
  public _pictures: Picture[] = []

  public constructor(id: number, title: string) {
    super(id, title)
  }

  public addPicture(picture: Picture) {
    this._pictures.push(picture)
  }

  get pictures() {
    return this._pictures
  }

  set pictures(pictures: Picture[]) {
    this._pictures = pictures
  }

}

const album: Album = new Album(1, 'Personal pictures')

const picture: Picture = new Picture(1, 'new pcicture', PhotoOrientation.Panorame)
album.addPicture(picture)

console.log('album', album)

console.log('picture.id', picture.id)

// Accediendo a los miembros publicos
picture.title = 'Another title'// public

album.title = 'Personal activities'// public

console.log('album', album)

// const item = new Item(1, 'Test title')
// console.log('item', item)

// Probar el mimbro estatico de picture
console.log('photoOrientation', Picture.photoOrientation.Panorame)