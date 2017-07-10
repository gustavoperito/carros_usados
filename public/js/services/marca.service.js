(function () {
  'use strict';

  angular
    .module('app')
    .factory('MarcaService', MarcaService);

  MarcaService.$inject = ['$http'];
  function MarcaService($http) {
    var service = {
      find: find,
      findById: findById,
      save: save,
      remove: remove
    };

    var URL = '/api/marcas';

    return service;

    ////////////////
    function find(query) {
      return $http.get(URL, { params: { filter: JSON.stringify(query) } });
    }

    function findById(id) {
      return $http.get(URL + '/' + id);
    }

    function save(record) {
      if (record._id) {
        return $http.put(URL + '/' + record._id, record);
      } else {
        return $http.post(URL, record);
      }
    }

    function remove(id) {
      return $http.delete(URL + '/' + id);
    }
  }
})();