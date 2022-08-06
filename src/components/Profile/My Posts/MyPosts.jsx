import ms from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postElements = props.posts.map((p) => {
    return <Post message={p.post} likecount={p.likecount} />;
  });

  return (
    <div className={ms.postsDescription}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={ms.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
