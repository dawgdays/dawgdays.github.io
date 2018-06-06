app.controllers.blog = function ($http) {
    var blog = this;
    console.log('blog!');

    $http.get('/src/components/blog/blog.json').then(function(res){
        blog.blogs = res.data.blogs;
    });
};
