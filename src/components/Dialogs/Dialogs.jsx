import React from "react";
import s from "./Dialogs.module.css";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElement = props.state.dialogs.map((d) => {
    return <DialogItem name={d.name} id={d.id} />;
  });

  let messageElements = props.state.messages.map((m) => {
    return <Message message={m.message} />;
  });

  let addNewMessage = React.createRef();

  let addMessage = () => {
    let text = addNewMessage.current.value;
    alert(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElement}</div>
      <div className={s.messages}>{messageElements}</div>
      <div>
        <div>
          <textarea ref={addNewMessage}></textarea>
        </div>
        <div>
          <button onClick={addMessage}>Add message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
