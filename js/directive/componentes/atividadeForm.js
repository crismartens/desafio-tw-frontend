angular.module('app')
    .directive(
        'atividadeForm',
        function(ApiService) {
            return {
                scope: {
                    tela: "@tela",
                    atividade: "=atividade",
                    acao: "&"
                },
                templateUrl: '../../../views/directive/componentes/atividadeForm.html',
                link: function (scope) {
                    scope.minDate = new Date();
                    ApiService.tipos().then(function(data){
                        scope.tipos = data.data;
                    });
                    scope.clean = function () {
                        scope.atividade = false;
                    }
                }
            }
        });