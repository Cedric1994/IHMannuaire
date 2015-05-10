'use strict';

/**
 * @ngdoc function
 * @name ProjectsCtrl
 * Controller of the Projects
 */
angular.module('pooIhmExemplesApp')
    .controller('UsersCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        //function ajoutUser(var )
        $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users')
            .success(function(data) {
                $scope.users = data.data;
            });


        $scope.majListUsers = function(){
            $scope.majListUser = function(){
                $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + $routeParams.userId)
                    .success(function(data) {
                        if (data.status == "success") {
                            $scope.currentUser = data.data;
                        }
                    });
            }
        }

        $scope.deleteUser = function(id){
            $http.delete('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + id);

            $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + $routeParams.userId)
                .success(function(data) {
                    if (data.status == "success") {
                        $scope.currentUser = data.data;
                    }
                });
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
