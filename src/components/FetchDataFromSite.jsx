import React, { useState, useEffect } from "react";

import  axios  from 'axios';

function FetchDataFromSite() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
    .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res)
      .then((data) => setPosts(data));
  });

  return (
    <div>
      
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default FetchDataFromSite;
