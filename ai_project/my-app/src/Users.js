import React,{Component} from "react";
import auth from "./checkAuth";
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import {getJwt} from "./helpers/jwt";
import axios from 'axios'
import { withRouter } from 'react-router-dom';
import checkAuth from "./checkAuth";
const check=false



export const Users = (props) =>{
    return(
        <div>
            Users
            <button onClick={()=>{
                localStorage.setItem("check",JSON.stringify(check))
                props.history.push("/main")

            }}
                >
                Logout
            </button>
        </div>
    )
}