'use strict';

/**
 * @ngdoc function
 * @name astroApp.controller:BookCtrl
 * @description
 * # BookCtrl
 * Controller of the astroApp
 */
angular.module('astroApp')
  .controller('BookCtrl', function ($scope, pang) {
  	// setup
  	pang.initialize('2li4hRgGKTJuYp2054necV8xoWb9ZRKO6cFl1DCp', 'Bt3ZKNqkyhkODOtb6xwdGGIORurvugWFIVryM0Ce');
  	$scope.books = pang.Collection('Books').build();
  	$scope.books.autoSync = true;
  });