define(['../app'], function(app){

  var silder = null;
  var temp = 'app';

  function silderCtrl($scope, $route, $location){

    $scope.tab = temp;

    silder = $scope;

  }

  app.controller('silderCtrl', ['$scope', silderCtrl]);

  return function(tab){
    if(!silder){
      temp = tab;
    }else{
      silder.tab = tab;
    }
  }

});