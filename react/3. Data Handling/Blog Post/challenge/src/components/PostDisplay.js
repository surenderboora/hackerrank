import React from "react";

function PostDisplay({ posts, updatePosts }) {

  const deletePost = (e, indexToRemove) => {
    e.preventDefault();

    const newList = posts.filter((_, index) => index !== indexToRemove);

    updatePosts([...newList]);
  }

  return (
    <div data-testid="posts-container" className="flex wrap gap-10">
      {posts.map((post, i) =>
        <div className="post-box">
          <h3>{post.title}</h3>
          <p>{post.description}</p>
          <button onClick={(e) => deletePost(e, i)}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default PostDisplay;
