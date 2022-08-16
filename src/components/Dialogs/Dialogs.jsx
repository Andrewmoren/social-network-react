import React from "react";
import s from "./Dialogs.module.css";
import { updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import { sendMessageCreator } from "../../redux/dialogs-reducer";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
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

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElement}</div>
      <div className={s.messages}>
        <div>{messageElements}</div>
      </div>
      <div>
        <div>
          <textarea
            value={newMessageBody}
            onChange={onNewMessageChange}
            placeholder="Enter your message"
          ></textarea>
        </div>
        <div>
          <button onClick={onSendMessageClick}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
