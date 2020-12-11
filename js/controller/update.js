angular.module('app')
    .controller('updateController', [
        '$scope', 'ApiService',
        function updateController ($scope, ApiService) {
            getList = function () {
                ApiService.list().then(function(data){
                    $scope.atividades = data.data;
                    $scope.clean();
                });
            };
            $scope.editAtividade = function (atividade) {
                $scope.atividade = angular.copy(atividade);
                $scope.atividade.data = new Date($scope.atividade.data);
            };
            $scope.update = function (atividade) {
                ApiService.update(atividade,atividade.id).then(function (data) {
                    getList();
                });
            }
            $scope.clean = function () {
                $scope.atividade = false;
            }
            getList();
            $scope.minDate = new Date();
        }]);
