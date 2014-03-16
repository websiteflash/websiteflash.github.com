define(['../app', './silderCtrl'], function(app, silder){

  function userListCtrl($scope, $route, $location){

    var model = {};
    var action = {};

    model.page = {
      page:1,
      total:27,
      max:5
    };

    model.list = [
      {count:'ZT-100001', name: '张三', sex: '男', tel: '13813812345', auth:'普通用户', date:'2014/03/15'},
      {count:'ZT-100001', name: '张三', sex: '男', tel: '13813812345', auth:'普通用户', date:'2014/03/15'},
      {count:'ZT-100001', name: '张三', sex: '男', tel: '13813812345', auth:'普通用户', date:'2014/03/15'},
      {count:'ZT-100001', name: '张三', sex: '男', tel: '13813812345', auth:'普通用户', date:'2014/03/15'},
      {count:'ZT-100001', name: '张三', sex: '男', tel: '13813812345', auth:'普通用户', date:'2014/03/15'},
      {count:'ZT-100001', name: '张三', sex: '男', tel: '13813812345', auth:'普通用户', date:'2014/03/15'},
      {count:'ZT-100001', name: '张三', sex: '男', tel: '13813812345', auth:'普通用户', date:'2014/03/15'}
    ];

    action.search = function(){

    };

    action.create = function(){
      $location.path('/user/create');
    };

    action.edit = function(id){
      $location.path('/user/edit/' + id);
    };

    action.auth = function(id){
      $location.path('/user/auth/' + id);
    };

    action.dele = function(id){
      console.log('delete id:' + id);
    };

    $scope.model = model;
    $scope.action = action;

    silder('user');
  }

  app.controller('userListCtrl', ['$scope', '$route', '$location', userListCtrl]);

});