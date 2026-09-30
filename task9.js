"use strict";
async function fetchData(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
    }
    const data = await response.json();
    return data;
}
async function test() {
    const user = await fetchData("https://jsonplaceholder.typicode.com/users/1");
    const posts = await fetchData("https://jsonplaceholder.typicode.com/users/1/posts");
    console.log(user);
    console.log(posts);
}
test();
