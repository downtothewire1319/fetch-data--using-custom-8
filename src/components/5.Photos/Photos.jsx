import React from "react";
import useFetch from "./../../Hooks/useFetch";
import Photo from "./Photo";
import "./photos.css";
import { ErrorMesssge } from "./../Error/Error";
import { LoadingMesssge } from "./../Loading/Loading";
const Photos = () => {
  const { allData, isError, isLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/photos"
  );
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>4. Fetch Photos</h1>
      {isError && <ErrorMesssge messageName={isError.message} />}
      {isLoading && <LoadingMesssge messageName="Photos" />}
      <div className="photos">
        {allData.slice(0, 12).map((photo) => (
          <Photo key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default Photos;
