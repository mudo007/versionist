"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const spotify_api_1 = require("./lib/spotify_api");
const csv_utils_1 = require("./lib/csv_utils");
// getMetalAlrtists(1).then((result: any) => result.items.forEach((element: any) => 
//   console.log(element.artist)))
(0, spotify_api_1.getMetalAlbums)().then((result) => {
    (0, csv_utils_1.exportAlbumMapToCSV)(result, 'albums.csv');
    console.log(result.size);
});
