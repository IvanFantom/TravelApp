(function () {
    'use strict';

    angular
        .module('app')
        .directive('datePicker', DatePickerDirective);

    function DatePickerDirective() {
        return {
            restrict: 'E',
            scope: {
                model: '=',
                title: '@'
            },
            templateUrl: 'app/components/shared/directives/date-picker/date-picker.html'
        };
    }
})();
