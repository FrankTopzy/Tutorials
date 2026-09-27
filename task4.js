async function createPost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", 
    {
      method: 'POST',
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        title: "Learning APIs",
        body: "I understand async JavaScript",
        userId: 1,
      })
    }
  );

  if(!response.ok) {
    throw new Error('Failed Request')
  }

  const post = await response.json();

  return post;
}

createPost().then((post) => {
  console.log(post);
})