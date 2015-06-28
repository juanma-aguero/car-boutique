angular.module('carshowApp').factory('carService', function ($http) {
    var cars = [];
    return {
        findAll: function (_success) {
            $http.get('js/data/data.json').success(function (data) {
                _success(data);
                cars = data;
            });
        },
        findOne: function (id, _success) {
            $http.get('js/data/data.json').success(function (data) {
                cars = data;
                var car = null;
                for (var i = 0; i < cars.length; i++) {
                    if (cars[i].id == id) {
                        car = cars[i];
                        break;
                    }
                }
                _success(car);
            });
        },
        findByBrand: function (brandName, _success) {
            $http.get('js/data/data.json').success(function (data) {
                cars = data;
                var carsResult = [];
                for (var i = 0; i < cars.length; i++) {
                    var regex = new RegExp(".*" + brandName.toLowerCase() + "");
                    if (regex.test(cars[i].company.toLowerCase())) {
                        carsResult.push(angular.copy(cars[i]));
                    }
                }
                _success(carsResult);
            });

        }
    };
});