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
            // TODO - vvvvv DELETE THIS CODE FOR EXERCISE 3
            .state('contact', {
                url: '/contact',
                parent: 'default',
                views: {
                    'content@': {
                        templateUrl: '/components/contact/contact.html'
                    }
                }
            });
            // TODO - ^^^^ DELETE THIS CODE FOR EXERCISE 3
    }]);
