import React, {Component}  from "react";
import axios from "axios"
import ListOfPosts from "./ListOfPosts"
import Navbar from "../navbar/Navbar";
import classes from "../navbar/Navbar_index.module.css"
import CardPost from "../card/CardPost";
import classes1 from './ListOfPosts_index.module.css'
const MainPage = (props) => {
    const handleMenuClick = (pageURL) => {
        history.push(pageURL);
    };
    const {history} = props;
    return(
        <div className={classes.container}>
            <Navbar />
            <div >
                <button className={classes1.btn} onClick={() => handleMenuClick("/createpost")} >Create post</button>
            </div>
            <ListOfPosts />
        </div>


    )

}

export default MainPage