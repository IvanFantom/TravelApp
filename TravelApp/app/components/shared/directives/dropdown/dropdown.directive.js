(function () {
    'use strict';

    angular
        .module('app')
        .directive('dropdown', DropdownDirective);

    function DropdownDirective() {
        return {
            restrict: 'E',
            scope: {
                model: '=',
                title: '@',
                options: '='
            },
            templateUrl: 'app/components/shared/directives/dropdown/dropdown.html'
        };
    }
})();
