import React from "react";
import s from './Header.module.css'
import AuthBlock from "./AuthBlock";
import {logout} from "../../redux/AuthStore/authActions";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/AuthStore/authActions";


class Header extends React.Component {
    componentDidMount() {
      this.props.getAuthUserData()
    }

    render() {
        return (
            <header className={s.header}>
                <div>
                    <img
                        className={s.logo}
                        src="https://i.ya-webdesign.com/images/w3c-svg-scalable-vector-8.png"
                        alt="logo"/>
                </div>
                <div>
                    <AuthBlock {...this.props}/>
                </div>
            </header>
        )
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapStateToProps, {getAuthUserData, logout})(Header)