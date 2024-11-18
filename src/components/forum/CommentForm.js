import React from 'react';

const CommentForm = ({ commentData, handleCommentChange, handleCommentSubmit, errors }) => {
  return (
    <form onSubmit={handleCommentSubmit}>
      <div>
        <label htmlFor="content">Comment:</label><br />
        <textarea
          id="content"
          name="content"
          rows="5"
          value={commentData.content}
          onChange={handleCommentChange}
        /><br />
        {errors.content && <span className="error">{errors.content}</span>}
      </div>
      <button type="submit">Submit Comment</button>
    </form>
  );
};

export default CommentForm;
