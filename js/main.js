(function (window) {
  'use strict';
  var FORM_SELECTOR = '[class="searchForm"]'
  var INPUT_SELECTOR = '[id="searchBar"]';
  var SEARCH_BUTTON_SELECTOR = '[id="wrapper"]';
  var SERVER_URL = 'https://api.rawg.io/api/games';

  var App = window.App;
  var FormHandler = App.FormHandler;
  var ApiHandler = App.ApiHandler;

  var formHandler = new FormHandler(FORM_SELECTOR);
  var apiHandler = new ApiHandler(SERVER_URL);

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
        window.location.replace("top-five.html")
      }

    }.bind(this));
  });


})(window);
