const ul = document.createElement("ul");

fetch("https://jsonplaceholder.typicode.com/posts")
.then(function(response){
    return response.json();
})
.then(function (data){
    console.log(data);
    data.forEach(function(post){
        const li = document.createElement("li");
        li.innerHTML = post.title;
        ul.append(li);
    });
    document.body.append(ul);
});

console.log("siu");
