import {InferActionsType} from "../rootReducer";

type MessagesType = {
    id:number
    message:string
}
type DialogsType = {
    id:number
    name:string
}
const initialState = {
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Hey'},
    ] as Array<MessagesType>,
    dialogs: [
        {id: 1, name: 'Dmitriy'},
        {id: 2, name: 'Kate'},
        {id: 3, name: 'Ira'},
        {id: 4, name: 'Boris'},
    ] as Array<DialogsType>
}

export const dialogsReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'DIALOGS/SEND_MESSAGE':
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: Date.now(), message: body}]
            }
        default:
            return state
    }
}
export const actions = {
    sendMessage: (newMessageBody: string) =>  ({type: 'DIALOGS/SEND_MESSAGE', newMessageBody} as const)
}
type ActionTypes = InferActionsType<typeof actions>
export type InitialStateType = typeof initialState