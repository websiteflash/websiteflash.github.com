define(['../app', './silderCtrl'], function(app, silder){

  function userEditCtrl($scope, $route, $location){

    var model = {};
    var action = {};

    var _id = $route.current.params.id;
    var _isNew = !_id;

    if(_isNew){
      model.subtitle = '创建用户帐号';
      model.user = {};
    }else{
      model.subtitle = '编辑用户信息';
      model.user = {count:'ZT-100001', name: '张三', sex: '男', tel: '13813812345', auth:'普通用户', date:'2014/03/15'};
    }

    action.back = function(){
      $location.path('/user/list');
    };

    action.submit = function(){

    };

    $scope.model = model;
    $scope.action = action;

    silder('user');
  }

  app.controller('userEditCtrl', ['$scope', '$route', '$location', userEditCtrl]);

});