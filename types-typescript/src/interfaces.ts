// funciton para mostrar una fotografa
export {}

enum PictureOrientation {
  Landscape,
  Portrait,
  Square,
  Panorame,
}

interface IPicture {
  title: string;
  date: string,
  orientation: PictureOrientation
}

function showPricture(pricture: IPicture) : void {
  console.log(`[title ${pricture.title},
    date ${pricture.date},
    orientation ${pricture.orientation},
  ]`)
}

let myPic = {
  title: 'Test title',
  date: '2021-04-18',
  orientation: PictureOrientation.Portrait,
}

showPricture(myPic)
showPricture({
  title: 'Test title 2',
  date: '2021-04-20',
  orientation: PictureOrientation.Landscape,
  // extra: 'test' // Error
})

///

interface IPictureConfig {
  title?: string
  date?: string
  orientation?: PhotoOrientation
}

function generateConfig(config:IPictureConfig) {
  const pic = {
    title: 'default',
    date: '2021-04'
  }
  if (config.title) {
    pic.title = config.title 
  }
  if (config.date) {
    pic.date = config.date 
  }
  return pic
}

let picture =  generateConfig({ title: 'Travel pic' })
console.log('picture', picture)

// interface: usiuario

interface User {
  readonly id: number
  username: string
  isPro: boolean
}

let user : User
user = {id: 10, username: 'jimmy', isPro: true}
user.username = 'munoz'
user.id = 20
console.log('user', user)