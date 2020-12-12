angular.module('app')
    .controller('createController', [
        '$scope', 'ApiService',
        function createController ($scope, ApiService) {
            clean = function () {
                $scope.atividade = {};
            };
            $scope.create = function (atividade) {
                ApiService.create(atividade).then(function(data){
                    clean();
                });
            };
            clean();
            $scope.formInvalid = {};
        }]);
