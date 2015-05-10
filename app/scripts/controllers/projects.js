'use strict';

/**
 * @ngdoc function
 * @name ProjectsCtrl
 * Controller of the Projects
 */
angular.module('pooIhmExemplesApp')
    .controller('ProjectsCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects')
            .success(function(data) {
                $scope.projects = data.data;
            });

        $scope.deleteProject = function(id){
            $http.delete('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + id);
        }

        $scope.modify = function(project){

            if($routeParams.projectId) {
                this.updateProject(project);
            } else {
                console.log("coucou");
                this.createProject(project);
            }
        }
        $scope.createProject = function(project){
            $http.post('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/', project);
        }

        $scope.updateProject = function(project){
            $http.put('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + project.id, project);
        }

        if($routeParams.projectId) {
            $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + $routeParams.projectId)
                .success(function(data) {
                    if (data.status == "success") {
                        $scope.currentProject = data.data;
                    }
                });
        }
    }]);
