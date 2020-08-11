import React, {Suspense} from 'react';
import './App.css';
import HeaderComponent from "./components/Header/HeaderComponent";
import Navbar from "./components/Navbar/Navbar";
import FooterComponent from "./components/Footer/FooterComponent";
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import {LoginPage} from './components/Login/LoginPage'
import {connect, Provider} from "react-redux";
import {Loader} from "./components/common/Loader/Loader";
import {AppStateType, store} from "./redux/rootReducer";
import {Row, Col} from 'antd';
import {compose} from "redux";
import {initializeApp} from "./redux/AppStore/appReducer";
import {UsersPage} from "./components/Users/UsersContainer";
import {Dialogs} from "./components/Dialogs/Dialogs";
import ProfileContainer from "./components/Profile/ProfileContainer";


type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    initializeApp: () => void
}

class App extends React.Component<MapPropsType & DispatchPropsType> {
    catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
        alert(' error ' + e)
    }

    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    render() {
        if (!this.props.initialized) {
            return <Loader/>
        }
        return (<div className={'app'}>
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

                                <Redirect from={'/'} to={'/profile'}/>

                                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>

                                 <Route path='/dialogs' render={() => <Dialogs/>}/>

                                <Route path='/users' render={() => <UsersPage/>}/>

                                 <Route path='/login' render={() => <LoginPage/>}/>

                            </Suspense>
                        </Switch>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <FooterComponent/>
                    </Col>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})
const AppContainer = compose<React.ComponentType>(
    withRouter, connect(mapStateToProps, {initializeApp})
)(App)


const AppWrapper: React.FC = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <AppContainer/>
            </BrowserRouter>
        </Provider>)
}


export default AppWrapper

