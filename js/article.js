angular.module('app')
    .directive(
        'appArticle',
        function() {
            return {
                templateUrl:'../views/article.html',
                link: function (scope, element, attrs) {

                }
            }
        });