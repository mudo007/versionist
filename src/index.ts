import { getMetalAlbuns } from './lib/spotify_api'

getMetalAlbuns(1).then(result => console.log(result));