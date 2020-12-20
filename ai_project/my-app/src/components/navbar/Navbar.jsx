import {React, useState, useEffect} from "react";
import { Link} from 'react-router-dom'
import classes from './Navbar_index.module.css'
import logo from "../../music.svg"

import LoginNavbar from "./LoginNavbar";
import {bool} from "yup";


const Navbar = (props) => {
    let check_auth = localStorage.getItem('check')
    if(check_auth === "true"){
        check_auth = true
    }
    else{
        check_auth = false
    }
    console.log(check_auth)
    //const [authorized, setAuthorized] = useState(false)


    // const [scrolled, setScrolled] = useState(false);
    // const handleScroll = () => {
    //     const offset = window.scrollY;
    //     if (offset > 200) {
    //         setScrolled(true);
    //     } else {
    //         setScrolled(false);
    //     }
    // }
    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll)
    // })
    let navbarClasses = ['NavbarItems'];
    // if (scrolled) {
    //     navbarClasses.push('scrolled');
    // }
        const {history} = props;
        const handleMenuClick = (pageURL) => {
            history.push(pageURL);
        };

        return (
            <nav className={classes.NavbarItems}>
                <div className={classes.navbarLogo}>
                    <img src={logo} className={classes.img}/>
                    <Link to="/main" className = {classes.linklogo}><h1>Vtakti</h1> </Link>
                </div>

                <LoginNavbar isAuthorized ={check_auth} />


            </nav>

        )

    }

export default Navbar