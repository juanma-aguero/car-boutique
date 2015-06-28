angular.module('carshowApp').factory('carService', function ($http) {
    var cars = [];
    return {
        findAll: function (_success) {
            $http.get('js/data/data.json').success(function (data) {
                _success(data);
                cars = data;
            });
        },
        findOne: function (id) {
            var car = null;
            for (var i = 0; i < cars.length; i++) {
                if (cars[i].id == id) {
                    car = cars[i];
                    break;
                }
            }
            return car;
        },
        findByBrand: function (brandName) {
            var carsResult = [];
            for (var i = 0; i < cars.length; i++) {
                var regex = new RegExp(".*" + brandName.toLowerCase() + "");
                if (regex.test(cars[i].company.toLowerCase())) {
                    carsResult.push(angular.copy(cars[i]));
                }
            }
            return carsResult;
        }
    };
});