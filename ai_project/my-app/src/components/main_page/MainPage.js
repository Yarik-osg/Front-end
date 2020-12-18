import React, {Component}  from "react";
import axios from "axios"
import ListOfPosts from "./ListOfPosts"
import Navbar from "../navbar/Navbar";
const MainPage = () => {

    return(
        <div>
            <Navbar />
            <ListOfPosts />
        </div>


    )

}

export default MainPage