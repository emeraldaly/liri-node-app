//read file
//module.exports = function() {
var fs = require('fs');

fs.readFile('random.txt', "utf8", function (err, data) {
   if (err) {
       return console.error(err);
   }
   console.log("The Backstreet Boys want you to " + data.toString());

});
