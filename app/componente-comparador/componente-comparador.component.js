'use strict';

// Register `componenteComparador` component, along with its associated controller and template
angular.
  module('componenteComparador').
  component('componenteComparador', {
    templateUrl: 'componente-comparador/componente-comparador.template.html',
    controller: ['Phone',
      function ComponenteComparadorController(Phone) {        

        console.trace('ComponenteComparadorController');

      

      }
    ]
  });
