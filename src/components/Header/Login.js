import {useFormik} from "formik";
import s from "./Header.module.css";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {login, logout} from "../../redux/AuthStore/authActions";

const LoginForm = () => {
const auth = useSelector(state => state.auth.auth)
const dispatch = useDispatch()


    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => {
            dispatch(login(values.email, values.password))
            formik.resetForm()

        },
    });
    if (!auth) {
        return(
            <form onSubmit={formik.handleSubmit}>
                <input id='email' name='email'
                       onChange={formik.handleChange}
                       value={formik.values.email}
                       className={s.form} type="Email" placeholder='email'/>
                <input id='password' name='password'
                       className={s.form}
                       onChange={formik.handleChange}
                       value={formik.values.password}
                       type="Password" placeholder='password'/>
                <button type="submit">Submit</button>
            </form>
        )
       }
if (auth){

    return (
        <button onClick={() => dispatch(logout())} >Logout</button>
    )}
}
export default LoginForm