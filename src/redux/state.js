let rerenderEntireTree = () => {
    console.log("state changed")
}



let store = {
    state:
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

    addPost(){
        let newPost = {
            id: 5,
            message: store.state.profilePage.newPostText,
            likesCount: 0
        }
        store.state.profilePage.posts.push(newPost)
        store.state.profilePage.newPostText = ''
        rerenderEntireTree(store.state)
    },

    updateNewPostText(newText){
        store.state.profilePage.newPostText = newText
        rerenderEntireTree(store.state)
    },

    addMessage(){
        let newMessage = {
            message: store.state.dialogsPage.newMessageText
        }
        store.state.dialogsPage.messages.push(newMessage)
        store.state.dialogsPage.newMessageText = '';
        rerenderEntireTree(store.state)
    },

    updateNewMessage(newMessage) {
        store.state.dialogsPage.newMessageText = newMessage
        rerenderEntireTree(store.state)
    },

    subscribe(observer) {
        rerenderEntireTree = observer
    },

    func(){
        console.log(store.state.profilePage.newPostText)
    }
}

store.func()


export default store