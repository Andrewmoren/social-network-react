import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Dialogs = (props) => {
  let state = props.dialogsPage;
  let dialogsElement = state.dialogs.map((d) => {
    return <DialogItem name={d.name} key={d.id} id={d.id} />;
  });

  let messageElements = state.messages.map((m) => {
    return <Message message={m.message} key={m.id} />;
  });

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  let navigate = useNavigate();
  useEffect(() => {
    if (props.isAuth === false) {
      return navigate("../login");
    }
  }, [props.isAuth]);
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
