(function() {
  'use strict'

angular.module('myFirstApp', [])
// angular object ti execute thing on it like module define our module takes a name
//for the app and list of dependesies ( we put a an empty array)
.controller('MyFirstController' , MyFirstController );
MyFirstController.$inject = ['$scope'];

function MyFirstController($scope) {

  $scope.name = "Amerah" ;

  $scope.SayHello = function() {

    return "hello everybody";
  };


}






})();
//IIFE no local variables bleed into the global scoop
// $scope var to share data betwwen viewmodel (index ) and view
// $scope is provided pay angularjs
