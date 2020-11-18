import logo from './logo.svg';
import './App.css';
import React from 'react';
import RegistrationPage from "./components/RegistrationPage";
import LoginPage from "./components/login_page/LoginPage"
const App = () => {
  return (
    <div className="App">
        <LoginPage />
        {/*<RegistrationPage/>*/}
    </div>
  )
}



export default App;
