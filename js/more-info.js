
function drawMoreInfoPage(gameInfo) {
  let output = `
      <div class="col-md-4>
          <img src="https://media.rawg.io/media/games/${gameInfo.background_image}" class=thumbail">
      </div>

      <div class="col-md-8">
          <h2>${gameInfo.title}</h2>
          <ul class="list-group">
              <li class="list-group-item"><strong>Rating:</strong> ${gameInfo.metacritic}<li>
              <li class="list-group-item"><strong>Released:</strong> ${gameInfo.released}</li>
              <li class="list-group-item"><strong>Stores:</strong> ${gameInfo.stores}</li>
              <li class="list-group-item"><strong>Platforms:</strong> ${gameInfo.platforms}</li>
              <li class="list-group-item"><strong>Genre:</strong> ${gameInfo.genres}</li>
          </ul>
      </div>
  </div>

  <div class="row">
      <div class="well">
          <h3>Plot</h3>
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
  console.log("LOOK")
  console.log(gameInfo)
  drawMoreInfoPage(gameInfo);
}

init();
