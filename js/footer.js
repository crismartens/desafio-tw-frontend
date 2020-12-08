angular.module('app')
    .directive(
        'footer',
        function() {
            return {
                templateUrl:'../views/footer.html',
                link: function (scope, element, attrs) {
                    scope.footer = 'Footer';
                }
            }
        });