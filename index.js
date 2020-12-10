app = angular.module('app', ['ngRoute'])

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "views/main.html"
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

app.controller('createController', [
    '$scope', 'AtividadesService',
    function createController ($scope, AtividadesService) {

        $scope.minDate = new Date();
        $scope.atividade = {};
        AtividadesService.tipos().then(function(data){
            $scope.tipos = data.data;
        });
        $scope.create = function () {
            AtividadesService.create($scope.atividade).then(function(data){
                clean();
            });
        }
        clean = function () {
            $scope.atividade = {};
        };

    }]);

app.controller('updateController', [
    '$scope', 'AtividadesService',
    function updateController ($scope, AtividadesService) {

        formatData = function (date) {
            return  $filter('date')(date, 'dd/MM/yyyy');
        };
        $scope.atividades = [];
        AtividadesService.list().then(function(data){
            $scope.atividades = data.data;
        });
        AtividadesService.tipos().then(function(data){
            $scope.tipos = data.data;
        });
        $scope.minDate = new Date();
        $scope.atividade = false;
        $scope.atividade = false;
        $scope.editAtividade = function (atividade) {
            $scope.atividade = atividade;
            $scope.atividade.data = new Date($scope.atividade.data);
        };
        $scope.update = function () {
            AtividadesService.update($scope.atividade,$scope.atividade.id).then(function (data) {
                $scope.atividade = false;
                AtividadesService.list().then(function(data){
                    $scope.selecionados = {};
                    $scope.atividades = data.data;
                });
            });
        }
        $scope.cancel = function () {
                $scope.atividade = false;
                $scope.selecionados = {};
        }
    }]);

app.controller('listController', [
    '$scope', 'AtividadesService',
    function listController ($scope, AtividadesService) {
        $scope.atividades = [];
        AtividadesService.list().then(function(data){
            $scope.atividades = data.data;
        });
    }]);

app.controller('deleteController', [
    '$scope', 'AtividadesService',
    function deleteController ($scope, AtividadesService) {
        AtividadesService.list().then(function(data){
            $scope.selecionados = {};
            $scope.atividades = data.data;
        });
        $scope.delete = function () {
            for (var [key, value] of Object.entries($scope.selecionados)) {
                if (value) {
                    AtividadesService.delete(key).then(function (data) {});
                }
            }
            AtividadesService.list().then(function(data){
                $scope.selecionados = {};
                $scope.atividades = data.data;
            });
        }
    }]);

app.factory('AtividadesService', function($http, API){
    return {
        tipos: function(){
            return $http.get(API + 'tipos/');
        },
        list: function(){
            return $http.get(API + 'atividades/');
        },
        create: function(item){
            return $http.post(API + 'atividades/', item);
        },
        update: function(item, id){
            return $http.put(API + 'atividades/' + id, item);
        },
        delete: function(id){
            return $http.delete(API + 'atividades/' + id);
        }
    }
});

app.value('API', 'http://localhost:8080/');