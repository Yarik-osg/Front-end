import React, {Component} from "react";
import axios from "axios";
import {getJwt} from "./helpers/jwt";

import {BrowserRouter as Router,Switch, Route,Redirect} from "react-router-dom";

export const checkAuth = {
    isAuthorised: false,
    authorise: function () {
        const jwt = getJwt()
        const token = localStorage.getItem("token");
        if (!token) {
            console.log('Invalid Token');
            localStorage.setItem("token", null);
        }
            axios
                .get( 'http://localhost:8080/users',

                    {headers:{Authorization: `Bearer ${jwt}`}
        }).then(res=>{
                if (res.status === 200) {
                    this.isAuthorised = true;
                    return this.isAuthorised;
                }
            })
                .catch(err=>console.log(err))
        console.log(this.isAuthorised)
        return this.isAuthorised;
    },
    logout: function () {
       localStorage.setItem("token", null);
        this.isAuthorised = false;
        return <Redirect to="/login" />
    },
}

export default checkAuth;