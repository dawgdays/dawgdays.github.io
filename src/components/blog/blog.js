app.controllers.blog = function ($http) {
    var blog = this;

    /**
     * Exercise 4 - Make an http request to the blog json, you should be able to see it in Chrome DevTools
     */
    $http.get('/src/components/blog/blog.json').then(function (response) {
        blog.blogs = response.data.blogs;
    });

    /**
     * Exercise 5 - Take the data from the request in Exercise 4 and render it on the page
     */
};
