//variables
var fs = require('fs');
var twitterKey = require("./keys.js");
var params = process.argv.slice(2);
var twitter = require('twitter');
var spotify = require('spotify');
var request = require('request');

//choose program
function chooseProgram(params){
  switch(params[0]){
    case "my-tweets":
      myTwitter();
      break;
    case "spotify-this-song":
      runSpotify();
      break;
    case "movie-this":
      movieThis();
      break; 
    case "do-what-it-says":
      doWhatItSays(); 
      break;
    default: 
      console.log("Try again. Invalid command.");
      break;    
  }
}

//run program
// runProgram(params);

// request code
var request = require('request');
request('http://www.omdbapi.com/?t=' + '&type=movie&tomatoes=true', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage. 
  }
})



//spotify 
spotify.search({ type: 'track', query: "What's my Age Again?"}, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }else {
      spotifyInfo = "Artist: " + data.tracks.items[0].artists[0].name + "\n" + "Song Name: "
+data.tracks.items[0].name + "\n" + "Listen on Spotify: " + data.tracks.items[0].artists[0].external_urls.spotify + "\n" + "Album: " + data.tracks.items[0].album.name;
console.log(spotifyInfo)}
 
    // Do something with 'data' 
});

//access twitter api keys
function myTwitter(){

}
var client = new twitter({
  consumer_key: twitterKey.twitterKeys.consumer_key,
  consumer_secret: twitterKey.twitterKeys.consumer_secret,
  access_token_key: twitterKey.twitterKeys.access_token_key,
  access_token_secret:  twitterKey.twitterKeys.access_token_secret
});

//twitter
var params = {screen_name: 'EmeraldAly'};
client.get('statuses/user_timeline', params, function(error, tweets, response){
  if (!error) {
    // console.log(tweets[0].user.screen_name);
    tweets.forEach(function(tweet) {
      console.log(tweet.user.screen_name);
      console.log(tweet.user.name);
      console.log(tweet.text);
    });
  }
});

//movie
