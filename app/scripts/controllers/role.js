'use strict';

/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pooIhmExemplesApp
 */
angular.module('pooIhmExemplesApp')
    .controller('RolesCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Roles')
            .success(function(data) {
                $scope.roles = data.data;
            });

        $scope.deleteRole = function(id){
            $http.delete('http://poo-ihm-2015-rest.herokuapp.com/api/Roles/' + id);
        }

        $scope.createRole = function(role){
            $http.post('http://poo-ihm-2015-rest.herokuapp.com/api/Roles/', role);
        }

        $scope.updateRole = function(role){
            $http.put('http://poo-ihm-2015-rest.herokuapp.com/api/Roles/', role);
        }

        /*if($routeParams.userId) {
            $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Roles/' + $routeParams.userId)
                .success(function(data) {
                    if (data.status == "success") {
                        $scope.currentUser = data.data;
                    }
                });
        }*/
    }]);