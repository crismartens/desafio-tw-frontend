angular.module('app')
    .directive(
        'appCrud',
        function() {
            return {
                templateUrl:'../views/crud.html',
                link: function (scope, element, attrs) {

                    scope.actions = ['CRIAR', 'LISTAR', 'EDITAR', 'EXCLUIR', ""];
                    scope.selected = scope.actions[0];

                    scope.select = function (option) {
                        scope.selected = option;
                    }
                    scope.getRoute = function (option) {
                       return option ? "#!" + option.toLowerCase() : "#!";
                    }
                }
            }
        });