// Initialize the Angular module
app.angularApp = angular.module('app', ['app-routes', 'app-templates']);

//Register all controllers
app.angularApp.controller('MainController', [app.controllers.main]);
