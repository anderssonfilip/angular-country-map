'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('Search', function($scope, $http) {
        $http.get('countries.json').success(function(data) {
            $scope.countries = data;
        })
    })
    .controller('Wiki', ['$scope',
        function($scope) {

        }
    ]);