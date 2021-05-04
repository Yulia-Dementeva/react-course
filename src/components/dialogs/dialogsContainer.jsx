import React from 'react';
import {sendMessageCreator} from "../../redux/dialogs-reducer";
import {updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsReducer

    let addMessage = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <Dialogs updateNewMessageBody={onNewMessageChange}
        sendMessage={addMessage}
                 dialogsPage={state}
        ></Dialogs>
    )
}

export default DialogsContainer