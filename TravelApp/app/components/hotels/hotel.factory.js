(function () {
    'use strict';

    angular
        .module('app')
        .factory('Hotel', ['$filter', 'RATINGS', function ($filter, RATINGS) {
            function Hotel() {
                var self = this;

                self.startDate = new Date();
                self.endDate = new Date();
                self.rating = 3;
                self.location = '';

                self.toString = function () {
                    var formattedStartDate = $filter('date')(self.startDate, 'MMMM dd, y');
                    var formattedEndDate = $filter('date')(self.endDate, 'MMMM dd, y');

                    return formattedStartDate + ' - ' + formattedEndDate + ', ' + self.location + ', ' + RATINGS[self.rating];
                }
            };

            return Hotel;
        }]);

})();
