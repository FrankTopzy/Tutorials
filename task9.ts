type User = {
  id: number;
  name: string;
  email: string;
};

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  const data: T = await response.json();

  return data;
}

async function test() {
  const user = await fetchData<User>(
    "https://jsonplaceholder.typicode.com/users/1"
  );

  const posts = await fetchData<Post[]>(
    "https://jsonplaceholder.typicode.com/users/1/posts"
  );

  console.log(user);
  console.log(posts);
}

test();