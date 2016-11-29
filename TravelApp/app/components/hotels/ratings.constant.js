(function () {
    'use strict';

    angular
        .module('app')
        .constant('RATINGS', {
            1: '★ 1 star and higher',
            2: '★★ 2 stars and higher',
            3: '★★★ 3 stars and higher',
            4: '★★★★ 4 stars and higher',
            5: '★★★★★ 5 stars and higher'
        });

})();
