const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let store = {
    _state:
        {
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
        },
    _callSubscriber() {
        console.log("state changed")
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)

        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)

        } else if (action.type === 'ADD-MESSAGE') {
            let newTextMessage = {
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages.push(newTextMessage)
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state)

        } else if (action.type === 'UPDATE-NEW-MESSAGE') {
            this._state.dialogsPage.newMessageText = action.newMessage
            this._callSubscriber(this._state)
        }
    },
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

export let addMessageActionCreator = () => ({type: 'ADD-MESSAGE'})

export let updateNewMessageActionCreator = (text) => ({
    type: 'UPDATE-NEW-MESSAGE', newMessage: text
})

export default store