'use strict';

// Register `phoneComparador` component, along with its associated controller and template
angular.
  module('phoneComparador').
  component('phoneComparador', {
    templateUrl: 'phone-comparador/phone-comparador.template.html',
    bindings:{
      comprar:'='
  },
  controller: ['Phone', '$scope',
  function PhoneComparadorController(Phone, $scope) {       

        console.trace('PhoneComparadorController');

        var self = this;

        self.filtro = {
          "atributo": "ram",         
          "min": 0,
          "max": 32000
        }
//this.phones = Phone.query();
self.phones = {};

Phone.getAll().then( 
  function successCallback(response) {
    console.trace("Success");
    self.phones = response.data;
  },
  function errorCallback(response) {
    console.warn("Error");
  }
);
//self.phones = Phone.query();
        self.phone1 = {};
        self.phone2 = {};
        self.orderProp = 'age';

       

        this.selecionar = function(phone){
          console.trace('seleccionado movil');
          self.phone2 = self.phone1;
          self.phone1 = phone;
        }
        // selecionar
        $scope.$on("eventoCompra", function(event, data){

          //alert('eventoCompra en padre ' + data);

      });
      }
    ]
  });
//fitro avanzado
angular.module('phoneComparador').filter('filtroTelefonos', function () {
  return function( items, filtroObject){
    console.log('filtroTelefonos filtro=%o', filtroObject);

    if ( items ){

      return items.filter((telefono)=> {
        let value = telefono.storage[filtroObject.atributo];
        //console.debug("telefono=%s value=%s min%s max=%s", telefono.id, value, min, max );
        return value >= filtroObject.min && value <= filtroObject.max ;
      });

    }  

    // return items;
  }
});
  // Register `phoneComparador` component, along with its associated controller and template
angular.
module('phoneComparador').
component('phoneComparadorDetalle', {
  templateUrl: 'phone-comparador/phone-comparador-detalle.template.html',
  bindings:{
    mostrar:'=',
    comparar:'='
},
controller: ['$rootScope',
function PhoneComparadorDetalleController($rootScope) {         

      console.trace('PhoneComparadorDetalleController');

      var self = this;

  //    $rootScope.moviles =[];
      //
      $rootScope.miMapa = new Map();
      
      //

    self.comprar = function(){
        console.trace('click boton compra %o', self.mostrar  );
  /*        if(self.mostrar.contador){
          self.mostrar.contador=self.mostrar.contador+1;
        }
          else{
            self.mostrar.contador=1;
        }
       $rootScope.moviles.push(self.mostrar);
*/
//
if($rootScope.miMapa.has(self.mostrar)){
 $rootScope.miMapa.set(self.mostrar, $rootScope.miMapa.get(self.mostrar)+1);
}else{
  $rootScope.miMapa.set(self.mostrar, 1);
}
          
//
        //$scope.$emit("eventoCompra", self.moviles );

      }
    }
  ]
});


angular.
  module('phoneComparador').directive("ipComparar",[function() {
  
  var directiveDefinitionObject ={
    restrict:"E",
    replace : true,
    template:'<p> {{v1}} {{unidad}}<span class="label label-{{(v1-v2)>0?\'success\':(v1-v2)==0?\'primary\':\'danger\'}}">{{v1-v2}}</span></p>',
    scope:{
      v1:"@",
      v2:"@",
      unidad:"@"
    }
    
  }
  
  return directiveDefinitionObject;
}]);

		

