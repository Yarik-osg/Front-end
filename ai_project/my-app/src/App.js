import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import RegistrationPage from "./components/registration_page/RegistrationPage";
import LoginPage from "./components/login_page/LoginPage"
import ResetPasswordPage1 from "./components/reset_password_page/ResetPasswordPage1";
import ResetPasswordPage2 from "./components/reset_password_page/ResetPasswordPage2";
import MainPage from "./components/main_page/MainPage"
import {BrowserRouter as Router,Switch, Route,Redirect} from "react-router-dom";
import {Users} from "./Users"
import {PrivateRoute} from "./PrivateRoute";
import {Link} from "react-router-dom";
import {checkAuth} from "./checkAuth";

const App = () => {
   // const [loggedIn, setLoggedIn] = useState(false);
   // const [user, setUser] = useState();

    // const verify = () => {
    //     if (checkAuth.authorise()) {
    //         setLoggedIn(true);
    //         setUser(checkAuth.userID);
    //         console.log('logged in');
    //         return true;
    //     } else {
    //         console.log('not logged in');
    //         return false;
    //     }
    // }
    //
    // useEffect(() => {
    //     verify()
    // }, [loggedIn]);
  return (
    <div className="App">
        <Router>
            <Switch>

                <Route path ="/login" component={LoginPage} />
                <Route path ="/register" component={RegistrationPage} />
                <Route path ="/resetpassword1" component={ResetPasswordPage1} />
                <Route path ="/resetpassword2" component={ResetPasswordPage2} />
                <Route path = "/main" component= {MainPage} />
                <PrivateRoute exact path="/users" component={Users}/>
                <Route path="*" component={()=>"404 Not found"}/>
            </Switch>
        </Router>
    </div>
  )
}
export default App;
