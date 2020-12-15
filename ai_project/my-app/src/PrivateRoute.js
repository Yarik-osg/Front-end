import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
//import auth from "./auth";
import {checkAuth} from './checkAuth'
const check = JSON.parse(localStorage.getItem("check"))
export const PrivateRoute = ({ component: Component, path, ...rest }) => {
console.log(localStorage.getItem("check" ))
    return (
        <Route
            path={path}
            {...rest}
            render={props =>
                check
                    ? <Component {...props} />
                    : <Redirect to={{ pathname: "/login" }} />
            }
        />
    );
}
