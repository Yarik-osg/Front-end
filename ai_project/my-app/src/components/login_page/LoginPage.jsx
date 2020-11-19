import React from 'react'
import {Formik, Field, ErrorMessage, Form,} from "formik";
import *as Yup from "yup"
import {Link} from "react-router-dom";
import classes from "./Login_index.module.css"



const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .required('Required')
});
let visible_password = () => {
    const x = document.getElementById("myInput");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
const LoginPage = () => {
    return (
        <div >
            <header>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3219/logo.svg" alt=""/>
                <h1>Login</h1>
            </header>
            <Formik
                initialValues={{email: '', password: ''}}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values)
                }}>
                {({errors, touched}) => (
                    <Form>
                        <div>
                            <div>
                                <div><label>E-mail </label></div>
                                <Field
                                    placeholder="email@smth.com"
                                    name="email"
                                    type="email"
                                />
                                <ErrorMessage name="email"/>
                            </div>
                            <div>
                                <div><label>Password </label></div>
                                <Field
                                    placeholder="password"
                                    name="password"
                                    type="password"
                                    id="myInput"
                                />
                                <ErrorMessage name="password"/>
                                <input type="checkbox" onClick={visible_password}/>
                            </div>
                        </div>
                        <div >
                            <label >
                                remember me?<input className={classes.checkbox} type="checkbox" name="remember_name" />
                            </label>
                            <Link to="/resetpassword1" className="btn btn-link pr-0">Forgot Password?</Link>

                        </div>
                        <div>
                            <button type="submit">Create!</button>
                            <button type="submit">Login!</button>
                        </div>
                        <hr/>
                        <div>
                            <label>
                                <button type="submit">Gmail</button>
                                <button type="submit">Facebook</button>
                            </label>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
export default LoginPage


