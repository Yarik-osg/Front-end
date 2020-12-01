import React from 'react'
import {Formik, Field, ErrorMessage, Form,} from "formik";
import *as Yup from "yup"
import axios from "axios"
import classes from "./Registration_index.module.css"
import logo from "../../music.svg";
import auth from "../../auth";


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
                        // values = JSON.stringify(values)
                        //console.log(values)
                        axios
                            .post('https://jsonplaceholder.typicode.com/todos',
                                {
                                    firstname: values["firstName"],
                                    lastname: values["lastName"],
                                    email: values["email"],
                                    password: values["password"]
                                }
                            ).then(res => console.log(res))
                            .catch(err => console.log(err))
                    }}>
                    {({errors, touched}) => (
                        <Form>
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
                                    <ErrorMessage name="lastName"/>
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
                                        onClick={
                                            () => {
                                                auth.login(() => {
                                                    props.history.push("/Users");
                                                })
                                            }
                                        }
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


