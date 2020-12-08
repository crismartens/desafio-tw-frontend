angular.module('app')
    .controller(
        'meuControl',
        ['$scope', '$http',
        function($scope, $http) {
            $scope.value = 1;

    }]);

        // $scope.get = function () {
        //     $http.get('http://rest-service.guides.spring.io/greeting').then(function (response) {
        //         $scope.greeting = response.data;
        //     });
        // }
        //
        // $scope.post = function () {
        //     $http.get('http://rest-service.guides.spring.io/greeting').then(function (response) {
        //         $scope.greeting = response.data;
        //     });
        // }
        //
        // $scope.put = function () {
        //     $http.get('http://rest-service.guides.spring.io/greeting').then(function (response) {
        //         $scope.greeting = response.data;
        //     });
        // }
        //
        // $scope.delete = function () {
        //     $http.get('http://rest-service.guides.spring.io/greeting').then(function (response) {
        //         $scope.greeting = response.data;
        //     });
        // }
