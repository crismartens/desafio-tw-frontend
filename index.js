app = angular.module('app', ['ngRoute'])

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            template : "<h1>Main</h1><p>Click on the links to change this content</p>"
        })
        .when("/criar", {
            templateUrl : "views/crud/create.html",
            controller:'createController',
        })
        .when("/listar", {
            templateUrl : "views/crud/read.html"
        })
        .when("/editar", {
            templateUrl : "views/crud/update.html",
            controller:'updateController',
        })
        .when("/excluir", {
            templateUrl : "views/crud/delete.html"
        });
});

app.controller('createController', [
    '$scope',
    function createController ($scope) {
        $scope.atividade = {};
        $scope.tipos = ['Manutenção', 'Desenvolvimento', 'Documentação'];
        $scope.prioridades = ['Normal', 'Urgente'];
        $scope.minDate = new Date();
    }]);

app.controller('updateController', [
    '$scope',
    function updateController ($scope) {
        $scope.atividade = {
            nome: 'Cris',
            data: new Date(),
            tipo: 'Desenvolvimento',
            prioridade: 'urgente'
        };
        $scope.tipos = ['Manutenção', 'Desenvolvimento', 'Documentação'];
        $scope.prioridades = ['Normal', 'Urgente'];
        $scope.minDate = new Date();
    }]);