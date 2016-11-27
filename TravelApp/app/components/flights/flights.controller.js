(function () {
    'use strict';

    angular
        .module('app')
        .controller('FlightsController', FlightsController);

    FlightsController.$inject = ['$scope'];

    function FlightsController($scope) {
        $scope.startDate = new Date();
        $scope.endDate = new Date();
        $scope.from = '';
        $scope.to = '';
    }
})();