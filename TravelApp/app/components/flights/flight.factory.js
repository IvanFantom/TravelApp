(function () {
    'use strict';

    angular
        .module('app')
        .factory('Flight', ['$filter', function ($filter) {
            function Flight() {
                var self = this;

                self.startDate = new Date();
                self.endDate = new Date();
                self.from = '';
                self.to = '';

                self.toString = function () {
                    var formattedStartDate = $filter('date')(self.startDate, 'MMMM dd, y');
                    var formattedEndDate = $filter('date')(self.endDate, 'MMMM dd, y');
                    return formattedStartDate + ' - ' + formattedEndDate + ', ' + self.from + ' ✈ ' + self.to;
                }
            };

            return Flight;
        }]);

})();
