import axios, { AxiosResponse } from "axios";
import { getSpotifyAccessToken } from './spotify_auth'

require('dotenv').config()
//configure spotify API
const spotifyAuthAPI = axios.create({
  baseURL: "https://api.spotify.com"
})

//search for metal albuns
export const getMetalAlbums = async function() {
  // declare the bands you like on .env file
  const bands: string[] = (process.env.BAND_ARRAY ?? '').split(',')
  const access_token = await getSpotifyAccessToken();

  //we'll save the results to a map
  const albumsLinks = new Map();

  for (const band of bands) {
    try {
      const searchResponse: AxiosResponse<any> = await spotifyAuthAPI.get('/v1/search', {
        params: {
          // When the band name has empty spaces, it is required to replace it with a +
          q: `artist=${band.replace(' ','+')}`,
          type: 'album',
          market: 'BR',
          limit: '50'
        },
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      });
      //We are interested only on the album name and spotify open link to it
      searchResponse.data.albums.items.map((item: any) => 
        //exclude compilations, Deluxe editions and remasters
        item.album_type == 'album' && 
        !item.name.toLowerCase().includes('deluxe') &&
        !item.name.toLowerCase().includes('expanded') &&
        !item.name.toLowerCase().includes('remaster') &&
        albumsLinks.set(item.name, item.external_urls.spotify));
    } catch (error) {
      console.log(error);
    }
  }
  // Wait for all promises to resolve
  await Promise.all(albumsLinks); 
  return albumsLinks;
};
