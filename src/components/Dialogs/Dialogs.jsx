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

const Dialogs = (prop) => {
  return (
    <div className={d.dialogs}>
      <div className={d.dialogsItems}>
        <DialogItem name="Andrew" id="1" />
        <div className={d.dialog}>
          <NavLink to="/dialogs/2">Loli</NavLink>
        </div>
        <div className={d.dialog}>
          <NavLink to="/dialogs/3">Alex</NavLink>
        </div>
        <div className={d.dialog}>
          <NavLink to="/dialogs/4">Antony</NavLink>
        </div>
      </div>
      <div className={d.messages}>
        <div className={d.message}>Hi</div>
        <div className={d.message}>How are you?</div>
        <div className={d.message}>You</div>
      </div>
    </div>
  );
};

export default Dialogs;
