import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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
      newMessageBody: "",
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log("State is changed");
  },
  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
