import React from "react";
import Input from "./Input";
import PostDisplay from "./PostDisplay";

function Home() {
  return (
    <div className="text-center ma-20">
      <div className="mb-20">
        <Input />
        <button data-testid="create-button" className="mt-10">
          Create Post
        </button>
      </div>
      <div className="posts-section">
        <PostDisplay />
      </div>
    </div>
  );
}

export default Home;
