import React from "react";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/Validators";
import s from '../common/./FormsControls/FormsControls.module.css'
import {login} from "../../redux/AuthStore/authReducer";

const maxLength30 = maxLengthCreator(30)

const LoginForm = ({handleSubmit, error}) => {

    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', [required, maxLength30], Input)}
            {createField('Password', 'password', [required, maxLength30], Input, {type: 'password'})}
            {createField(null, 'rememberMe', [], Input, {type: 'checkbox'}, 'Remember me')}
            {error && <div className={s.requestError}>{error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}


const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)


const Login = ({isAuth, login}) => {

    if (isAuth) return <Redirect to={'/profile'}/>
    const onSubmit = (formData) => {
        login(formData.email,
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