import React from "react";
import useFetch from "../../Hooks/useFetch";
import Comment from "./Comment";
import { LoadingMesssge } from "../Loading/Loading";
import { ErrorMesssge } from "../Error/Error";
import "./comments.css";
const Comments = () => {
  const { allData, isError, isLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/comments"
  );

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>2. Fetch Comments</h1>
      {isLoading && <LoadingMesssge messageName="Comments" />}
      {isError && <ErrorMesssge messageName={isError.message} />}
      <div className="comments">
        {allData.slice(0, 12).map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
