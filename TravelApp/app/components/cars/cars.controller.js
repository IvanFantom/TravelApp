(function () {
    'use strict';

    angular
        .module('app')
        .controller('CarsController', CarsController);

    CarsController.$inject = ['$scope', 'RecentSearches', 'Car', 'TYPES'];

    function CarsController($scope, RecentSearches, Car, TYPES) {
        $scope.vm = new Car();
        $scope.types = TYPES;

        $scope.clear = function() {
            $scope.vm = new Car();
        };

        $scope.search = function() {
            RecentSearches.add($scope.vm);
        };
    };

})();