'use strict';

/**
 * 
 * @author Juan Manuel Aguero <juanma.aguero@gmail.com>
 */
angular.module('carshowApp', ['ngRoute', 'ui.bootstrap']).config(function ($routeProvider) {
    $routeProvider
            .when('/car/:car_id', {
                templateUrl: 'js/app/views/car/show.html',
                controller: 'CarCtrl'
            })
            .when('/', {
                templateUrl: 'js/app/views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'js/app/views/about.html',
                controller: 'AboutCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
});
