import React from "react";

function PostDisplay({ posts }) {


  return (
    <div data-testid="posts-container" className="flex wrap gap-10">
      {posts?.map((post) =>
        <div className="post-box">
          <h3>{post.title}</h3>
          <p>{post.description}</p>
          <button>Delete</button>
        </div>
      )}
    </div>
  );
}

export default PostDisplay;
