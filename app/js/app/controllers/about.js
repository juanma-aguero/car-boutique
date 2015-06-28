'use strict';

/**
 * @ngdoc function
 * @name carshowApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the carshowApp
 */
angular.module('carshowApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
