angular.module('app')
    .directive(
        'appFooter',
        function() {
            return {
                templateUrl:'../views/footer.html',
                link: function (scope, element, attrs) {
                    scope.footer = 'Footer';
                }
            }
        });