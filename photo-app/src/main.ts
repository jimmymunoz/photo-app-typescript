import {User} from  './User'
import {Album} from  './Album'
import {Picture} from  './Picture'
import {PhotoOrientation} from  './PhotoOrientation'

const user = new User(1, 'jimmy', 'munoz', true)
const album = new Album(10, 'Platzi pictures')
const picture = new Picture(1, 'TypeScript course', PhotoOrientation.Panorame)
// creamos relaciones
user.addAlbum(album)
album.addPicture(picture)
console.log('user', user)

user.removeAlbum(album)

console.log('user', user)