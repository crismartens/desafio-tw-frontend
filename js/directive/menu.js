angular.module('app')
    .directive(
        'appMenu',
        function(CONSTANTS) {
            return {
                templateUrl: '../../views/menu.html',
                link: function (scope) {
                    scope.actions = CONSTANTS.menu;
                    scope.getRoute = function (option) {
                       return option !== 'HOME' ? "#!" + option.toLowerCase() : "#!";
                    }
                }
            }
        });