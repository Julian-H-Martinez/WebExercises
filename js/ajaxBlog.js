(function(){
    "use strict";

    const blogs = $.ajax('data/blog.json');
    let posts = $('#posts');

    //<div class="row">
    //   <div class="col-sm-6">
    //   </div>
    //   <div class="col-sm-6">
    //   </div>
    // </div>
    function showBlog(blog){
        return (
            '<div class="card" style="width: 18rem;">'
            + '<div class="card-body">'
            + '<h5 class="card-title">' + blog.title + '</h5>'
            + '<h6 class="card-subtitle mb-2 text-muted">' + blog.date + '</h6>'
            + '<p class="card-text">' + blog.content + '</p>'
            + '<p class="card-text">' + blog.categories + '</p>'
            + '</div></div>'
        )
    }

    function onSuccess(blogs){
        let displayBlog = '';
        blogs.forEach(function(blog){
            displayBlog += showBlog(blog);
        })
        posts.append(displayBlog);
    }

    blogs
        .success(onSuccess);
})();