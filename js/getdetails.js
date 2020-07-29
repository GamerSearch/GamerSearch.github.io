function gameSelected(id) {
    sessionStorage.setItem('gameId', id);
    window.location = 'more-info.html';
    return false;
}


function getGames(id) {
    let gameId = sessionStorage.getItem('gameId');

    axios.get("https://api.rawg.io/api/games/" + gameId + "?api_key=709faf3108msh328e6b95087ea5dp159540jsn0373ddda4eaa")
    .then (function (response) {
        let game = response.data;

        let output = `
            <div class="col-md-4>
                <img src="https://media.rawg.io/media/games/${game.background_image}" class=thumbail">
            </div>

            <div class="col-md-8">
                <h2>${game.title}</h2>
                <ul class="list-group">
                    <li class="list-group-item"><strong>Rating:</strong> ${game.metacritic}<li>
                    <li class="list-group-item"><strong>Released:</strong> ${game.released}</li>
                    <li class="list-group-item"><strong>Stores:</strong> ${game.stores}</li>
                    <li class="list-group-item"><strong>Platforms:</strong> ${game.platforms}</li>
                    <li class="list-group-item"><strong>Genre:</strong> ${game.genres}</li>
                </ul>
            </div>
        </div>

        <div class="row">
            <div class="well">
                <h3>Plot</h3>
                ${game.description}
                <hr>
                <a href="index.html" class="btn btn-default">Go Back to Search</a>
            </div>
        </div>
        `;
        $('#game').html(output);
    })
    .catch(function (error) {
        console.log(error);
    });
}
