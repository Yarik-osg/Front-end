import React, {useState} from 'react'
import *as Yup from 'yup'
import {Formik, Form, ErrorMessage, Field} from "formik";
import classes from "../login_page/Login_index.module.css";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
const eye = <FontAwesomeIcon icon={faEye} />;

const validationSchema = Yup.object().shape({
    newPassword: Yup.string()
        .required("Required"),
    confirmPassword: Yup.string()
        .required("Required")
        .oneOf([Yup.ref('newPassword'), ''],  "Passwords must match")

});
/*
let visible_password = () => {
    const x = document.getElementById("myInput");
    const x2 = document.getElementById("myInput2")
    if (x.type === "password" && x2.type === "password") {
        x.type = "text"
        x2.type = "text"
    } else {
        x.type = "password"
        x2.type = "password"
    }
}
*/


const ResetPasswordPage2 = () =>{
    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
    };


    const [passwordShown, setPasswordShown] = useState(false);

    return (
        <div>
            <header className={classes.header}>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3219/logo.svg" alt=""/>
                <h1>Enter new password</h1>
            </header>

            <Formik
                initialValues={{ newPassword: '', confirmPassword: ''}}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema = {validationSchema}>
                {({errors, touched}) => (
                    <Form >
                        <div>


                            <div>
                                <div><label>New password </label></div>
                                <Field
                                    placeholder="new password"
                                    name="newPassword"
                                    type={passwordShown ? "text" : "password"}
                                    id = "myInput"
                                />
                                <ErrorMessage name="newPassword"/>
                            </div>
                            <div>
                                <div><label>Confirm this password </label></div>
                                <Field
                                    placeholder="new password again"
                                    name="confirmPassword"
                                    type={passwordShown ? "text" : "password"}
                                    id = "myInput2"
                                />
                                <ErrorMessage name="confirmPassword"/>
                            </div>
                            <h4>visibility</h4>
                            <i onClick={togglePasswordVisibility}>{eye}</i>
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

export default ResetPasswordPage2