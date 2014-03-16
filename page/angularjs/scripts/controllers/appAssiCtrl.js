define(['../app', './silderCtrl'], function(app, silder){

  function appAssiCtrl($scope, $route, $location){

    var model = {};
    var action = {};

    model.subtitle = '分配仪器';
    model.app = {id:116, name: '测量仪', type: 'XYS-01', cdate: '2013/02/12', udate:'2013/02/12', state:'正常', user: '张三'};


    action.back = function(){
      $location.path('/app/list');
    };

    action.submit = function(){

    };

    $scope.model = model;
    $scope.action = action;

    silder('app');
  }

  app.controller('appAssiCtrl', ['$scope', '$route', '$location', appAssiCtrl]);

});