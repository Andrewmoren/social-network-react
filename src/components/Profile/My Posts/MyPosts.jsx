import ms from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let postsData = [
    { id: 1, post: "Hi, how are you ?", likecount: 12 },
    { id: 2, post: "It's my firs post", likecount: 20 },
  ];

  let postElements = postsData.map((p) => {
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
