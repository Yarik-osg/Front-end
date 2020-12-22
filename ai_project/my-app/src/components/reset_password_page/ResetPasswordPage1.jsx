import React, {useState} from 'react'
import *as Yup from 'yup'
import {Formik, Form, ErrorMessage, Field} from "formik";
import axios from "axios";
import classes from "../login_page/Login_index.module.css";


const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required')

});

const ResetPasswordPage1 = (props) =>{
    const [error, setError] = useState(" ");
    return (
        <div>
            <header
                //className={classes.header}
            >
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3219/logo.svg" alt=""/>
                <h1>To reset your password, please enter your email first</h1>
            </header>

            <Formik
                initialValues={{ email: ''}}
                onSubmit={(values) => {
                    console.log(values)
                    axios
                        .post('http://localhost:8080/forgot_password',
                            {
                                email: values["email"],
                            }
                        ).then(res => {
                            console.log(res)
                           setError("Check your email")
                        console.log(error)
                        })
                        .catch(err => {
                            console.log(err)
                            setError("Wrong email")
                        })
                    console.log(error)
                }}
                validationSchema = {validationSchema}>
                {({errors, touched}) => (
                    <Form >
                        <div>
                            <h2>
                                {error}
                            </h2>
                            <div>
                                <div    ><label>E-mail </label></div>
                                <Field
                                    placeholder="email@smth.com"
                                    name="email"
                                    type="email"
                                />
                                <ErrorMessage name="email"/>
                            </div>

                        </div>
                        <div>
                            <button  className={classes.btn} type="submit">
                                Submit!
                            </button>
                        </div>
                    </Form>
                )}

            </Formik>

        </div>

    )

}

export default ResetPasswordPage1