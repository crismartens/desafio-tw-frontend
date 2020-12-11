angular.module('app')
    .controller('homeController', [
        '$scope', 'ApiService',
        function listController ($scope, ApiService) {
            ApiService.list().then(function(data){
                $scope.atividades = data.data.length;
            });
        }]);