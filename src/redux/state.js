import { renderEntireTree } from "../render";

let state = {
  profilePage: {
    posts: [
      { id: 1, post: "Hi, how are you ?", likecount: 12 },
      { id: 2, post: "It's my firs post", likecount: 20 },
      { id: 3, post: "You are good!", likecount: 10 },
    ],
  },
  dialogsPage: {
    messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How are you?" },
      { id: 3, message: "Yo!" },
      { id: 4, message: "Thaks" },
    ],
    dialogs: [
      { id: 1, name: "Andrew" },
      { id: 2, name: "Loli" },
      { id: 3, name: "Alex" },
      { id: 4, name: "Antony" },
    ],
  },
};

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    post: postMessage,
    likecount: 0,
  };
  state.profilePage.posts.push(newPost);
  renderEntireTree(state);
};

export default state;