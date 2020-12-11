angular.module('app')
    .controller('createController', [
        '$scope', 'ApiService',
        function createController ($scope, ApiService) {
            clean = function () {
                $scope.atividade = {};
            };
            $scope.create = function () {
                ApiService.create($scope.atividade).then(function(data){
                    clean();
                });
            };
            clean();
            $scope.minDate = new Date();
            ApiService.tipos().then(function(data){
                $scope.tipos = data.data;
            });
        }]);
