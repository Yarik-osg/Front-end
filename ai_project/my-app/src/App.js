import logo from './logo.svg';
import './App.css';
import React from 'react';
import RegistrationPage from "./components/registration_page/RegistrationPage";
import LoginPage from "./components/login_page/LoginPage"
import ResetPasswordPage1 from "./components/reset_password_page/ResetPasswordPage1";
import ResetPasswordPage2 from "./components/reset_password_page/ResetPasswordPage2";
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
const App = () => {
  return (
      // <BrowserRouter>
    <div className="App">
        <Router>
            <Switch>
                <Route path ="/login" component={LoginPage} />
                <Route path ="/register" component={RegistrationPage} />
                <Route path ="/resetpassword1" component={ResetPasswordPage1} />
                <Route path ="/resetpassword2" component={ResetPasswordPage2} />

            </Switch>
        </Router>
    </div>
  )
}
export default App;
