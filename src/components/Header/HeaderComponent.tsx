import React from "react";
import s from './Header.module.css'
import {logout} from "../../redux/AuthStore/authReducer";
import {connect} from "react-redux";
import {Button, Col, Row} from "antd";
import {AppStateType} from "../../redux/rootReducer";
import LogoutOutlined from "@ant-design/icons/lib/icons/LogoutOutlined";
import {NavLink} from "react-router-dom";

type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}
type MapDispatchPropsType = {
    logout: () => void
}
type PropsType = MapStatePropsType & MapDispatchPropsType
const HeaderComponent: React.FC<PropsType> = (props) => {
    return (
        <header className={s.header}>
            <Row>
                <Col span={12}>
                    <img
                        className={s.logo}
                        src="https://i.ya-webdesign.com/images/w3c-svg-scalable-vector-8.png"
                        alt="logo"/>
                </Col>
                <Col offset={9} span={3}>
                    {props.isAuth ?
                        <div>
                            <Button onClick={props.logout} danger>Logout<LogoutOutlined/></Button>
                            <div>{props.login}</div>
                        </div> :
                        <NavLink to={'/login'}>Login</NavLink>

                    }
                </Col>
            </Row>
        </header>
    )
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})


export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {logout})(HeaderComponent)