import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import StoreContext from "../../../StoreContext";
import MyPost from "./MyPosts";
import { connect } from "react-redux/es/exports";

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        let addPost = () => {
          store.dispatch(addPostActionCreator());
        };

        let onPostChange = (text) => {
          let action = updateNewPostTextActionCreator(text);
          store.dispatch(action);
        };

        return (
          <MyPost
            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

let mapStateToProps = (state) => {
  return {
    posts: profilePage.posts,
    newPostText: profilePage.newPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

const SuperMyPostContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPost);

export default MyPostsContainer;
