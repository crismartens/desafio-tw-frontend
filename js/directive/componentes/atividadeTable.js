angular.module('app')
    .directive(
        'atividadeTable',
        function() {
            return {
                scope: {
                    tela: "@tela",
                    acao: "&",
                    atividades: "=atividades",
                    atividade: "=atividade"
                },
                templateUrl: '../../../views/componentes/atividadeTable.html',
            }
        });