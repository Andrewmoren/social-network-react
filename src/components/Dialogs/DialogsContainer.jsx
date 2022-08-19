import React from "react";

import { updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import { sendMessageCreator } from "../../redux/dialogs-reducer";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage;
  let dialogsElement = state.dialogs.map((d) => {
    return <DialogItem name={d.name} id={d.id} />;
  });

  let messageElements = state.messages.map((m) => {
    return <Message message={m.message} />;
  });

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = (body) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return <Dialogs updateNewMessageBody={onNewMessageChange} />;
};

export default DialogsContainer;
