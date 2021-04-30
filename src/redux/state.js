import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [{message: 'Hi! How are you?', id: 1, likesCount: 14},
            {message: 'It is my first post!', id: 2, likesCount: 10}],
        newPostText: 'new post'
    },
    dialogsPage:
        {
            dialogs: [
                {
                    name: 'Aidar',
                    id: 1,
                    ava: "https://minana.ru/wp-content/uploads/2019/02/%D0%90%D0%BC-%D0%9D%D1%8F%D0%BC-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0.png"
                },
                {
                    name: 'Viktoria',
                    id: 2,
                    ava: "https://st.depositphotos.com/2000885/1902/i/600/depositphotos_19021343-stock-photo-red-heart.jpg"
                },
                {name: 'Sveta', id: 3},
                {name: 'Maria', id: 4},
                {name: 'Ivan', id: 5},
                {name: 'Vladimir', id: 6}],

            messages: [
                {message: 'Hi!', id: 1},
                {message: 'How are you?', id: 2},
                {message: 'Yo', id: 3},
                {message: 'Lol', id: 4}

            ],

            newMessageText: 'new message'

        }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export let addMessage = () => {
    let newMessage = {
        message: state.dialogsPage.newMessageText
    }
    state.dialogsPage.messages.push(newMessage)
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state)
}

console.log(state.dialogsPage.newMessageText)

export let updateNewMessage = (newMessage) => {
    state.dialogsPage.newMessageText = newMessage
    rerenderEntireTree(state)
}

export default state