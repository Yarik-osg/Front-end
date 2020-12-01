import React from "react";
import auth from "./auth";
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";

export const Users = (props) =>{
    return(
        <div>
            Users
            <button onClick={()=>{
                auth.logout(()=>{
                    props.history.push("/login")
                })
            }}>
                Logout
            </button>
        </div>
    )
}