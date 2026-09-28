import React, { useState } from "react";

async function getUserAndPosts(id) {
  const [userResponse, postsResponse] = await Promise.all([
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`),
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
  ]);

  if (userResponse.status === 404) {
    throw new Error("User not found.");
  }

  if (!userResponse.ok) {
    throw new Error(`User request failed: ${userResponse.status}`);
  }

  if (!postsResponse.ok) {
    throw new Error(`Posts request failed: ${postsResponse.status}`);
  }

  const user = await userResponse.json();
  const posts = await postsResponse.json();

  return {
    user,
    posts
  };
}

const App = () => {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState(null)

  async function searchUser() {
    if (!userId.trim()) {
      setError("Please enter a user ID");
      return;
    }

    if (isNaN(Number(userId))) {
      setError("User ID must be a number");
      return;
    }

    setLoading(true);
    setError(null);
    setUser(null);
    setPosts(null);

    try {
      const { user, posts } = await getUserAndPosts(userId);

      setUser(user);
      setPosts(posts)

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="Enter user ID"
      />

      <button onClick={searchUser}>
        Search
      </button>

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {user && (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
          <p>Posts: {posts.length}</p>
        </div>
      )}
    </div>
  );
};

export default App;