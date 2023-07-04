import axios from "axios";
import { getSpotifyAccessToken } from './spotify_auth'

//configure spotify API
const spotifyAuthAPI = axios.create({
  baseURL: "https://api.spotify.com"
})

//curl --request GET \
// --url 'https://api.spotify.com/v1/search?q=genre%3Dmetal&type=album&market=PT&limit=50' \
// --header 'Authorization: Bearer 1POdFZRZbvb...qqillRxMr2z'

//search for metal albuns
export const getMetalAlbuns = async function(max_results: number){
  
  //get access token
  const access_token = await getSpotifyAccessToken();
  try{

      const albumSearchResponse = await spotifyAuthAPI.get(
        '/v1/search',
        {
          params:{
            q: 'genre=metal',
            type: 'album',
            market: 'BR',
            limit: '50'
          },
          headers:{
            Authorization: `Bearer ${access_token}`
          }
        }
      )
      return albumSearchResponse;
  }catch(error){
    console.log(error);
  }

  // const response = await spotifyAuthAPI('/search')
}