const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

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
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 4,
        post: this._state.profilePage.newPostText,
        likecount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-MESSAGE-BODY") {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else if (action.type === "SEND-MESSAGE") {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = "";
      this.state.dialogsPage.messages.push({ id: 5, message: body });
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};
export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};
export const updateNewMessageBodyCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
  };
};

export default store;
