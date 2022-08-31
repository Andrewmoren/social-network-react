import * as serviceWorker from "./serviceWorker";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/redux-store";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
let renderEntireTree = (state) => {
  root.render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  );
};

renderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  renderEntireTree(state);
});

reportWebVitals();
