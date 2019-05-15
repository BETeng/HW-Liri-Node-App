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
  console.log(process.argv);
 
  spotify
    .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
    .then(function(data) {
      console.log(data); 
    })
    .catch(function(err) {
      console.error('Error occurred: ' + err); 
    });







//     ---- OMDB AXIOS CALL
//   axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
//   function(response) {
//     console.log("The movie's rating is: " + response.data.imdbRating);
//   }
// );