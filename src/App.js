import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {Route, Switch, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Login from './components/Login/Login'
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/AppStore/appReducer";
import {Loader} from "./components/common/Loader/Loader";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
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
                        <Route path='/profile/:userId?' component={ProfileContainer}/>
                        <Route path='/dialogs' component={DialogsContainer}/>
                        <Route path='/users' component={UsersContainer}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={Settings}/>
                        <Route path='/login' component={Login}/>
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
export default compose(withRouter(connect(mapStateToProps, {initializeApp})(App)))
