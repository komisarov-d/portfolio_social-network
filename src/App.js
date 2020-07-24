import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {Route, Switch} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import Users from "./components/Users/Users";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = () => {
    return (
        <div className="container">
            <Header/>
            <Navbar/>
            <div className="content">
                <Switch>
                    <Route path='/profile/:userId?' component={ProfileContainer}/>
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/users' component={Users}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>

                </Switch>
            </div>

            <Footer/>
        </div>
);
}

export default App;
