(function () {
    'use strict';

    angular
        .module('app')
        .factory('Car', ['$filter', 'TYPES', function ($filter, TYPES) {
            function Car() {
                var self = this;

                self.startDate = new Date();
                self.endDate = new Date();
                self.type = 1;
                self.location = '';

                self.toString = function () {
                    var formattedStartDate = $filter('date')(self.startDate, 'MMMM dd, y');
                    var formattedEndDate = $filter('date')(self.endDate, 'MMMM dd, y');

                    return formattedStartDate + ' - ' + formattedEndDate + ', ' + self.location + ' 🚗  ' + TYPES[self.type];
                }
            };

            return Car;
        }]);

})();
