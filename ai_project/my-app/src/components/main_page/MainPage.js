import React, {Component}  from "react";
import axios from "axios"
import ListOfPosts from "./ListOfPosts"
import Navbar from "../navbar/Navbar";
import classes from "../navbar/Navbar_index.module.css"
import CardPost from "../card/CardPost";

const MainPage = () => {

    return(
        <div className={classes.container}>
            <Navbar />
            <ListOfPosts />
        </div>


    )

}

export default MainPage