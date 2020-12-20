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
import CreatePost from "./components/Post/CreatePost";
import UserPage from "./components/user_profile_page/UserPage";
import UserEditPage from "./components/user_profile_page/UserEditPage";
import PostPage from "./components/Post/PostPage";



const App = () => {

  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path ="/login" component={LoginPage} />
                <Route path ="/register" component={RegistrationPage} />
                <Route path ="/resetpassword1" component={ResetPasswordPage1} />
                <Route path ="/resetpassword2" component={ResetPasswordPage2} />
                <PrivateRoute path = "/user" component={UserPage} />
                <PrivateRoute path = "/useredit" component={UserEditPage} />
                <Route path = "/main" component= {MainPage} />
                <Route path = "/post/:id" component={PostPage} />
                <PrivateRoute exact path="/users" component={Users}/>
                <PrivateRoute exact path="/createpost" component={CreatePost}/>
                <Route path="*" component={()=>"404 Not found"}/>
            </Switch>
        </Router>
    </div>
  )
}
export default App;
