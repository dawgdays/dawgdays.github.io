app.controllers.blog = function ($http) {
    var blog = this;

    $http.get('/src/components/blog/blog.json').then(function (response) {
        blog.blogs = response.data.blogs;
    });
};
