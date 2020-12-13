app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            template : "<div class='title'><h1>Controle<br>de<br>Atividades</h1></div>"
        })
        .when("/criar", {
            templateUrl : "views/crud/create.html",
            controller:'createController',
        })
        .when("/editar", {
            templateUrl : "views/crud/update.html",
            controller:'updateController',
        })
        .when("/listar", {
            templateUrl : "views/crud/list.html",
            controller: 'listController'
        })
        .when("/excluir", {
            templateUrl : "views/crud/delete.html",
            controller: 'deleteController'
        });
});
