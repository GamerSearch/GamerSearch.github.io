MAIN_CONTENT_SELECTOR = '[data-main-content="main"]';


var topFive = JSON.parse(sessionStorage.getItem('topFive'));
console.log("LOOK topFive: ");
console.log(topFive)

function drawTopResults () {
  'use strict';
  topFive.forEach(drawWindows);
}

function drawWindows(item, index) {
  'use strict';
  var newDiv = document.createElement('div');
  newDiv.className = "d-inline-flex p-2";
  newDiv.style.color = "white";
  newDiv.innerHTML = item['name'];
  document.body.appendChild(newDiv);
}

function initializeEvent() {
  'use strict';
  drawTopResults();
}

initializeEvent();
