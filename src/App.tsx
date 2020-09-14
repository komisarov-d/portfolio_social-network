import React, {FC, Suspense, useEffect} from 'react';
import './App.css';
import HeaderComponent from "./components/Header/HeaderComponent";
import Navbar from "./components/Navbar/Navbar";
import FooterComponent from "./components/Footer/FooterComponent";
import {Redirect, Route, Switch} from "react-router-dom";
import {LoginPage} from './components/Login/LoginPage'
import {useDispatch, useSelector} from "react-redux";
import {Loader} from "./components/common/Loader/Loader";
import {Row, Col} from 'antd';
import {initializeApp} from "./redux/AppStore/appReducer";
import {Users} from "./components/Users/Users";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {ProfileContainerFCWithRouter} from "./components/Profile/ProfileContainerFC";
import {getInitSelector} from "./redux/AppStore/appSelectors";


const AppFC: FC = () => {
    const initialized = useSelector(getInitSelector)
    const dispatch = useDispatch()

    const catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
        alert(' error ' + e)
    }
    useEffect(() => {
        dispatch(initializeApp)
        window.addEventListener('unhandledrejection', catchAllUnhandledErrors)
    },[dispatch, initialized])


// todo: make something with loader
    // if (!initialized) {
    //     return <Loader/>
    // }
    return (

        <div className={'app'}>

            <Row>
                <Col span={24}>
                    <HeaderComponent/>
                </Col>
            </Row>
            <Row>
                <Col span={3}>
                    <Navbar/>
                </Col>
                <Col className={'content'} offset={1} span={18}>
                    <Switch>
                        <Suspense fallback={<div><Loader/></div>}>

                            <Route exact path={'/'} render={() => <Redirect to={'/profile'}/>}/>

                            <Route path='/profile/:userId?' render={() => <ProfileContainerFCWithRouter/>}/>

                            <Route path='/dialogs' render={() => <Dialogs/>}/>

                            <Route path='/users' render={() => <Users/>}/>

                            <Route path='/login' render={() => <LoginPage/>}/>

                        </Suspense>
                        <Route path='*' render={() => <div>404 Not found</div>}/>
                    </Switch>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <FooterComponent/>
                </Col>
            </Row>
        </div>
    )
}

export default AppFC

