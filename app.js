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
http.post('https://jsonplaceholder.typicode.com/posts', 
data, function(err, post) {
    if(err) {
        console.log(err);
    } else {
        console.log(post);
    }
});
