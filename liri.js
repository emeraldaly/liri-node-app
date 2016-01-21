//variables
//var fs = require('fs');
//var twitterKey = require("./keys.js");
var program = process.argv.slice[2];
var myTwitter = require('./my-tweets.js');
var movieThis = require('./movieThis');
var doWhatItSays = require('./doWhatItSays.js');
var runSpotify = require('./runSpotify.js');
//var twitter = require('twitter');
//var spotify = require('spotify');
//var request = require('request');
//var parsedBody;

//choose program
function chooseProgram(){
  switch(program){
    case "my-tweets":
      result = myTwitter();
      break;

    case "runSpotify":
      result = runSpotify();
      break;

    case "movieThis":
      result = movieThis();
      break; 

    case "doWhatItSays":
      result = doWhatItSays(); 
      break;

    default: 
      console.log("Try again. Invalid command.");
      break;    
  }
}





