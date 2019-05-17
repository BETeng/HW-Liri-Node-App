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
var moment = require('moment');
var keys = require("./keys.js");
const Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
const axios = require("axios")
// const db = require('db')

if (process.argv[2] == 'spotify-this-song') {
  const trackInput = process.argv[3]
  spotify
    .search({
      type: 'track',
      query: trackInput,
      limit: 1
    })
    .then(function (response) {
      let artistName = response.tracks.items[0].album.artists[0].name
      console.log('artist(s):', artistName);
      let album = response.tracks.items[0].album.name
      console.log('album:', album)
      let songName = response.tracks.items[0].name
      console.log('song:', songName)
    })
    .catch(function (err) {
      console.error('Error occurred: ' + err);
    });
}








// ---- OMDB AXIOS CALL    ***NEED TO SET UP ERROR HANDLING FOR UNRECOGNIZED TITLES

if (process.argv[2] == 'movie-this' && process.argv[3] != undefined) {
  let title = process.argv[3]
  axios.get("http://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=trilogy").then(
    function (response) {
      let Title = response.data.Title
      console.log('Title:',Title)
      let year = response.data.Year
      console.log('Year:',year)
      let rottenTomatoes = response.data.Ratings[1].Value
      console.log('RottenTomatoes:',rottenTomatoes)
      let countryProduced = response.data.Country
      console.log('Country:',countryProduced)
      let language = response.data.Language
      console.log('Language',language)
      let plot = response.data.Plot
      console.log('Plot:',plot)
      let actors = response.data.Actors
      console.log('Actors:',actors)
      let imdbRating = response.data.imdbRating
      console.log("IMDB:",imdbRating);
    }
  );

}
else if (process.argv[2] == 'movie-this') {
  let title = 'Mr. Nobody'
  axios.get("http://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=trilogy").then(
    function (response) {
      let Title = response.data.Title
      console.log('Title:',Title)
      let year = response.data.Year
      console.log('Year:',year)
      let rottenTomatoes = response.data.Ratings[1].Value
      console.log('RottenTomatoes:',rottenTomatoes)
      let countryProduced = response.data.Country
      console.log('Country:',countryProduced)
      let language = response.data.Language
      console.log('Language',language)
      let plot = response.data.Plot
      console.log('Plot:',plot)
      let actors = response.data.Actors
      console.log('Actors:',actors)
      let imdbRating = response.data.imdbRating
      console.log("IMDB:",imdbRating);
    }
  )
    .catch(function (err) {
      console.error('Error occurred: ' + err);
    });
}

if (process.argv[2] == 'concert-this') {
  let artist = process.argv[3]
  axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
    .then(
      function (response) {
        const venueName = response.data[0].venue.name
        console.log('Venue:',venueName)
        const venueLocation = response.data[0].venue.city +", "+response.data[0].venue.region
        console.log('Location:',venueLocation)
        const eventDate = response.data[0].datetime
        const finalDate = moment(eventDate).format('l')
        console.log('Date:',finalDate)
      }
    )
    .catch(function (err) {
      console.error('Error occurred: ' + err);
    });
}

if(process.argv[2] == 'do-what-it-says'){}