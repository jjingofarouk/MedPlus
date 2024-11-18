import React from 'react';

const CommentList = ({ comments }) => {
  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>
          <p>{comment.content}</p>
          <p>Commented by {comment.user.username} on {new Date(comment.created_at).toLocaleString()}</p>
        </li>
      ))}
    </ul>
  );
};

export default CommentList;
