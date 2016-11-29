(function () {
    'use strict';

    angular
        .module('app')
        .factory('RecentSearches', function () {
            var recentSearches = {
                history: [],
                add: function(model) {
                    var item = model.toString();
                    this.history.push(item);
                }
            };

            return recentSearches;
        });

})();
