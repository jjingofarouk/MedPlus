import React from 'react';

const PostForm = ({ formData, handleChange, handleSubmit, errors }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label><br />
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          size="100"
        /><br />
        {errors.title && <span className="error">{errors.title}</span>}
      </div>
      <div>
        <label htmlFor="content">Content:</label><br />
        <textarea
          id="content"
          name="content"
          rows="10"
          value={formData.content}
          onChange={handleChange}
        /><br />
        {errors.content && <span className="error">{errors.content}</span>}
      </div>
      <button type="submit">Post</button>
    </form>
  );
};

export default PostForm;
