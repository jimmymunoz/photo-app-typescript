export {}

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorame,
}

class Picture {
  // Propiedades
  private _id: number
  private _title: string
  private _orientation: PhotoOrientation

  public constructor(id: number, title: string, orientation: PhotoOrientation) {
    this._id = id
    this._title = title
    this._orientation = orientation
  }

  get id() {
    return this._id
  }

  set id(id: number) {
    this._id = id
  }

  set title(title: string) {
    this._title = title
  }

  get title() {
    return this._title
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

class Album  {
  private _id: number
  public _title: string
  public _pictures: Picture[] = []

  public constructor(id: number, title: string) {
    this._id = id
    this._title = title
  }

  public addPicture(picture: Picture) {
    this._pictures.push(picture)
  }

  get id() {
    return this._id
  }
  set id(id: number) {
    this._id = id
  }

  
  set title(title: string) {
    this._title = title
  }

  get title() {
    return this._title
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
picture.id = 100 // private, set id(100)
picture.title = 'Another title'// public

album.title = 'Personal activities'// public

console.log('album', album)



