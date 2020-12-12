angular.module('app')
    .directive(
        'appMenu',
        function(CONSTANTS) {
            return {
                templateUrl: '../../views/directive/menu.html',
                link: function (scope) {
                    scope.actions = CONSTANTS.menu;
                    scope.getRoute = function (option) {
                       return "#!" + option.toLowerCase();
                    }
                }
            }
        });