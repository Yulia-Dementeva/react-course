import React from 'react';
import {addPostActionCreator} from "../../../redux/profile-reducer";
import {updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./myPosts";


const MyPostsContainer = (props) => {

    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action)
    }

    return (
        <MyPosts updateNewPostText={onPostChange}
                 addPost={addPost}
                 newPostText={state.profileReducer.newPostText}
                 posts={state.profileReducer.posts}></MyPosts>
    )
}

export default MyPostsContainer

