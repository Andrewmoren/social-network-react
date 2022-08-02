import d from "./Dialogs.module.css";

const Dialogs = (prop) => {
  return (
    <div className={d.dialogs}>
      <div className={d.dialogsItems}>
        <div className={d.dialog + " " + d.active}>Andrew</div>
        <div className={d.dialog}>Loli</div>
        <div className={d.dialog}>Alex</div>
        <div className={d.dialog}>Antony</div>
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
