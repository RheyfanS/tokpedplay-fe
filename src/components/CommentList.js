// src/components/CommentList.js
import React from 'react';

const CommentList = ({ comments }) => {
  return (
    <div className="comment-list">
      <h2>Comments</h2>
      {comments.map(comment => (
        <div key={comment._id} className="comment">
          <p>{comment.username}</p>
          <p>{comment.comment}</p>
          <p>{comment.timestamp}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
