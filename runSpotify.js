//spotify 
spotify.search({ type: 'track', query: "What's my Age Again?"}, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }else {
      spotifyInfo = "Artist: " + data.tracks.items[0].artists[0].name + "\n" + "Song Name: "
+data.tracks.items[0].name + "\n" + "Album: " + data.tracks.items[0].album.name + "\n" + "Listen on Spotify: " + data.tracks.items[0].artists[0].external_urls.spotify;
console.log(spotifyInfo)}
 
});