import axios from "axios";
import { getSpotifyAccessToken } from './spotify_auth'

//configure spotify API
const spotifyAuthAPI = axios.create({
  baseURL: "https://api.spotify.com/v1"
})

//curl --request GET \
// --url 'https://api.spotify.com/v1/search?q=genre%3Dmetal&type=album&market=PT&limit=50' \
// --header 'Authorization: Bearer 1POdFZRZbvb...qqillRxMr2z'

//search for metal albuns
export const getMetalAlbuns = async function(max_results: number){
  
  //get access token
  const access_token = await getSpotifyAccessToken();
  return access_token;

  // const response = await spotifyAuthAPI('/search')
}