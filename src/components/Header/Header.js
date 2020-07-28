import React from "react";
import s from './Header.module.css'
import Login from "./Login";
import Logo from "./Logo";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/AuthStore/authActions";


class Header extends React.Component {
    componentDidMount() {
      this.props.getAuthUserData()
    }

    render() {
        return (
            <header className={s.header}>
                <Logo/>
                <div>
                    <Login {...this.props}/>
                </div>
            </header>
        )
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapStateToProps, {getAuthUserData})(Header)