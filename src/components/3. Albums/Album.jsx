import React from "react";

const Album = ({ album }) => {
  return (
    <div className="album">
      <h3>ID: {album.id}</h3>
      <h2>Title: {album.title}</h2>
    </div>
  );
};

export default Album;
