const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let initialState = {
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

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newTextMessage = {
                message: state.newMessageText,
                id: 6
            }
            state.messages.push(newTextMessage)
            state.newMessageText = '';
            return state

        case UPDATE_NEW_MESSAGE:
            state.newMessageText = action.body
            return state

        default:
            return state
    }
}

export let sendMessageCreator = () => ({type: ADD_MESSAGE})

export let updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE, body: body
})

export default dialogsReducer