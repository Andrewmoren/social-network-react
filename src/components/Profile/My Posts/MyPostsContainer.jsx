import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import StoreContext from "../../../storeContext";
import MyPost from "./MyPosts";

const MyPostsContainer = (props) => {
  // let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <StoreContext.Consumer>
      {(store) => (
        <MyPost
          updateNewPostText={onPostChange}
          addPost={addPost}
          posts={store.getState().profilePage.posts}
          newPostText={store.getState().profilePage.newPostText}
        />
      )}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
