function drawMoreInfoPage(gameInfo) {
  for (i in gameInfo.genres)
  {
      gameInfo.genres[i].name;
      console.log(gameInfo.genres[i].name);
  }

  for (j in gameInfo.platforms) {
      gameInfo.platforms[j].platform.name;
      console.log(gameInfo.platforms[j].platform.name);
  }

  for (k in gameInfo.stores) {
      gameInfo.stores[k].store.name;
      console.log(gameInfo.stores[k].store.name);
  }

  let output = `
      <div class="col-md-4>
      </div>

      <div class="col-md-8">
          <h2>${gameInfo.name}</h2>
          <img src="${gameInfo.background_image}" class=thumbail">
          <ul class="list-group">
              <li class="list-group-item"><strong>Rating:</strong> ${gameInfo.metacritic}</li>
              <li class="list-group-item"><strong>Released:</strong> ${gameInfo.released}</li>
              <li class="list-group-item"><strong>Stores:</strong> ${gameInfo.stores[k].store.name}</li>
              <li class="list-group-item"><strong>Platforms:</strong> ${gameInfo.platforms[j].platform.name}</li>
              <li class="list-group-item"><strong>Genre:</strong> ${gameInfo.genres[i].name}</li>
          </ul>
      </div>
  </div>

  <div class="row">
      <div class="well">
          <h3>Description</h3>
          ${gameInfo.description}
          <hr>
          <a href="index.html" class="btn btn-default">Go Back to Search</a>
      </div>
  </div>
  `;
  $('#game').html(output);
}

function init() {
  var gameInfo = JSON.parse(sessionStorage.getItem('gameInfo'));
  drawMoreInfoPage(gameInfo );
}

init();
