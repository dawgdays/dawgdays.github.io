//HEAD 
(function(app) {
try { app = angular.module("app-templates"); }
catch(err) { app = angular.module("app-templates", []); }
app.run(["$templateCache", function($templateCache) {
"use strict";

$templateCache.put("/components/main/main.html","<div class=\"main\">\n" +
    "    <h1>Main!</h1>\n" +
    "\n" +
    "    {{main.test}}\n" +
    "</div>")

$templateCache.put("/components/menu/menu.html","<h1>Menu!</h1>")
}]);
})();