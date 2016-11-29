(function () {
    'use strict';

    angular
        .module('app')
        .controller('HotelsController', HotelsController);

    HotelsController.$inject = ['$scope', 'RecentSearches', 'Hotel', 'RATINGS'];

    function HotelsController($scope, RecentSearches, Hotel, RATINGS) {
        $scope.vm = new Hotel();
        $scope.ratings = RATINGS;

        $scope.clear = function () {
            $scope.vm = new Hotel();
        };

        $scope.search = function () {
            RecentSearches.add($scope.vm);
        };
    }
})();