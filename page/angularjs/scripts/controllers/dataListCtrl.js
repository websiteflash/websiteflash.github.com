define(['../app', './silderCtrl'], function(app, silder){

  function dataListCtrl($scope, $route, $location){

    var model = {};
    var action = {};

    model.page = {
      page:1,
      total:27,
      max:5
    };

    model.list = [
      {id:'D-110-1', name: '1号测量数据', type: 'XYS-01', cdate: '2013/02/12', udate:'2013/02/12', app:'水分测量仪', admin: '张三'},
      {id:'D-110-2', name: '2号测量数据', type: 'XYS-01', cdate: '2013/02/12', udate:'2013/02/12', app:'水分测量仪', admin: '张三'},
      {id:'D-110-3', name: '3号测量数据', type: 'XYS-01', cdate: '2013/02/12', udate:'2013/02/12', app:'水分测量仪', admin: '张三'},
      {id:'D-110-4', name: '4号测量数据', type: 'XYS-01', cdate: '2013/02/12', udate:'2013/02/12', app:'水分测量仪', admin: '张三'},
      {id:'D-110-5', name: '5号测量数据', type: 'XYS-01', cdate: '2013/02/12', udate:'2013/02/12', app:'水分测量仪', admin: '张三'},
      {id:'D-110-6', name: '6号测量数据', type: 'XYS-01', cdate: '2013/02/12', udate:'2013/02/12', app:'水分测量仪', admin: '张三'},
      {id:'D-110-7', name: '7号测量数据', type: 'XYS-01', cdate: '2013/02/12', udate:'2013/02/12', app:'水分测量仪', admin: '张三'}
    ];

    action.search = function(){

    };

    action.create = function(){
      // $location.path('/app/create');
    };

    action.edit = function(id){
      // $location.path('/app/edit/' + id);
    };

    action.view = function(id){
      // $location.path('/app/assi/' + id);
    };

    action.dele = function(id){
      console.log('delete id:' + id);
    };

    $scope.model = model;
    $scope.action = action;

    silder('data');
  }

  app.controller('dataListCtrl', ['$scope', '$route', '$location', dataListCtrl]);

});