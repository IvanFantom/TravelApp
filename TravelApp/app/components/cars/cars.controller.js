(function () {
    'use strict';

    angular
        .module('app')
        .controller('CarsController', CarsController);

    CarsController.$inject = ['$scope', '$state'];

    function CarsController($scope, $state) {
        var ctrl = this;


    }
})();