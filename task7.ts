type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

async function getPosts(userId: number): Promise<Post[]> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  const posts: Post[] = await response.json();
  return posts;
}