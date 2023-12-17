import Comments from "../../components/2.Comments_Data_Fetch/Comments";
import Albums from "../../components/3. Albums/Albums";
import Posts from "../../components/1.Post_Data_Fetch/Posts";

import Todos from "../../components/4.Todos/Todos";

import Photos from "../../components/5.Photos/Photos";
import Users from "../../components/6. Users/Users";
import "./home.css";
const Home = () => {
  return (
    <div className="container">
      <Posts />
      <Comments />
      <Albums />
      <Photos />

      <Todos />
      <Users />
    </div>
  );
};

export default Home;
