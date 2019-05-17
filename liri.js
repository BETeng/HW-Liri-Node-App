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







//     ---- OMDB AXIOS CALL
//   axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
//   function(response) {
//     console.log("The movie's rating is: " + response.data.imdbRating);
//   }
// );