import React from "react";
import useFetch from "../../Hooks/useFetch";
import "./albums.css";
import Album from "./Album";
import { ErrorMesssge } from "../Error/Error";
import { LoadingMesssge } from "../Loading/Loading";
const Albums = () => {
  const { allData, isError, isLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/albums"
  );
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>3.Fetch Albums</h1>
      {isError && <ErrorMesssge messageName={isError.message} />}
      {isLoading && <LoadingMesssge messageName="Albums" />}
      <div className="albums">
        {allData.slice(0, 12).map((album) => (
          <Album key={album.id} album={album} />
        ))}
      </div>
    </div>
  );
};

export default Albums;
