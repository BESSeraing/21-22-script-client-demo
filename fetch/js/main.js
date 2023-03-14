fetch("https://prof2.bes-webdeveloper-seraing.be/blog/back/api/blog_posts",
{
        headers: {
            'Accept': 'application/json'
        }
    }
)
.then((response) => {
    return response.json();
})
.then((blogPosts) => {
    for(let blogPost of blogPosts) {
        let div = document.createElement('div');
        div.innerText = blogPost.title;
        document.body.appendChild(div);
    }
});


