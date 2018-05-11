"use strict";

var app = app || {};
app.controllers = app.controllers || {};

app.controllers.main = function () {
    var main = this;
    console.log('main!');
};

// Initialize the Angular module
app.angularApp = angular.module('app', ['app-routes']);

//Register all controllers
app.angularApp.controller('MainController', [app.controllers.main]);
