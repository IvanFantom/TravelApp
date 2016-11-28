(function () {
    'use strict';

    angular
        .module('app')
        .directive('location', LocationDirective);

    function LocationDirective() {
        return {
            restrict: 'E',
            scope: {
                model: '=',
                title: '@'
            },
            templateUrl: 'app/components/shared/directives/location/location.html'
        };
    }
})();
