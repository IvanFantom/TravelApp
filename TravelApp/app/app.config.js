(function () {
    'use strict';

    angular
        .module('app')
        .config(routesConfig);

    routesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routesConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('travel-app', {
                url: '/',
                templateUrl: 'app/components/travel-app.html',
                controller: 'TravelAppController as travelApp'
            });

        $urlRouterProvider.otherwise('/');
    }
})();