import React from "react";

const User = ({ user }) => {
  const { id, name, username, email } = user;
  return (
    <div className="user">
      <h3>UserID: {id}</h3>
      <h2>Name: {name}</h2>
      <h4>UserName: {username}</h4>
      <p>Email: {email}</p>
    </div>
  );
};

export default User;
