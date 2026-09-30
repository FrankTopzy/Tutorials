"use strict";
async function getPosts(userId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
    if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
    }
    const posts = await response.json();
    return posts;
}
