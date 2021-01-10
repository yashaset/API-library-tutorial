const http = new easyHTTP;

// http.get('https://jsonplaceholder.typicode.com/posts', function (err, posts) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(posts);

//     }
// });



const data = {
    title: "custom post",
    body: "This is a custom post"
};

// http.post('https://jsonplaceholder.typicode.com/posts', data, function (e, post) {
//     if (e) {
//         console.log(e);
//     } else {
//         console.log(post);

//     }
// })

// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function (e, post) {
//     if (e) {
//         console.log(e);
//     } else {
//         console.log(post);

//     }
// })


http.delete('https://jsonplaceholder.typicode.com/posts/1', function (err, response) {
    if (err) {
        console.log(err);
    } else {
        console.log(response);

    }
});
