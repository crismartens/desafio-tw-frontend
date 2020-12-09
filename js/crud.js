angular.module('app')
    .directive(
        'appCrud',
        function() {
            return {
                templateUrl:'../views/crud.html',
                link: function (scope, element, attrs) {

                    scope.actions = ['CRIAR', 'EDITAR', 'LISTAR', 'EXCLUIR', ""];
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