(function() {
'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    MainController.inject = ['AnuncioService'];
    function MainController(AnuncioService) {
        var vm = this;
        vm.busca = ''

        activate()

        function activate() {
            var query = vm.busca ? { nome: vm.busca } : {}

            AnuncioService.find(query).success(function (data) {
                vm.anuncios = data;
            });
         }
    }
})();