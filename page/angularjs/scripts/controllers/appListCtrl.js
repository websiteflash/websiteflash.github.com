define(['../app', './silderCtrl'], function(app, silder){

  function appListCtrl($scope, $route, $location){

    var model = {};
    var action = {};

    model.page = {
      page:1,
      total:27,
      max:5
    };

    model.list = [
      {id:110, name: '测量仪', type: 'XYS-01', cdate: '2013/02/12', udate:'2013/02/12', state:'正常', user: '张三'},
      {id:111, name: '测量仪', type: 'XYS-01', cdate: '2013/02/12', udate:'2013/02/12', state:'正常', user: '张三'},
      {id:112, name: '测量仪', type: 'XYS-01', cdate: '2013/02/12', udate:'2013/02/12', state:'正常', user: '张三'},
      {id:113, name: '测量仪', type: 'XYS-01', cdate: '2013/02/12', udate:'2013/02/12', state:'正常', user: '张三'},
      {id:114, name: '测量仪', type: 'XYS-01', cdate: '2013/02/12', udate:'2013/02/12', state:'正常', user: '张三'},
      {id:115, name: '测量仪', type: 'XYS-01', cdate: '2013/02/12', udate:'2013/02/12', state:'正常', user: '张三'},
      {id:116, name: '测量仪', type: 'XYS-01', cdate: '2013/02/12', udate:'2013/02/12', state:'正常', user: '张三'}
    ];

    action.search = function(){

    };

    action.create = function(){
      $location.path('/app/create');
    };

    action.edit = function(id){
      $location.path('/app/edit/' + id);
    };

    action.assi = function(id){
      $location.path('/app/assi/' + id);
    };

    action.dele = function(id){
      console.log('delete id:' + id);
    };

    $scope.model = model;
    $scope.action = action;

    silder('app');
  }

  app.controller('appListCtrl', ['$scope', '$route', '$location', appListCtrl]);

});