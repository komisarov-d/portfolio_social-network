const SEND_MESSAGE = 'DIALOGS/SEND_MESSAGE'


const initialState = {
    dialogs: [
        {id: 1, message: ['Hello', 'How are you?']},
        {id: 2, message: ['Yo sobaki', 'Ya naruto udzumaki']},
        {id: 3, message: ['Hey', 'Whats up?', 'Miss you']
        },
    ],
    users: [
        {userId:1, name: 'Dmitriy'},
        {userId:2, name: 'Kate'},
        {userId:3, name: 'Ira'},
        {userId:4, name: 'Boris'},
    ]
}
export const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            return {...state, dialogs: state.dialogs.concat(action.payload)}
        default:
            return state
    }
}

export const sendMessage = message => {
    return {
        type: SEND_MESSAGE,
        payload: message
    }
}
