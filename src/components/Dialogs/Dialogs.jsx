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

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElement}</div>
      <div className={s.messages}>{messageElements}</div>
    </div>
  );
};

export default Dialogs;
