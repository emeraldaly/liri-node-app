module.exports = function () {
//access twitter api keys
  var twitterKey = require("./keys.js");
  var twitter = require('twitter');

//function myTwitter(){
 

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
      console.log("This tweet brought to you by:", tweet.user.screen_name);
      //console.log(tweet.user.name);
      console.log("on:", tweet.user.created_at);
      console.log("Tweet: ", tweet.text);
    });
  }
});
}
