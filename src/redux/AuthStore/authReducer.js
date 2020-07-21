import {LOGIN, LOGOUT} from "./authTypes";

const initialState = {
    users: [
        {id: 1, name: ' Dima', status: 'Hello world', email: 'dima@gmail.com', password: '424242'},
        {id: 2, name: ' Kate', status: "I'm a model", email: 'kate@gmail.com', password: '424242'},
        {id: 3, name: ' Artur', status: 'Give me some whiskey', email: 'artur@gmail.com', password: '424242'},
        {id: 4, name: ' Olia', status: 'KPI for all life', email: 'olia@gmail.com', password: '424242'},
        {id: 5, name: ' Mary', status: 'Mama mia', email: 'mary@gmail.com', password: '424242'},
        {id: 6, name: ' Hope', status: 'I am dead', email: 'hope@gmail.com', password: '424242'},
        {id: 7, name: ' Trust', status: 'Dont trust me!', email: 'trust@gmail.com', password: '424242'},
    ],
    auth: false
}
export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case LOGIN :
            return {...state ,auth: true}
        case LOGOUT :
            return {...state, auth: false}

        default:
            return state
    }
}