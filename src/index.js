import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let posts = [
  { id: 1, post: "Hi, how are you ?", likecount: 12 },
  { id: 2, post: "It's my firs post", likecount: 20 },
];

let dialogs = [
  { id: 1, name: "Andrew" },
  { id: 2, name: "Loli" },
  { id: 3, name: "Alex" },
  { id: 4, name: "Antony" },
];
let messages = [
  { id: 1, message: "Hi" },
  { id: 2, message: "How are you?" },
  { id: 3, message: "Yo!" },
  { id: 4, message: "Thaks" },
];

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>
);

reportWebVitals();
