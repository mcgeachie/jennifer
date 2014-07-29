'use strict';

angular.module('jenniferApp')
  .directive('jennifer', function () {
    return {
      template: '<div></div>',
      restrict: 'ACE',
      link: function postLink(scope, element, attrs) {
        element.text('this is the jenText directive');
      }
    };
  });
