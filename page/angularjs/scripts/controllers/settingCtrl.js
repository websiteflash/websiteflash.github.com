define(['../app', './silderCtrl'], function(app, silder){

  function settingCtrl($scope, $route, $location){

    var model = {};
    var action = {};

    $scope.model = model;
    $scope.action = action;

    silder('setting');

  }

  app.controller('settingCtrl', ['$scope', '$route', '$location', settingCtrl]);

});