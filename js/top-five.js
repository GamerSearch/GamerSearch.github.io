MAIN_CONTENT_SELECTOR = 'main-content';
var SERVER_URL = 'https://api.rawg.io/api/games/';

var App = window.App;
var ApiHandler = App.ApiHandler;

var apiHandler = new ApiHandler(SERVER_URL);

function addButtonsHandler() {
  'use strict';
  var allDivsArr = Array.from(document.getElementsByClassName('container'));
  allDivsArr.forEach( function (item) {
    item.addEventListener('click', function(event) {
      return apiHandler.searchGame.call(apiHandler, item['id'])
      .then( function (serverResponse) {
        sessionStorage.setItem('gameInfo', JSON.stringify(serverResponse));
        window.location.replace("more-info.html")
      })
    });
  });
}

function drawTopResults () {
  'use strict';
  topFive.forEach(drawWindows);
}

function drawWindows(item, index) {
  'use strict';

  var image = document.createElement('img');
  image.src = item['background_image'];
  image.className = 'img-responsive';
  image.alt = item['slug'];

  var imageContainer = document.createElement('div');
  imageContainer.style = 'max-width:500px;min-width:50px';
  imageContainer.className = 'image-container';
  imageContainer.appendChild(image);

  var title = document.createElement('p');
  title.innerHTML = item['name'];

  var titleContainer = document.createElement('div');
  titleContainer.className = 'title-container';
  titleContainer.appendChild(title);

  var overralContainer = document.createElement('div');
  overralContainer.className = 'container';
  overralContainer.id = item['id'];

  overralContainer.appendChild(imageContainer);
  overralContainer.appendChild(titleContainer);

  var frame = document.getElementsByClassName(MAIN_CONTENT_SELECTOR)[0];
  frame.appendChild(overralContainer);
}

function init() {
  'use strict';
  drawTopResults();
  addButtonsHandler();
}

var topFive = JSON.parse(sessionStorage.getItem('topFive'));
init();