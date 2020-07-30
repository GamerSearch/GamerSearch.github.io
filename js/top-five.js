var MAIN_CONTENT_SELECTOR = 'main-content';
var SERVER_URL = 'https://api.rawg.io/api/games';
var FORM_SELECTOR = '[class="searchForm"]';

var App = window.App;
var ApiHandler = App.ApiHandler;
var FormHandler = App.FormHandler;

var apiHandler = new ApiHandler(SERVER_URL);
var formHandler = new FormHandler(FORM_SELECTOR);

function addButtonsHandler() {
  'use strict';
  var allDivsArr = Array.from(document.getElementsByClassName('container'));
  allDivsArr.forEach( function (item) {
    item.addEventListener('click', function(event) {
      return apiHandler.searchGame.call(apiHandler, item['id'])
      .then( function (serverResponse) {
        sessionStorage.setItem('gameInfo', JSON.stringify(serverResponse));
        window.location.href = "more-info.html";
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
  imageContainer.className = 'image-container';
  imageContainer.appendChild(image);

  var title = document.createElement('label');
  title.innerHTML = item['name'];

  var titleContainer = document.createElement('div');
  titleContainer.className = 'title-container';
  titleContainer.appendChild(title);

  var overralContainer = document.createElement('div');
  overralContainer.className = 'container';
  overralContainer.id = item['id'];
  if (index%2==0) { overralContainer.style.backgroundColor = '#7d3d36'; }
  else { overralContainer.style.backgroundColor = '#552e1c';  }

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

formHandler.addSubmitHandler( function (data) {
  return apiHandler.searchGames.call(apiHandler, data)
  .then(function (serverResponse) {
    var allResults = serverResponse["results"];
    var continueForm = false;

    if (allResults.length == 0) {
      alert("There were no games matching '" + data + "' in the database." )
    }
    else {
      continueForm = true;
      if (allResults.length >= 5) { var topFive = allResults.slice(0, 5); }
      else { var topFive = allResults.slice(0, allResults.length); }
    }

    if (continueForm) {
      sessionStorage.setItem('topFive', JSON.stringify(topFive));
      window.location.href = "top-five.html"
    }

  }.bind(this));
});

var topFive = JSON.parse(sessionStorage.getItem('topFive'));
init();
