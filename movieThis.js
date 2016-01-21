module.exports = function(){
// request code


if(movie === undefined) {
  movie = "mr. nobody";
}
var request = require('request');
var movie = process.argv.slice[3];

request('http://www.omdbapi.com/?t=' + movie + '&y=&plot=short&r=json&tomatoes=true', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var movieBack = JSON.parse(response.body);
    console.log("The title is", body.Title);
    console.log("The year it released is", body.Year);
    console.log("The OMDB rating is", body.imdbRating);
    console.log("The country of origin is:", body.Country);
    console.log("The movie is in this language:", body.Language);
    console.log("The plot is", body.Plot);
    console.log("These are some of the actors in the movie:", body.Actors);
    console.log("The Rotten Tomatoes Rating is", body.tomatoRating);
    console.log("See more Rotten Tomato info at this link", body.tomatoURL);
  }
});
}

//movie
 /* request("http://www.omdbapi.com/?t=frozen&y=&plot=short&r=json", function(error, response, body) {
  var movieObject = JSON.parse(body);
  console.log("The title is", body.Title);
  console.log("The year it released is", body.);
  console.log("The OMDB rating is", body.);
  console.log("The country of origin is:", body.);
  console.log("The movie is in this language:", body.);
  console.log("The plot is", body.plot.short);
  console.log("These are some of the actors in the movie:", body.);
  console.log("The Rotten Tomatoes Rating is", body.);
  console.log("See more Rotten Tomato info at this link", body.);
});
*/