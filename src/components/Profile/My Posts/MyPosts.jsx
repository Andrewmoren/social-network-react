import ms from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
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
      <div className={ms.posts}>
        <Post message="Hi, how are you ?" likecount="10" />
        <Post message="It's my firs post" likecount="20" />
      </div>
    </div>
  );
};

export default MyPosts;
