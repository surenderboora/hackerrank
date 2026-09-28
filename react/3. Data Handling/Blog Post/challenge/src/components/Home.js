import React, { useState } from "react";
import Input from "./Input";
import PostDisplay from "./PostDisplay";

function Home() {
  const [posts, updatePosts] = useState([]);
  const [post, updatePost] = useState({ title: "", description: "" });

  const createPostClick = (e) => {
    e.preventDefault();
    // console.log("Existing Posts:", posts)
    // console.log("New Post:", post)
    if(post?.title.trim() === "") {
      return;
    }
    if(post?.description.trim() === "") {
      return;
    }
    // console.log("Creating Post:", post)
    updatePosts([...posts, {...post}]);
  };
  return (
    <div className="text-center ma-20">
      <div className="mb-20">
        <Input post={post} updatePost={updatePost}/>
        <button data-testid="create-button" className="mt-10" onClick={createPostClick}>
          Create Post
        </button>
      </div>
      <div className="posts-section" >
        <PostDisplay posts={posts}/>
      </div>
    </div>
  );
}

export default Home;
