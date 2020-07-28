import {useFormik} from "formik";
import s from "./Header.module.css";
import React from "react";
import {useDispatch} from "react-redux";
import {authorization, logout} from "../../redux/AuthStore/authActions";

const LoginForm = (props) => {


const dispatch = useDispatch()


    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => {
            dispatch(authorization(values.email, values.password))
            formik.resetForm()

        },
    });

    if (props.isAuth){

        return (<div>

                <button onClick={() => dispatch(logout())} >Logout</button>
                {props.login}
            </div>

        )} else if (!props.isAuth) {
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
                <button type="submit">login</button>
            </form>
        )
       }

}
export default LoginForm