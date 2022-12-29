import { useState, useEffect } from "react";

const FetchingDataHooks = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setPosts(data.slice(0, 10));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Fetching Data - Hooks</h2>
      <div>
        {posts.map(post => {
          return <div key={post.id}>{post.title}</div>;
        })}
      </div>
    </div>
  );
};

export default FetchingDataHooks;
