angular.module('app')
    .controller('deleteController', [
        '$scope', 'ApiService',
        function deleteController ($scope, ApiService) {
            getList = function () {
                ApiService.list().then(function(data){
                    $scope.selecionados = {};
                    $scope.atividades = data.data;
                });
            };
            $scope.select = function (a) {
                $scope.selecionados[a.id] = !$scope.selecionados[a.id];
            };
            $scope.delete = function () {
                for (var [key, value] of Object.entries($scope.selecionados)) {
                    if (value) {
                        ApiService.delete(key).then(function (data) {
                            getList();
                        });
                    }
                }
            };
            getList();
        }]);