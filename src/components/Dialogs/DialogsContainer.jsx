import React from "react";
import Dialogs from "./Dialogs";

import { updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import { sendMessageCreator } from "../../redux/dialogs-reducer";
import StoreContext from "../../StoreContext";
import { connect } from "react-redux/es/exports";

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().dialogsPage;

        let onSendMessageClick = () => {
          store.dispatch(sendMessageCreator());
        };

        let onNewMessageChange = (body) => {
          store.dispatch(updateNewMessageBodyCreator(body));
        };
        return (
          <Dialogs
            updateNewMessageBody={onNewMessageChange}
            sendMessag={onSendMessageClick}
            dialogsPage={state}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDispatchToProps = () => {
  return {};
};

const SuperDialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);

export default DialogsContainer;
