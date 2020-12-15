import React from 'react'
import *as Yup from 'yup'
import {Formik, Form, ErrorMessage, Field} from "formik";
//import classes from "../login_page/Createpost.module.css";


const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required')

});

const ResetPasswordPage1 = () =>{
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
                    }}
                validationSchema = {validationSchema}>
                {({errors, touched}) => (
                    <Form >
                        <div>


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
                            <button type="submit">
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