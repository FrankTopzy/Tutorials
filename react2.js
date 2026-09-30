import React, { useState } from "react";

const postContent = async (titleContent) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", 
    {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        title: titleContent,
        body: "I understand async JavaScript",
        userId: 1,
      })
    }
  )

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  const post = await response.json();
  return post;
}

const updatePost = async (titleContent) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/1`, 
    {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        title: titleContent
      })
    }
  )

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  const post = await response.json();
  return post;
}

const deletePost = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/1`, 
    {
      method: "DELETE",
    }
  )

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return "Post deleted Successfully";
}

const App = () => {
  const [post, setPost] = useState(null);
  const [postTitle, setPostTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");

  async function searchPost(action) {
    if (action !== "delete" && !postTitle.trim()) {
      setError("Please enter a post title");
      return;
    }
  
    setLoading(true);
    setError(null);
    setPost(null);
    setMessage("");
  
    try {
      if (action === "delete") {
        const message = await deletePost();
        setMessage(message);
        return;
      }
  
      const result =
        action === "post"
          ? await postContent(postTitle)
          : await updatePost(postTitle);
  
      setPost(result);
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
        value={postTitle}
        onChange={(e) => setPostTitle(e.target.value)}
        placeholder="Enter post title"
      />

      <button onClick={() => searchPost('post')}>
        Post
      </button>
      <button onClick={() => searchPost('update')}>
        Update
      </button>
      <button onClick={() => searchPost('delete')}>
        Delete
      </button>
      

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {post && (
        <div>
          <p>id: {post.id}</p>
          <p>Title: {post.title}</p>
          <p>Body: {post.body}</p>
        </div>
      )}

      {message && <p>{message}</p>}
    </div>
  );
};

export default App;