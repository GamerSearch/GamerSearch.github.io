function getInfoFromKey(allValues, additionalAccessor) {
  var values = [];
  allValues.forEach(function (item) {
    if (additionalAccessor) { values.push(item[additionalAccessor]['name']); }
    else { values.push(item['name']); }
  });

  return values.join(", ");
}


function drawMoreInfoPage(gameInfo) {
  let output = `
      <div class="col-md-8">
          <h2>${gameInfo.name}</h2>
          <img src="${gameInfo.background_image}" class="img-responsive">
          <ul class="list-group">
              <li class="list-group-item" id="rating"><strong>Metacritic Rating: </strong>${gameInfo.metacritic}</li>
              <li class="list-group-item" id="releaseDate"><strong>Released: </strong>${gameInfo.released}</li>
              <li class="list-group-item" id="stores"><strong>Store(s): </strong>${getInfoFromKey(gameInfo['stores'], 'store')}</li>
              <li class="list-group-item" id="platforms"><strong>Platform(s): </strong>${getInfoFromKey(gameInfo['parent_platforms'], 'platform')}</li>
              <li class="list-group-item" id="genres"><strong>Genre(s): </strong>${getInfoFromKey(gameInfo['genres'], false)}</li>
              <li class="list-group-item" id="developers"><strong>Developer(s): </strong>${getInfoFromKey(gameInfo['developers'], false)}</li>
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
