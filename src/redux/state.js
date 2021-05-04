import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

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

                    newMessageText: ''

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

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._callSubscriber(this._state)
    }

}

export default store