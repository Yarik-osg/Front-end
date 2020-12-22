import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
//import auth from "./auth";
import {checkAuth} from './checkAuth'

export const PrivateRoute = ({ component: Component, path, ...rest }) => {
    const check = JSON.parse(localStorage.getItem("check"))
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