(function() {
'use strict';

    angular
        .module('app')
        .controller('ModeloController', ModeloController);

    ModeloController.inject = ['ModeloService', 'MarcaService'];
    function ModeloController(ModeloService, MarcaService) {
        var vm = this;
        vm.busca = ''
        vm.modelos = []

        vm.salvar = salvar;
        vm.getMarca = getMarca;
    
        activate()

        function activate() {
            var query = vm.busca ? { nome: vm.busca } : {}

            MarcaService.find(query).success(function (data) {
                vm.marcas = data;
            });

            ModeloService.find(query).success(function (data) {
               vm.modelos = data;
            });
         }

        function salvar(){            
            ModeloService.save(vm.modelo).success(function (data) {
                vm.modelo = {}
            });  
        }

        function getMarca(marca){            
            MarcaService.findById(marca).success(function (data) {
                return data.nome;
            });  
        }
    }
})();