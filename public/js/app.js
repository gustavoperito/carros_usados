(function() {
  'use strict';

  angular.module('app', [
    'ngRoute',
    'ui.bootstrap'
  ]).config(AppConfig);

  AppConfig.$inject = ['$routeProvider'];
  function AppConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main.html',
        controller: 'MainController',
        controllerAs: 'vm'
      })
      .when('/marcas', {
        templateUrl: 'partials/marca.html',
        controller: 'MarcaController',
        controllerAs: 'vm'
      })
      .when('/modelos', {
        templateUrl: 'partials/modelo.html',
        controller: 'ModeloController',
        controllerAs: 'vm'
      })
      .when('/anunciar', {
        templateUrl: 'partials/anuncio.html',
        controller: 'AnuncioController',
        controllerAs: 'vm'
      })
      .otherwise('/');
  }
})();