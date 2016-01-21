//variables
//var fs = require('fs');
//var twitterKey = require("./keys.js");
var params = process.argv.slice(2);
//var twitter = require('twitter');
//var spotify = require('spotify');
var request = require('request');
//var parsedBody;

//choose program
function chooseProgram(params){
  switch(params[0]){
    case "my-tweets":
      result = myTwitter();
      break;
    case "spotify-this-song":
      result = runSpotify();
      break;
    case "movie-this":
      result = movieThis();
      break; 
    case "do-what-it-says":
      result = doWhatItSays(); 
      break;
    default: 
      console.log("Try again. Invalid command.");
      break;    
  }
}





