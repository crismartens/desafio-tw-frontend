angular.module('app')
    .directive(
        'appArticle',
        function() {
            return {
                templateUrl:'../../views/directive/article.html'
            }
        });