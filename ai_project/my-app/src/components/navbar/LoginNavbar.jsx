import React from "react";
import {Link} from "react-router-dom";
import  classes from './Navbar_index.module.css'

 const LoginNavbar = (props) => {

    const isAuthorized = props.isAuthorized
    console.log(isAuthorized)
    if(isAuthorized === true){
        console.log(isAuthorized)
        return <div className={classes.navbarLogout}>
            <Link to="/user" className ={classes.username}>Username</Link>
            <Link to="/main" className = {classes.linkOut} onClick={() => localStorage.setItem("check",JSON.stringify(false))} >Logout</Link>
        </div>

    }
    else {
        console.log(isAuthorized)
        return <div className={classes.navbarLogin}>
            <Link to="/users" className={classes.linkIn}>Sign In</Link>
        </div>
    }

}

export default LoginNavbar