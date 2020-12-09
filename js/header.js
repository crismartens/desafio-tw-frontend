angular.module('app')
    .directive(
        'appHeader',
        function() {
            return {
                templateUrl:'../views/header.html',
                link: function (scope, element, attrs) {
                    scope.header = 'Header';
                }
            }
        });