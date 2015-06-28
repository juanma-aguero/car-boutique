'use strict';

/**
 * @author Juan Manuel Aguero <juanma.aguero@gmail.com>
 */
angular.module('carshowApp').controller('MainCtrl', function ($scope, carService, $modal) {

    $scope.cars = [];
    $scope.compareCars = [];
    $scope.searchBrand;

    /**
     * Init home.
     */
    $scope.init = function () {
        carService.findAll(function (data) {
            $scope.cars = data;
        });
    };

    /**
     * 
     * @returns {undefined}
     */
    $scope.compare = function () {
        var modalInstance = $modal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'carCompare.html',
            controller: 'ModalInstanceCtrl',
            size: 'lg',
            resolve: {
                items: function () {
                    var cars = [];
                    for (var i = 0; i < $scope.cars.length; i++) {
                        if ($scope.compareCars.indexOf($scope.cars[i].id) !== -1) {
                            cars.push(angular.copy($scope.cars[i]));
                        }
                    }
                    return cars;
                }
            }
        });
    };
    /**
     * 
     * @param {type} car_id
     * @returns {undefined}
     */
    $scope.toggleCheck = function (car_id) {
        if ($scope.compareCars.indexOf(car_id) === -1) {
            if ($scope.compareCars.length > 2) {
                $scope.compareCars.splice(0, 1);
            }
            $scope.compareCars.push(car_id);
        } else {
            $scope.compareCars.splice($scope.compareCars.indexOf(car_id), 1);
        }

    };

    /**
     * 
     * @returns {undefined}
     */
    $scope.compareClear = function () {
        $scope.compareCars = [];
    };

    /**
     * 
     * @returns {undefined}
     */
    $scope.findByBrand = function () {
        if ($scope.searchBrand.length > 0) {
            carService.findByBrand($scope.searchBrand, function (data) {
                $scope.cars = data;
            });
        } else {
            $scope.init();
        }
    };

});
angular.module('carshowApp').controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

    $scope.cars = items;

    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});
