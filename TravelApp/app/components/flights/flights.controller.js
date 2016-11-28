(function () {
    'use strict';

    angular
        .module('app')
        .controller('FlightsController', FlightsController);

    FlightsController.$inject = ['$scope', 'RecentSearches', 'Flight'];

    function FlightsController($scope, RecentSearches, Flight) {
        $scope.vm = new Flight();

        $scope.clear = function() {
            $scope.vm = new Flight();
        };

        $scope.search = function() {
            RecentSearches.add($scope.vm);
        };
    }
})();
