(function () {

    'use strict';

    var myApp = angular.module('WordcountApp', [])

    .controller('WordcountController', ['$scope', '$log', '$http', '$timeout',
        function($scope, $log, $http, $timeout) {

            $scope.getResults = function() {

                $log.log("test");

            };
        }   
    ]);

}());