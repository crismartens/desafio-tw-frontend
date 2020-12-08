angular.module('app')
    .directive(
        'crud',
        function() {
            return {
                templateUrl:'../views/crud.html',
                link: function (scope, element, attrs) {
                    scope.title = 'Crud';
                }
            }
        });