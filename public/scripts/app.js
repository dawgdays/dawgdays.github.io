"use strict";

var app = app || {};
app.controllers = app.controllers || {};

app.controllers.blog = function ($http) {
    var blog = this;
    console.log('blog!');

    $http.get('/src/components/blog/blog.json').then(function(res){
        blog.blogs = res.data.blogs;
    });
};

app.controllers.main = function () {
    var main = this;
    console.log('main!');

    main.test = "test";
};


angular.module('app-routes', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', '$urlMatcherFactoryProvider', function ($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {

        //https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions#how-to-make-a-trailing-slash-optional-for-all-routes
        $urlMatcherFactoryProvider.strictMode(false);

        $urlRouterProvider.when('', '/main');
        $urlRouterProvider.otherwise('/main');
        $stateProvider
            .state('default', {
                abstract: true,
                views: {
                    'menu': {
                        templateUrl: '/components/menu/menu.html'
                    }
                }
            })
            .state('main', {
                url: '/main',
                parent: 'default',
                views: {
                    'content@': {
                        templateUrl: '/components/main/main.html',
                        controller: 'MainController',
                        controllerAs: 'main'
                    }
                }
            })
            .state('blog', {
                url: '/blog',
                parent: 'default',
                views: {
                    'content@': {
                        templateUrl: '/components/blog/blog.html',
                        controller: 'BlogController',
                        controllerAs: 'blog'
                    }
                }
            })
            .state('contact', {
                url: '/contact',
                parent: 'default',
                views: {
                    'content@': {
                        templateUrl: '/components/contact/contact.html'
                    }
                }
            });
    }]);

// Initialize the Angular module
app.angularApp = angular.module('app', ['app-routes', 'app-templates']);

//Register all controllers
app.angularApp.controller('BlogController', ['$http', app.controllers.blog]);
app.angularApp.controller('MainController', [app.controllers.main]);

