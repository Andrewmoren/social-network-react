let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, post: "Hi, how are you ?", likecount: 12 },
        { id: 2, post: "It's my firs post", likecount: 20 },
        { id: 3, post: "You are good!", likecount: 10 },
      ],
      newPostText: "it-kamasutra",
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
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("State is changed");
  },
  addPost() {
    let newPost = {
      id: 4,
      post: this._state.profilePage.newPostText,
      likecount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;
