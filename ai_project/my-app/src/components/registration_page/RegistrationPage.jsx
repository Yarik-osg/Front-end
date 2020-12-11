import React, {useState} from 'react'
import {Formik, Field, ErrorMessage, Form,} from "formik";
import *as Yup from "yup"
import axios from "axios"
import classes from "./Registration_index.module.css"
import logo from "../../music.svg";
import checkAuth from "../../checkAuth";



const validationSchema = Yup.object().shape({
    firstName: Yup.string()
        .required('Required'),
    lastName: Yup.string()
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .required('Required')
});


const RegistrationPage = (props) => {
    const [error, setError] = useState(" ");
    return (
        <div className={classes.loginPage}>
            <div className={classes.container}>
                <header>
                    <img src={logo} alt=""/>
                    <p></p>
                    <h2>Fill up the registration form</h2>
                </header>
                <Formik
                    initialValues={{firstName: '', lastName: '', email: '', password: ''}}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {

                        console.log(values)
                        axios
                            .post('http://localhost:8080/registration',
                                {
                                    firstName: values["firstName"],
                                    lastName: values["lastName"],
                                    email: values["email"],
                                    password: values["password"]
                                }
                            ).then(res => {
                            localStorage.setItem('token',res.data.token)
                            // setError(res.status)
                            const status1=res.status
                            console.log(status1)
                            // localStorage.setItem('token', res.data.token)
                            console.log(res)
                            checkAuth.isAuthorised=true;
                            const Check = checkAuth.isAuthorised
                            localStorage.setItem("check",JSON.stringify(Check) )
                            console.log(localStorage.getItem("check"))
                            props.history.push("/users");
                            })
                            .catch(err => {
                                if (err.response) {
                                   console.log(err.response.status);
                                    //setError(err.response.status)
                                    if (err.response.status === 409)
                                        setError("User already exist. Change email.")
                                    // const error= localStorage.getItem("error")
                                    // console.log(error);

                                }
                            });


                    }}>
                    {({errors, touched}) => (
                        <Form>
                                <div >
                                   {error}
                                </div>
                            <div className={classes.inputBlock}>
                                <div>
                                    <div><label>First name </label></div>
                                    <Field
                                        placeholder="first name"
                                        name="firstName"
                                        type="input"
                                    />

                                    <ErrorMessage name="firstName"/>
                                </div>
                                <div>
                                    <div><label>Last name </label></div>
                                    <Field
                                        placeholder="last name"
                                        name="lastName"
                                        type="input"
                                    />
                                    <ErrorMessage  name="lastName"/>
                                </div>
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
                                    />
                                    <ErrorMessage name="password"/>
                                </div>
                            </div>
                            <div>
                                <button className={classes.btn}

                                        type="submit">
                                    Sign Up!
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}
export default RegistrationPage


