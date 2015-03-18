'use strict';

/**
 * @ngdoc overview
 * @name astroApp
 * @description
 * # astroApp
 *
 * Main module of the application.
 */
angular
  .module('astroApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'pang'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/books', {
        templateUrl: 'views/books.html',
        controller: 'BookCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
