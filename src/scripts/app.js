// Initialize the Angular module
app.angularApp = angular.module('app', ['app-routes', 'app-templates']);

//Register all controllers
app.angularApp.controller('BlogController', ['$http', app.controllers.blog]);
app.angularApp.controller('MainController', [app.controllers.main]);
app.angularApp.controller('MenuController', ['$state', app.controllers.menu]);

