(function (window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  function ApiHandler(url) {
    if (!url) {
      throw new Error('No remote URL supplied.');
    }
    this.serverUrl = url;
  };

  ApiHandler.prototype.searchGames = function (searchString) {
    var fullString = this.serverUrl + '?search=' + searchString;
    return $.get(fullString, function(serverResponse) {
      return serverResponse["results"].slice(0, 5);
    });
  };

  ApiHandler.prototype.searchGame = function (id) {
    var fullString = this.serverUrl + id;
    return $.get(fullString, function (serverResponse) {
      return serverResponse;
    });
  }

  ApiHandler.prototype.searchGame

  App.ApiHandler = ApiHandler;
  window.App = App;

})(window);
