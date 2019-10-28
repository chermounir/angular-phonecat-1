'use strict';

// Register `phoneCarrito` component, along with its associated controller and template
angular.
  module('phoneCarrito').
  component('phoneCarrito', {
    templateUrl: 'phone-carrito/phone-carrito.template.html',
    controller: ['Phone', '$rootScope',
  function PhoneComparadorController(Phone, $rootScope) {       

        console.trace('PhoneComparadorController');

        var self = this; 

       
        self.phones=[];
        /*
        $rootScope.miMapa.forEach( function(key, valor) {
          key.contador=valor;
          self.phones.push(key);
        });*/
        /////
        function mapElements(value, key, map) {
          key.contador=value;
          self.phones.push(key);
      }
      $rootScope.miMapa.forEach(mapElements);
        /////
      }
    ]
  });
