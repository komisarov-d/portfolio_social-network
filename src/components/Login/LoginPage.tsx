import React from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {createField, GetStringKeys, Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/Validators";
import s from '../common/./FormsControls/FormsControls.module.css'
import {authorization} from "../../redux/AuthStore/authReducer";
import {getCaptchaUrlSelector, getIsAuthSelector} from "../../redux/AuthStore/authSelectors";

const maxLength30 = maxLengthCreator(30)
type LoginFormOwnProps = {
    captchaUrl:string|null
}
const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = ({handleSubmit, error, captchaUrl}) => {

    return (
        <form onSubmit={handleSubmit}>
            {createField<LoginFormValuesTypeKey>('Email', 'email', [required, maxLength30], Input)}
            {createField<LoginFormValuesTypeKey>('Password', 'password', [required, maxLength30], Input, {type: 'password'})}
            {createField<LoginFormValuesTypeKey>(undefined, 'rememberMe', [], Input, {type: 'checkbox'}, 'Remember me')}

            {captchaUrl && <img src={captchaUrl} alt="captchaUrl"/>}
            {captchaUrl && createField<LoginFormValuesTypeKey>(undefined, 'captcha', [required], Input)}

            {error && <div className={s.requestError}>{error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}


const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({
    form: 'login'
})(LoginForm)


export type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}
type LoginFormValuesTypeKey = GetStringKeys<LoginFormValuesType>


export const LoginPage: React.FC = () => {
    const captchaUrl = useSelector(getCaptchaUrlSelector)
    const isAuth = useSelector(getIsAuthSelector)
const dispatch = useDispatch()
    if (isAuth) return <Redirect to={'/profile'}/>
    const onSubmit = (formData: LoginFormValuesType) => {
        dispatch(authorization(
            formData.email,
            formData.password,
            formData.rememberMe,
            formData.captcha
        ))
    }
    return (

        <div>
            <h1>Login</h1>
            <LoginReduxForm captchaUrl={captchaUrl} onSubmit={onSubmit}/>
        </div>
    )
}

