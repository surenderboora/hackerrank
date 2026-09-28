import React, { useState } from "react";
import Input from "./Input";
import PostDisplay from "./PostDisplay";


const defaultPost = { title: "", description: "" };
function Home() {
  const [posts, updatePosts] = useState([]);
  const [post, updatePost] = useState({ ...defaultPost });

  const createPostClick = (e) => {
    e.preventDefault();
    console.log("Post:", post)
    if (post?.title.trim() === "") {
      return;
    }
    if (post?.description.trim() === "") {
      return;
    }
    console.log("All Posts:", posts)
    updatePosts([...posts, { ...post }]);
    updatePost({ ...defaultPost });
  };
  return (
    <div className="text-center ma-20">
      <div className="mb-20">
        <Input post={post} updatePost={updatePost} />
        <button data-testid="create-button" className="mt-10" onClick={createPostClick}>
          Create Post
        </button>
      </div>
      <div className="posts-section" >
        <PostDisplay posts={posts} updatePosts={updatePosts} />
      </div>
    </div>
  );
}

export default Home;
