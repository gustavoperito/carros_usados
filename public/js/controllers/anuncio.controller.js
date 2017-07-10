(function() {
'use strict';

    angular
        .module('app')
        .controller('AnuncioController', AnuncioController);

    AnuncioController.inject = ['AnuncioService'];
    function AnuncioController(AnuncioService) {
        var vm = this;
        vm.busca = ''
        vm.anuncio = {}


        vm.salvar = salvar
    
        activate()

        function activate() {
            var query = vm.busca ? { nome: vm.busca } : {}
         }

        function salvar(){
            AnuncioService.save(vm.anuncio).success(function (data) {
                vm.anuncio = {}
            });  
        }
    }
})();