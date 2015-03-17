'use strict';

/**
 * @ngdoc function
 * @name astroApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the astroApp
 */
angular.module('astroApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
