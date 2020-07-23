import React from "react";
import s from './Users.module.css'
import {useDispatch, useSelector} from "react-redux";
import User from "./User";
import {setUsers} from "../../redux/UsersStore/usersActions";

import * as axios from "axios";
const Users = () => {
const users = useSelector(state => state.users.users)
    const dispatch = useDispatch()


    axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
        dispatch(setUsers(response.data.items))
    })



    return (
       <div className={s.users}>
           {users.map(user => {return <User key={user.id} {...user}/>})}
       </div>
    )
}
export default Users
    // [
    // {id: 1, followed: true, name: ' Dima', status: 'Hello world', email: 'dima@gmail.com', password: '424242'},
    //     {id: 2, followed: true, name: ' Kate', status: "I'm a model", email: 'kate@gmail.com', password: '424242'},
    //     {id: 3, followed: false,name: ' Artur', status: 'Give me some whiskey',email: 'artur@gmail.com',password: '424242'},
    //     {id: 4, followed: true, name: ' Olia', status: 'KPI for all life', email: 'olia@gmail.com', password: '424242'},
    //     {id: 5, followed: false, name: ' Mary', status: 'Mama mia', email: 'mary@gmail.com', password: '424242'},
    //     {id: 6, followed: true, name: ' Hope', status: 'I am dead', email: 'hope@gmail.com', password: '424242'},
    //     {id: 7, followed: true, name: ' Trust', status: 'Dont trust me!', email: 'trust@gmail.com', password: '424242'}
    // ]