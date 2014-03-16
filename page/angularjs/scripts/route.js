define([
  'app',
  'controllers/settingCtrl',
  'controllers/appListCtrl',
  'controllers/appEditCtrl',
  'controllers/appAssiCtrl',
  'controllers/userListCtrl',
  'controllers/userEditCtrl',
  'controllers/userAuthCtrl',
  'controllers/dataListCtrl'
  ], function(app){

  app.config(['$routeProvider', function($routeProvider){

    $routeProvider.when('/', {
      controller: 'appListCtrl',
      templateUrl: 'views/app-list.html'
    });

    $routeProvider.when('/app/list', {
      controller: 'appListCtrl',
      templateUrl: 'views/app-list.html'
    });

    $routeProvider.when('/app/create', {
      controller: 'appEditCtrl',
      templateUrl: 'views/app-edit.html'
    });

    $routeProvider.when('/app/edit/:id', {
      controller: 'appEditCtrl',
      templateUrl: 'views/app-edit.html'
    });

    $routeProvider.when('/app/assi/:id', {
      controller: 'appAssiCtrl',
      templateUrl: 'views/app-assi.html'
    });

    $routeProvider.when('/user/auth/:id', {
      controller: 'userAuthCtrl',
      templateUrl: 'views/user-auth.html'
    });

    $routeProvider.when('/user/edit/:id', {
      controller: 'userEditCtrl',
      templateUrl: 'views/user-edit.html'
    });

    $routeProvider.when('/user/create', {
      controller: 'userEditCtrl',
      templateUrl: 'views/user-edit.html'
    });

    $routeProvider.when('/user/list', {
      controller: 'userListCtrl',
      templateUrl: 'views/user-list.html'
    });

    $routeProvider.when('/data/list', {
      controller: 'dataListCtrl',
      templateUrl: 'views/data-list.html'
    });

    $routeProvider.when('/setting', {
      controller: 'settingCtrl',
      templateUrl: 'views/setting.html'
    });

    $routeProvider.otherwise({
      redirectTo: '/'
    });

  }]);

});