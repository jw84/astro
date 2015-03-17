'use strict';

/**
 * @ngdoc function
 * @name astroApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the astroApp
 */
angular.module('astroApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
