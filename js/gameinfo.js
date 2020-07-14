var unirest = require("unirest");

var req = unirest("GET", "https://rawg-video-games-database.p.rapidapi.com/games/%7Bgame_pk%7D");

req.headers({
	"x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
	"x-rapidapi-key": "709faf3108msh328e6b95087ea5dp159540jsn0373ddda4eaa",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});
