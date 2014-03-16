require.config({
  baseUrl:'scripts',
  paths:{
    angular:'vendor/angular/angular',
    jquery:'vendor/jquery/jquery.min',
    twitter: 'vendor/bootstrap',
    'angular-route':'vendor/angular/angular-route.min',
    'angular-resource':'vendor/angular/angular-resource.min',
    'ui-bootstrap':'vendor/angular/ui-bootstrap-tpls-0.10.0.min'
  },
  shim:{
    angular: {
      deps:['jquery'],
      exports:'angular'
    },
    'angular-route':{
      deps:['angular']
    },
    'angular-resource':{
      deps:['angular']
    },
    'ui-bootstrap':{
      deps:['angular']
    }
  }
});

require(['app','jquery', 'angular', 'route'], function (app, $, angular) {

  $(function(){
    angular.bootstrap(document, ['CrmApp']);
  });

});