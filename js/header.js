angular.module('app')
    .directive(
        'header',
        function() {
            return {
                templateUrl:'../views/header.html',
                link: function (scope, element, attrs) {
                    scope.header = 'Header';
                }
            }
        });