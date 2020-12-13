angular.module('app')
    .controller('listController', [
        '$scope', 'ApiService',
        function listController ($scope, ApiService) {
            ApiService.list().then(function(data){
                $scope.atividades = data.data;
            });
        }]);