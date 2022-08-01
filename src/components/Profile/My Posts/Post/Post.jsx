import post from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={post.item}>
      <img src="https://media.internazionale.it/images/2016/02/04/120867-sd.jpg" />
      {props.message}
      <div>
        <span>Like: {props.likecount}</span>
      </div>
    </div>
  );
};

export default Post;
