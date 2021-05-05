import React from 'react';
import {sendMessageCreator} from "../../redux/dialogs-reducer";
import {updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./dialogs";
import {connect} from "react-redux";

// const DialogsContainer = () => {
//
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState().dialogsReducer
//
//                     let addMessage = () => {
//                         store.dispatch(sendMessageCreator())
//                     }
//
//                     let onNewMessageChange = (body) => {
//                         store.dispatch(updateNewMessageBodyCreator(body))
//                     }
//                     return <Dialogs updateNewMessageBody={onNewMessageChange}
//                                     sendMessage={addMessage}
//                                     dialogsPage={state}
//                     ></Dialogs>
//                 }
//             }
//
//         </StoreContext.Consumer>
//
//     )
// }

let mapStateToProps = (state) => {
    return {
        dialogsPage: {state}
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {dispatch(updateNewMessageBodyCreator(body))},
        sendMessage: () => {dispatch(sendMessageCreator())}
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer