import logo from './logo.svg';
import './App.css';
import React from 'react';
import RegistrationPage from "./components/registration_page/RegistrationPage";
import LoginPage from "./components/login_page/LoginPage"
import ResetPasswordPage1 from "./components/reset_password_page/ResetPasswordPage1";
import ResetPasswordPage2 from "./components/reset_password_page/ResetPasswordPage2";
//import BrowserRouter from "react-router-dom/modules/BrowserRouter";
const App = () => {
  return (
      // <BrowserRouter>
    <div className="App">

        <LoginPage />
        {/*<RegistrationPage/>*/}
        {/*<ResetPasswordPage1 />*/}
        {/*<ResetPasswordPage2 />*/}
    </div>
      // </BrowserRouter>
  )
}
export default App;
