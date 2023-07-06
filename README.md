# Versionist app
This is a node.js project in which you declare an array of bands, and it will output a csv file with a shuffled list of 50 albums of each one and their related spotify links. It excludes any album that has "remix", "Remaster", "Deluxe", "Expanded".

## This sounds useless. Why are you doing this?
I am working for a client in which it is required to name release versions as heavy metal album names. So this project helped me automate the versioning process by pre-generating 500+ future version names

# Instructions
1. Create a spotify developer account, and generate clientID and client secret
2. Create a .env file at the project root with the contents:
    ```
    SPOTIFY_API_ID=<your client IDt>
    SPOTIFY_CLIENT_SECRET=<your secret>
    BAND_ARRAY=Band 1,Band 2,...,Band X
    ```
    The band names are pretty Straightforward, for example: 
    ```
    BAND_ARRAY=Metallica,Iron Maiden,Black Pink,É o Tchan
    ```
    works fine, and the app properly handles the whitepaces. 
    If you want to check for valid band names, go to https://developer.spotify.com/documentation/web-api/reference/search, and on the ENDPOINT boxes, set "q" to "artist=Band Name", without qoutes, and "type" to "album". Click on "try it", and see if the response contains an array of albums
3. If you want to use a container, the dockerfile and compose are already configured to mount the root dir inside the container
```
docker compose up
```
4. Install dependencies
```
npm install
```
5. Run the app
```
npm run start:dev
```

The "albums.csv" file should appear on the project root