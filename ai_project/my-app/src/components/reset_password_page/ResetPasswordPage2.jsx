import React, {useState} from 'react'
import *as Yup from 'yup'
import {Formik, Form, ErrorMessage, Field} from "formik";
import classes from "../login_page/Login_index.module.css";
import {useForm} from "react-hook-form";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import queryString from 'query-string';
import {withRouter} from 'react-router-dom'
const eye = <FontAwesomeIcon icon={faEye}/>;

const validationSchema = Yup.object().shape({
    newPassword: Yup.string()
        .required("Required"),
    confirmPassword: Yup.string()
        .required("Required")
        .oneOf([Yup.ref('newPassword'), ''], "Passwords must match")

});


const ResetPasswordPage2 = (props) => {
    const {history} = props;
    const handleMenuClick = (pageURL) => {
        history.push(pageURL);
    };
    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
    };
    //const [token, setToken] = useState(false)

    const [passwordShown, setPasswordShown] = useState(false);
    let url = props.location.search;
    new URLSearchParams(props.location.search).get("token")
    let params = queryString.parse(url);
    console.log(params);
    return (
        <div>
            <header className={classes.header}>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3219/logo.svg" alt=""/>
                <h1>Enter new password</h1>
            </header>

            <Formik
                initialValues={{newPassword: '', confirmPassword: ''}}
                onSubmit={(values) => {
                    // console.log(values)
                    // axios.get(`http://localhost:8080/reset_password?token=${params}`, {})
                    //     .then(r => {
                    //         console.log(r)
                    //     }).catch(err => console.log(err));//console.log(token)
                    // console.log(data.args);
                    axios.post(`http://localhost:8080/reset_password`, {
                        newPassword: values['newPassword'],
                        confirmPassword: values['confirmPassword'],
                        //   token: params.token
                    }, {}).then(res => console.log(res))
                        .catch(err => console.log(err))
                }}
                validationSchema={validationSchema}>
                {({errors, touched}) => (
                    <Form>
                        <div>


                            <div>
                                <div><label>New password </label></div>
                                <Field
                                    placeholder="new password"
                                    name="newPassword"
                                    type={passwordShown ? "text" : "password"}
                                    id="myInput"
                                />
                                <ErrorMessage name="newPassword"/>
                            </div>
                            <div>
                                <div><label>Confirm this password </label></div>
                                <Field
                                    placeholder="new password again"
                                    name="confirmPassword"
                                    type={passwordShown ? "text" : "password"}
                                    id="myInput2"
                                />
                                <ErrorMessage name="confirmPassword"/>
                            </div>
                            <h4>visibility</h4>
                            <i onClick={togglePasswordVisibility}>{eye}</i>
                        </div>
                        <div>
                            <button type="submit" onClick={() => handleMenuClick("/main")}>
                                Submit!
                            </button>
                        </div>
                    </Form>
                )}

            </Formik>

        </div>

    )

}

export default withRouter(ResetPasswordPage2)