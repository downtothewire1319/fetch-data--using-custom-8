import React from "react";

const Comment = ({ comment }) => {
  const { id, name, email, body } = comment;
  return (
    <div className="comment">
      <h3>{id}</h3>
      <h4>Comment: {name}</h4>
      <p>Email: {email}</p>
      <p>Description: {body}</p>
    </div>
  );
};

export default Comment;
