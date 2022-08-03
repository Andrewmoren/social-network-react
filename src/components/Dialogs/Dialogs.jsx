import d from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={d.dialog + " " + d.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={d.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={d.dialogs}>
      <div className={d.dialogsItems}>
        <DialogItem name="Andrew" id="1" />
        <DialogItem name="Loli" id="2" />
        <DialogItem name="Alex" id="3" />
        <DialogItem name="Antony" id="4" />
      </div>
      <div className={d.messages}>
        <Message message="Hi" />
        <Message message="How are you?" />
        <Message message="Yo!" />
      </div>
    </div>
  );
};

export default Dialogs;
