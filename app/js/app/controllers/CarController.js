'use strict';

/**
 * @author Juan Manuel Aguero <juanma.aguero@gmail.com>
 */
angular.module('carshowApp').controller('CarCtrl', function ($scope, $routeParams, carService) {

    $scope.car = null;

    /**
     * Init home.
     */
    $scope.init = function () {
        var id = $routeParams.car_id;
        carService.findOne(id, function (data) {
            $scope.car = data;
        });
    };

});
