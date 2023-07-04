import axios from 'axios'
import qs from 'qs'

//Spotify Client configuration

require('dotenv').config()
const client_id = process.env.SPOTIFY_API_ID; // Your client id
const client_secret = process.env.SPOTIFY_CLIENT_SECRET; // Your secret
const auth_body = `grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`;

// spotify authentication
const spotifyAuthAPI = axios.create({
  baseURL: "https://accounts.spotify.com/",
  headers: { 
    'Content-Type': 'application/x-www-form-urlencoded' 
  }
})

//function to get the access token
export const getSpotifyAccessToken = async function(){
  try{
    const response = await spotifyAuthAPI.post('/api/token', auth_body);
    return response.data.access_token;
  } catch(error){
    console.log(error);
    console.log(client_id);
  }
}