import { Album } from './Album';

export class User {
	private album: Album[];

	constructor(private id: number, private username: string, private firstName: string, private isPro: boolean) {
		this.album = [];
	}

	addAlbum(album: Album) {
		this.album.push(album);
	}

  removeAlbum(album: Album) : Album | undefined {
    // buscar
    const index = this.album.findIndex(a => a.id === album.id)
    let deltedAlbum
    if (index !== -1) {
      deltedAlbum = this.album[index]
      this.album.splice(index, 1)
    }
    return deltedAlbum
  }
}