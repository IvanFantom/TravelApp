(function () {
    'use strict';

    angular
        .module('app')
        .config(routesConfig);

    routesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routesConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('travel-app', {
                url: '/',
                views: {
                    '': {
                        templateUrl: 'app/components/travel-app.html',
                        controller: 'TravelAppController as travelAppCtrl'
                    },
                    'recent-searches-view@travel-app': {
                        templateUrl: 'app/components/recent-searches/recent-searches.html',
                        controller: 'RecentSearchesController as recentSearchesCtrl'
                    }
                }
            })
            .state('travel-app.flights', {
                url: 'flights',
                templateUrl: 'app/components/flights/flights.html',
                controller: 'FlightsController as flightsCtrl'
            })
            .state('travel-app.hotels', {
                url: 'hotels',
                templateUrl: 'app/components/hotels/hotels.html',
                controller: 'HotelsController as hotelsCtrl'
            })
            .state('travel-app.cars', {
                url: 'cars',
                templateUrl: 'app/components/cars/cars.html',
                controller: 'CarsController as carsCtrl'
            });
    }
})();