function drawMoreInfoPage(gameInfo) {
  var allStores = [];
  var stores = gameInfo['stores'];
  stores.forEach(function(item) {
    allStores.push(item["store"]["name"]);
  })
  var storesString = allStores.join(", ");

  var allPlatforms = [];
  var platforms = gameInfo['parent_platforms'];
  platforms.forEach(function(item) {
    allPlatforms.push(item["platform"]["name"]);
  })
  var platFormString = allPlatforms.join(", ");

  var allGenres = [];
  var genres = gameInfo['genres'];
  genres.forEach(function(item) {
    allGenres.push(item["name"]);
  })
  var genresString = allGenres.join(", ");

  var allDevelopers = [];
  var developers = gameInfo['developers'];
  developers.forEach(function(item) {
    allDevelopers.push(item["name"]);
  })
  var developersString = allDevelopers.join(", ");

  let output = `
      <div class="col-md-8">
          <h2>${gameInfo.name}</h2>
          <img src="${gameInfo.background_image}" class="img-responsive">
          <ul class="list-group">
              <li class="list-group-item" id="rating"><strong>Metacritic Rating: </strong>${gameInfo.metacritic}</li>
              <li class="list-group-item" id="releaseDate"><strong>Released: </strong>${gameInfo.released}</li>
              <li class="list-group-item" id="stores"><strong>Store(s): </strong>${storesString}</li>
              <li class="list-group-item" id="platforms"><strong>Platform(s): </strong>${platFormString}</li>
              <li class="list-group-item" id="genres"><strong>Genre(s): </strong>${genresString}</li>
              <li class="list-group-item" id="developers"><strong>Developer(s): </strong>${developersString}</li>
            </ul>
      </div>

      <div class="row">
        <h3>Description</h3>
        ${gameInfo.description}
        <a href="index.html" class="btn btn-default">Go Back to Search</a>
      </div>
  `;
  $('#game').html(output);
}

function init() {
  var gameInfo = JSON.parse(sessionStorage.getItem('gameInfo'));
  drawMoreInfoPage(gameInfo);

}

init();
