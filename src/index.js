import React from 'react';
import './index.css';
import store from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost} from "./redux/state";
import {updateNewPostText} from "./redux/state";
import {updateNewMessage} from "./redux/state";
import {addMessage} from "./redux/state";


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={store.state}
                addPost = {store.addPost}
                updateNewPostText={store.updateNewPostText}
                addMessage = {store.addMessage}
                updateNewMessage = {store.updateNewMessage}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.state)

store.subscribe(rerenderEntireTree)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
