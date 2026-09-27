async function deletePost(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, 
    {
      method: "DELETE"
    }
  );

  const post = await response.json();

  return post;
}

deletePost(1).then((post) => {
  console.log(post);
});