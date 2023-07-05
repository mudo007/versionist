import { getMetalAlbums } from './lib/spotify_api'
import { exportAlbumMapToCSV } from './lib/csv_utils'

// getMetalAlrtists(1).then((result: any) => result.items.forEach((element: any) => 
//   console.log(element.artist)))
getMetalAlbums().then((result: Map<string, string>) => {
  exportAlbumMapToCSV(result,'albums.csv')
  console.log(result.size)
})
