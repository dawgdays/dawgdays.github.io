// Initialize the Angular module
app.angularApp = angular.module('app', ['app-routes']);

//Register all controllers
app.angularApp.controller('MainController', [app.controllers.main]);
