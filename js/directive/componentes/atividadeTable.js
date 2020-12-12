angular.module('app')
    .directive(
        'atividadeTable',
        function() {
            return {
                scope: {
                    tela: "@tela",
                    acao: "&",
                    atividades: "=atividades",
                    atividade: "=atividade",
                    selecionados: "=selecionados"
                },
                templateUrl: '../../../views/componentes/atividadeTable.html'
            }
        });