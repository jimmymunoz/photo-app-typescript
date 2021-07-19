import {PhotoOrientation} from './PhotoOrientation'
import {Item} from './Item'

export class Picture extends Item {
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
