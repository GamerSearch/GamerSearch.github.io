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

  ApiHandler.prototype.searchGame = function (searchString) {
    var fullString = this.serverUrl + '?search=' + searchString;
    return $.get(fullString, function(serverResponse) {
      console.log(serverResponse);
    });
  };

  App.ApiHandler = ApiHandler;
  window.App = App;

})(window);
