const http = new eastHTTP;

// GET Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(posts);
//     }
// });

// Create Data
const data = {
    title: 'Custom Post',
    bosy: 'This is a custom post'
};

// Create post
// http.post('https://jsonplaceholder.typicode.com/posts', 
// data, function(err, post) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

// Update Post
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(post);
//             }
// });

// Delete post

http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response) {
    if(err) {
        console.log(err);
    } else {
        console.log(response);
    }
});
