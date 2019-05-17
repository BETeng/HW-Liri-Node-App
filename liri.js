// CODE FOR LIRI



// set up process.argv[2] to recognize 
// concert-this
// spotify-this-song
// movie-this
// do-what-it-says

//API key and set up for bootcamp
//"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
//get name/ of band, venue location, and date 
//use moment to format date ouptut from API
require("dotenv").config();
var keys = require("./keys.js");
const Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
const axios = require("axios")
// const db = require('db')

// if (process.argv[2] == 'spotify-this-song'){
//   const trackInput = process.argv[3] 
//   spotify
//   .search({
//     type: 'track',
//     query: trackInput,
//     limit: 1
//   })
//   .then(function (response) {
//     let artistName = response.tracks.items[0].album.artists[0].name
//     console.log('artist(s):',artistName);
//     let album = response.tracks.items[0].album.name
//     console.log('album:',album)
//     let songName = response.tracks.items[0].name
//     console.log('song:',songName)
//   })
//   .catch(function (err) {
//     console.error('Error occurred: ' + err);
//   });
// }








// ---- OMDB AXIOS CALL    ***NEED TO SET UP ERROR HANDLING FOR UNRECOGNIZED TITLES

if (process.argv[2] == 'movie-this' && process.argv[3] != undefined) {
  let title = process.argv[3]
  axios.get("http://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=trilogy").then(
    function (response) {
      let Title = response.data.Title
      console.log(Title)
      let year = response.data.Year
      console.log(year)
      let rottenTomatoes = response.data.Ratings[1].Value
      console.log(rottenTomatoes)
      let countryProduced = response.data.Country
      console.log(countryProduced)
      let language = response.data.Language
      console.log(language)
      let plot = response.data.Plot
      console.log(plot)
      let actors = response.data.Actors
      console.log(actors)
      let imdbRating = response.data.imdbRating
      console.log(imdbRating);
    }
  );
  
}
else {
  let title = 'Mr. Nobody'
  axios.get("http://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=trilogy").then(
    function (response) {
      let Title = response.data.Title
      console.log(Title)
      let year = response.data.Year
      console.log(year)
      let rottenTomatoes = response.data.Ratings[1].Value
      console.log(rottenTomatoes)
      let countryProduced = response.data.Country
      console.log(countryProduced)
      let language = response.data.Language
      console.log(language)
      let plot = response.data.Plot
      console.log(plot)
      let actors = response.data.Actors
      console.log(actors)
      let imdbRating = response.data.imdbRating
      console.log(imdbRating);
    }
  );
}


