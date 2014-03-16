define(['../app', './silderCtrl'], function(app, silder){

  function userAuthCtrl($scope, $route, $location){
    var model = {};
    var action = {};

    model.user = {
      name: '张三',
      count: 'ZT-100001',
      auth: 2
    }

    model.auths = [
      {key:1, name:'系统管理员', desc: '拥有所有角色的权限'},
      {key:2, name:'用户管理员', desc: '可以新增用户、编辑用户帐号、删除用户以及分配用户权限'},
      {key:3, name:'仪器管理员', desc: '可以增加仪器、编辑仪器信息、分配仪器'},
      {key:4, name:'数据操作员', desc: '可以录入数据、编辑数据'},
      {key:5, name:'普通用户', desc: '可以浏览数据和仪器基本信息'}
    ];

    model.select = '系统管理员';

    action.back = function(){
      $location.path('/user/list');
    };

    action.submit = function(){
      console.log(model.select);
    };

    $scope.model = model;
    $scope.action = action;

    silder('user');
  }

  app.controller('userAuthCtrl', ['$scope','$route','$location', userAuthCtrl]);

});