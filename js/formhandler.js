(function (window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  function FormHandler(selector) {
    if (!selector) {
      throw new Error('No selector provided');
    }
    this.$formElement = $(selector);
    if (this.$formElement.length === 0) {
      throw new Error('Could not find element with selector: ' + selector);
    }
  }

  FormHandler.prototype.addSubmitHandler = function (fn) {
    this.$formElement.on('submit', function (event) {
      event.preventDefault();

      var searchString = '';
      $(this).serializeArray().forEach(function (item) {
        searchString = item.value;
      });
      fn(searchString)
      .then(function () {
        this.reset();
        this.elements[0].focus();
      }.bind(this));
    });
  }

  App.FormHandler = FormHandler;
  window.App = App;

})(window);
