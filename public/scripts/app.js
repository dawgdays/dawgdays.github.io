"use strict";

var app = app || {};
app.controllers = app.controllers || {};

app.controllers.blog = function () {
    var blog = this;

    /**
     * Exercise 4 - Make an http request to the blog json, you should be able to see it in Chrome DevTools
     */
};

app.controllers.main = function () {
    var main = this;

    main.test = 'This data is rendered via the main controller';
};

app.controllers.menu = function ($state) {
    var menu = this;

    menu.getCurrentState = function () {
        return $state.current.name;
    };
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
                        templateUrl: '/components/menu/menu.html',
                        controller: 'MenuController',
                        controllerAs: 'menu'
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
            /**
             * Exercise 3 - Setup a state for the contact page, http://localhost:3000/#/contact should work if this is done successfully
             */
    }]);

// Initialize the Angular module
app.angularApp = angular.module('app', ['app-routes', 'app-templates']);

//Register all controllers
app.angularApp.controller('BlogController', [app.controllers.blog]);
app.angularApp.controller('MainController', [app.controllers.main]);
app.angularApp.controller('MenuController', ['$state', app.controllers.menu]);

