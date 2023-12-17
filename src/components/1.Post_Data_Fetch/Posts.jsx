import useFetch from "../../Hooks/useFetch";
import style from "./posts.module.css";
import Post from "./Post";
import { LoadingMesssge } from "./../Loading/Loading";
import { ErrorMesssge } from "../Error/Error";

const Posts = () => {
  const { allData, isError, isLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>1.Fetch Posts</h1>
      {isLoading && <LoadingMesssge messageName="Posts" />}
      {isError && <ErrorMesssge messageName={isError.message} />}
      <div className={style.posts}>
        {allData &&
          allData
            .slice(0, 12)
            .map((post) => <Post key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default Posts;
