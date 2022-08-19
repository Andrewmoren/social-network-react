import React from "react";
import Dialogs from "./Dialogs";

import { updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import { sendMessageCreator } from "../../redux/dialogs-reducer";

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <Dialogs
      updateNewMessageBody={onNewMessageChange}
      sendMessag={onSendMessageClick}
      dialogsPage={state}
    />
  );
};

export default DialogsContainer;
