import { Item } from "./Item";
import { Picture } from "./Picture";

export class Album extends Item  {
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