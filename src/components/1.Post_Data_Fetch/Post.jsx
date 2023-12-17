import style from "./posts.module.css";
const Post = ({ post }) => {
  const { id, title, body } = post;
  return (
    <div className={style.post}>
      <h3>ID: {id}</h3>
      <h4>Title: {title}</h4>
      <p>Description: {body}</p>
    </div>
  );
};

export default Post;
