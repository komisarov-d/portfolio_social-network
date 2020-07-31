import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/Validators";
import s from '../common/./FormsControls/FormsControls.module.css'
import {login} from "../../redux/AuthStore/authReducer";

const maxLength30 = maxLengthCreator(30)

const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required, maxLength30]} component={Input} name={'email'} placeholder='Login'/>
            </div>
            <div>
                <Field validate={[required, maxLength30]} type={'password'} component={Input} name={'password'}
                       placeholder='Password'/>
            </div>
            <div>
                <Field component={'input'} name={'rememberMe'} type="checkbox"/>Remember me
            </div>
            {props.error &&  <div className={s.requestError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}


const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)


const Login = (props) => {

    if (props.isAuth) return <Redirect to={'/profile'}/>
    const onSubmit = (formData) => {
        props.login(formData.email,
            formData.password,
            formData.rememberMe)
    }
    return (

        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
const mapStateToProps = state => {
    return ({
        isAuth: state.auth.isAuth
    })
}
export default connect(mapStateToProps, {login})(Login)