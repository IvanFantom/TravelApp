(function () {
    'use strict';

    angular
        .module('app')
        .controller('RecentSearchesController', RecentSearchesController);

    RecentSearchesController.$inject = ['$scope', 'RecentSearches'];

    function RecentSearchesController($scope, RecentSearches) {
        $scope.history = RecentSearches.history;

        $scope.showSearches = function() {
            return $scope.history.length > 0;
        }
        $scope.remove = function (index) {
            $scope.history.splice(index, 1);
        }
    }
})();