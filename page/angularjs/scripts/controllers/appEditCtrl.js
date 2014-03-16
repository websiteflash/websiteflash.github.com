define(['../app', './silderCtrl'], function(app, silder){

  function appEditCtrl($scope, $route, $location){

    var model = {};
    var action = {};

    var _id = $route.current.params.id;
    var _isNew = !_id;

    if(_isNew){
      model.subtitle = '增加仪器';
      model.app = {state: '正常'};
    }else{
      model.subtitle = '编辑仪器信息';
      model.app = {id:116, name: '测量仪', type: 'XYS-01', cdate: '2013/02/12', udate:'2013/02/12', state:'正常', user: '张三'};
    }

    action.back = function(){
      $location.path('/app/list');
    };

    action.submit = function(){

    };

    $scope.model = model;
    $scope.action = action;

    silder('app');
  }

  app.controller('appEditCtrl', ['$scope', '$route', '$location', appEditCtrl]);

});