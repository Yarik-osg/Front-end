import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
//import auth from "./auth";
import {checkAuth} from './checkAuth'

export const PrivateRoute = ({ component: Component, path, ...rest }) => {

    return (
        <Route
            path={path}
            {...rest}
            render={props =>
                checkAuth.authorise()
                    ? <Component {...props} />
                    : <Redirect to={{ pathname: "/login" }} />
            }
        />
    );
}
