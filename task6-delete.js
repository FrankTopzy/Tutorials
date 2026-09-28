async function deletePost(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, 
    {
      method: "DELETE"
    }
  );

  if (!response.ok) {
    throw new Error(`Delete failed: ${response.status}`);
  }

  return "Post deleted successfully";
}

deletePost(1).then((post) => {
  console.log(post);
});