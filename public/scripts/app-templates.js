//HEAD 
(function(app) {
try { app = angular.module("app-templates"); }
catch(err) { app = angular.module("app-templates", []); }
app.run(["$templateCache", function($templateCache) {
"use strict";

$templateCache.put("/components/main/main.html","<div class=\"main-content\">\n" +
    "    <h1>Main</h1>\n" +
    "    <p>Welcome to my site, put some basic info here!</p>\n" +
    "\n" +
    "    {{main.test}}\n" +
    "</div>")

$templateCache.put("/components/menu/menu.html","<div class=\"menu-content\">\n" +
    "\n" +
    "    <!-- todo: make a collapsed version of the menu for mobile view -->\n" +
    "\n" +
    "    <div class=\"profile-pic\">\n" +
    "        <img src=\"/public/images/verty.png\">\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- todo: toggle 'active' class based on current state-->\n" +
    "    <div class=\"menu-item active\" ui-sref=\"main\">\n" +
    "        <a ui-sref=\"main\"><i class=\"fa fa-home\"></i>Home</a>\n" +
    "    </div>\n" +
    "    <div class=\"menu-item\">\n" +
    "        <a ui-sref=\"blog\"><i class=\"fa fa-book\"></i>Blog</a>\n" +
    "    </div>\n" +
    "    <div class=\"menu-item\" ui-sref=\"contact\">\n" +
    "        <a ui-sref=\"contact\"><i class=\"fa fa-phone\"></i>Contact</a>\n" +
    "    </div>\n" +
    "</div>")
}]);
})();