MAIN_CONTENT_SELECTOR = 'main-content';


var topFive = JSON.parse(sessionStorage.getItem('topFive'));
console.log("LOOK topFive: ");
console.log(topFive)

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

  var title = document.createElement('p');
  title.innerHTML = item['name'];

  var titleContainer = document.createElement('div');
  titleContainer.className = 'title-container';
  titleContainer.appendChild(title);

  var overralContainer = document.createElement('div');
  overralContainer.className = 'container'

  overralContainer.appendChild(imageContainer);
  overralContainer.appendChild(titleContainer);

  var frame = document.getElementsByClassName(MAIN_CONTENT_SELECTOR)[0];
  frame.appendChild(overralContainer);
}

function initializeEvent() {
  'use strict';
  drawTopResults();
}

initializeEvent();
