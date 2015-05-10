'use strict';

/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pooIhmExemplesApp
 */
angular.module('pooIhmExemplesApp')
    .controller('UsersCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users')
            .success(function(data) {
                $scope.users = data.data;
            });

        $scope.deleteUser = function(id){
            $http.delete('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + id);
        }

        $scope.modify = function(user){
            if($routeParams.userId) {
                this.updateUser(user);
            } else {
                this.createUser(user);
            }
        }

        $scope.createUser = function(user){
            $http.post('http://poo-ihm-2015-rest.herokuapp.com/api/Users/', user);
        }

        $scope.updateUser = function(user){
            $http.put('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + user.id, user);
        }

        if($routeParams.userId) {
            $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + $routeParams.userId)
                .success(function(data) {
                    if (data.status == "success") {
                        $scope.currentUser = data.data;
                    }
                });
        }
    }]);
