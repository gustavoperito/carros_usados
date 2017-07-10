(function() {
'use strict';

    angular
        .module('app')
        .controller('MarcaController', MarcaController);

    MarcaController.inject = ['MarcaService'];
    function MarcaController(MarcaService) {
        var vm = this;
        vm.busca = ''


        vm.salvar = salvar
    
        activate()

        function activate() {
            var query = vm.busca ? { nome: vm.busca } : {}

            MarcaService.find(query).success(function (data) {
                vm.marcas = data;
            });
         }

        function salvar(){
            MarcaService.save(vm.marca).success(function (data) {
                vm.marca = {}
            });  
        }
    }
})();