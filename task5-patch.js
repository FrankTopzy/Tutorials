async function updatePost(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, 
    {
       method: "PATCH",
       headers: {
        "Content-Type" : "application/json"
       },
       body: JSON.stringify({
        title: "I am getting good at APIs"
       })
    }
  );

  if (!response.ok) {
    throw new Error("Update Failed");
  }

  const post = await response.json();
  return post;
}

updatePost(1).then((post) => {
  console.log(post);
})