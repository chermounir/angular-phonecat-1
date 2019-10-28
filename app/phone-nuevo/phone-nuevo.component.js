'use strict';

// Register `phoneNuevo` component, along with its associated controller and template
angular.
  module('phoneNuevo').
  component('phoneNuevo', {
    templateUrl: 'phone-nuevo/phone-nuevo.template.html',
    controller: ['$routeParams', 'Phone', '$location', '$scope','$http',
      function PhoneNuevoController($routeParams, Phone, $location,$scope,$http) {
        var self = this;  
        self.clase="success";
        self.texto="Movil insertado con exito";  
        $scope.formData = {}; 

        let id = $routeParams.phoneId;
        if ( id  ) {   //buscar telefono por id

          Phone.getById(id).then(
            (res)=>{
              console.debug('telefono encontrado');
              self.form = res.data;
            },
            ()=>{
              console.warn('telefono NO encontrado');
            }
          );

        }

        $scope.postear = ()=>{
             console.trace('formulario sumitado %o', $scope.formData );
             Phone.post($scope.formData).then( 
                function successCallback(response) {  
                  console.trace("Success");
                  $location.url('/phones');
                  self.clase="success";
                  self.texto="Movil insertado con exito";
                },
                function errorCallback(response) {
                  console.trace("error");
                  self.clase="danger";
                  self.texto="telefono no se pudo crear";
              }
            );
        } 

      
        
      }
    ]
  });
