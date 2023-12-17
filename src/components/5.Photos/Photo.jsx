import React from "react";

const Photo = ({ photo }) => {
  const { id, title, url } = photo;

  return (
    <div className="photo">
      <h3>{id}</h3>
      <h4>Title: {title}</h4>
      <img src={url} alt="" />
    </div>
  );
};

export default Photo;
