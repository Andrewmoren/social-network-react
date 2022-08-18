import React from "react";
import MyPost from "./MyPosts";
import Post from "./Post/Post";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";

const MyPostsContainer = (props) => {
  let postElements = props.posts.map((p) => {
    return <Post message={p.post} likecount={p.likecount} />;
  });

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let openPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  };

  return <MyPost updateNewPostText={openPostChange} addPost={addPost} />;
};

export default MyPostsContainer;
