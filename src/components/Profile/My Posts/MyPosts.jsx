import React from "react";
import ms from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postElements = props.posts.map((p) => {
    return <Post message={p.post} likecount={p.likecount} />;
  });

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch({ type: "ADD-POST" });
  };

  let openPostChange = () => {
    let text = newPostElement.current.value;
    let action = { type: "UPDATE-NEW-POST-TEXT", newText: text };
    props.dispatch(action);
  };

  return (
    <div className={ms.postsDescription}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea
            onChange={openPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={ms.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
