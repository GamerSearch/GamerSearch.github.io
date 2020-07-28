(function (window) {
  'use strict';
  var FORM_SELECTOR = '[data-search-bar="form"]'
  var INPUT_SELECTOR = '[id="searchBar"]';
  var SEARCH_BUTTON_SELECTOR = '[id="wrapper"]';
  var SERVER_URL = 'https://api.rawg.io/api/games';

  var App = window.App;
  var FormHandler = App.FormHandler;
  var ApiHandler = App.ApiHandler;

  var formHandler = new FormHandler(FORM_SELECTOR);
  var apiHandler = new ApiHandler(SERVER_URL);

  formHandler.addSubmitHandler( function (data) {
    return apiHandler.searchGame.call(apiHandler, data)
  });


})(window);
