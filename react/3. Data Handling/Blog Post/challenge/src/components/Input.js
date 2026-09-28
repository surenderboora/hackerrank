import React from "react";

function Input({ post, updatePost }) {

  const onFieldChange = (e, field) => {
    e.preventDefault();
    // uncomment the below line to see the field and value in console
    // console.log(field, e.target.value);
    updatePost({
      ...post,
      [field]: e.target.value
    });
  };

  return (
    <div className="layout-column justify-content-center align-items-center">
      <input 
        className="w-100" 
        type="text" 
        placeholder="Enter Title"
        value={post.title}
        data-testid="title-input"
        onChange={(e) => onFieldChange(e, "title")} 
        />
      <textarea
        className="mt-10 w-100"
        placeholder="Enter Description"
        value={post.description}
        data-testid="description-input"
        onChange={(e) => onFieldChange(e, "description")}
      />
    </div>
  );
}

export default Input;