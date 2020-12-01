import logo from './logo.svg';
import './App.css';
import React from 'react';
import RegistrationPage from "./components/registration_page/RegistrationPage";
import LoginPage from "./components/login_page/LoginPage"
import ResetPasswordPage1 from "./components/reset_password_page/ResetPasswordPage1";
import ResetPasswordPage2 from "./components/reset_password_page/ResetPasswordPage2";
import MainPage from "./components/main_page/MainPage"
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import {Users} from "./Users";
import {ProtectedRoute} from "./protected.route";

const App = () => {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path ="/login" component={LoginPage} />
                <Route path ="/register" component={RegistrationPage} />
                <Route path ="/resetpassword1" component={ResetPasswordPage1} />
                <Route path ="/resetpassword2" component={ResetPasswordPage2} />
                <Route path = "/main" component= {MainPage} />
                <ProtectedRoute exact path="/Users" component={Users}/>
                <Route path="*" component={()=>"404 Not found"}/>
            </Switch>
        </Router>
    </div>
  )
}
export default App;
