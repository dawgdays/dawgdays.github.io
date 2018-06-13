//HEAD 
(function(app) {
try { app = angular.module("app-templates"); }
catch(err) { app = angular.module("app-templates", []); }
app.run(["$templateCache", function($templateCache) {
"use strict";

$templateCache.put("/components/contact/contact.html","<div class=\"contact\">\n" +
    "    <h1>Contact</h1>\n" +
    "\n" +
    "    <div class=\"contact-content\">\n" +
    "        <div class=\"contact-item phone\">\n" +
    "            <div class=\"label\">Mobile</div>\n" +
    "            <div class=\"value\"><a href=\"tel:1-555-555-5555\">555-555-5555</a></div>\n" +
    "        </div>\n" +
    "    \n" +
    "        <div class=\"contact-item email\">\n" +
    "            <div class=\"label\">Email</div>\n" +
    "            <div class=\"value\"><a href=\"mailto:verty@vertafore.com\">verty@vertafore.com</a></div>\n" +
    "        </div>\n" +
    "        \n" +
    "        <div class=\"contact-item address\">\n" +
    "            <div class=\"label\">Address</div>\n" +
    "            <div class=\"value\">\n" +
    "                <div>1500 Abbot Rd</div>\n" +
    "                <div>Suite 100</div>\n" +
    "                <div>East Lansing, MI 48823</div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"contact-item\">\n" +
    "            <div class=\"label\">Fax</div>\n" +
    "            <div class=\"value\">What year is it?</div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "</div>")

$templateCache.put("/components/blog/blog.html","<div class=\"blog\">\n" +
    "    <h1>Blog</h1>\n" +
    "\n" +
    "    <div ng-repeat=\"blogRow in blog.blogs | orderBy:'-date'\">\n" +
    "        <img ng-src=\"{{blogRow.picture}}\">\n" +
    "        <h2>{{blogRow.title}} ({{blogRow.date | date : 'MM/dd/yyyy'}})</h2>\n" +
    "        <p>{{blogRow.content}}</p>\n" +
    "    </div>\n" +
    "</div>")

$templateCache.put("/components/main/main.html","<div class=\"main\">\n" +
    "    <h1>Main</h1>\n" +
    "    <p>Hi, I'm Verty! I've worked at Vertafore for as long as I can remember. We sure have been through a lot together.</p>\n" +
    "\n" +
    "    <p>Remember that time we went to the Olympics together?</p>\n" +
    "    <p>\n" +
    "        <img src=\"/public/images/olympic_verty.png\" style=\"width: 250px;\">\n" +
    "    </p>\n" +
    "\n" +
    "    <p>\n" +
    "        While you're here, feel free to check out the <a href=\"https://docs.google.com/presentation/d/1lWP-ErBNwXinTsqsIn3O3P58MKjWbLe4JAMQmCAjtpY/edit?usp=sharing\" target=\"_blank\">Slides</a> I made for you!\n" +
    "    </p>\n" +
    "\n" +
    "    {{main.test}}\n" +
    "</div>")

$templateCache.put("/components/menu/menu.html","<div class=\"menu-content\">\n" +
    "    \n" +
    "    <div class=\"profile-pic\">\n" +
    "        <img src=\"/public/images/verty.png\">\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"menu-item\" ng-class=\"{'active': menu.getCurrentState() === 'main'}\">\n" +
    "        <a ui-sref=\"main\"><i class=\"fa fa-home\"></i>Home</a>\n" +
    "    </div>\n" +
    "    <div class=\"menu-item\" ng-class=\"{'active': menu.getCurrentState() === 'blog'}\">\n" +
    "        <a ui-sref=\"blog\"><i class=\"fa fa-book\"></i>Blog</a>\n" +
    "    </div>\n" +
    "    <div class=\"menu-item\" ng-class=\"{'active': menu.getCurrentState() === 'contact'}\">\n" +
    "        <a ui-sref=\"contact\"><i class=\"fa fa-phone\"></i>Contact</a>\n" +
    "    </div>\n" +
    "</div>")
}]);
})();