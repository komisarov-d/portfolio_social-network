import React, {Suspense} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Login from './components/Login/Login'
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/AppStore/appReducer";
import {Loader} from "./components/common/Loader/Loader";
import {store} from "./redux/rootReducer";

const DialogsContainer = React.lazy(() => {
    return import("./components/Dialogs/DialogsContainer");
});

class App extends React.Component {
    catchAllUnhandledErrors = (promiseRejectionEvent) => {
        alert('some error')
    }
    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)}

        componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
        }

    render() {
        if (!this.props.initialized) {
            return <Loader/>
        }
        return (
            <div className="container">
                <Header/>
                <Navbar/>
                <div className="content">
                    <Switch>
                        <Suspense fallback={<div><Loader/></div>}>
                            <Redirect from={'/'} to={'/profile'}/>
                        <Route path='/profile/:userId?' component={ProfileContainer}/>
                        <Route path='/dialogs' component={DialogsContainer}/>
                        <Route path='/users' component={UsersContainer}/>
                        <Route path='/music' component={Music}/>

                        <Route path='/settings' component={Settings}/>
                        <Route path='/login' component={Login}/>
                        {/*<Route path='/404' component={ErrorPage}/>*/}
                        {/*<Redirect exact={true} from={'*'} to={'/404'} />*/}
                            {/*<Route path='/*'*/}
                            {/*       render={() => <div>404 NOT FOUND</div>}/>*/}

                        </Suspense>
                    </Switch>
                </div>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    initialized: state.app.initialized
})
const AppContainer = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <AppWrapper/>
            </BrowserRouter>
        </Provider>)
}

const AppWrapper = compose(withRouter(connect(mapStateToProps, {initializeApp})(App)))
export default AppContainer
