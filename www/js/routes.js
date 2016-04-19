angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider


    .state('index', {
      url: '/index',
      templateUrl: 'templates/index.html'
    })



    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html'
    })





    .state('signup', {
      url: '/signup',
      templateUrl: 'templates/signup.html'
    })




    .state('menu', {
      url: '/side-menu22',
      abstract:true,
      templateUrl: 'templates/menu.html'
    })




    .state('menu.collections', {
      url: '/collections',
      views: {
        'side-menu22': {
          templateUrl: 'templates/collections.html'
        }
      }
    })





    .state('menu.profile', {
      url: '/page9',
      views: {
        'side-menu22': {
          templateUrl: 'templates/profile.html'
        }
      }
    })





    .state('menu.addNewItem', {
      url: '/page11',
      views: {
        'side-menu22': {
          templateUrl: 'templates/addNewItem.html'
        }
      }
    })


    ;

  // if none of the above states are matched, use this as the fallback

  $urlRouterProvider.otherwise('/index');




});