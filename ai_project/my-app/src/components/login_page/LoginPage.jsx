import React, {useState} from 'react'
import {Formik, Field, ErrorMessage, Form,} from "formik";
import *as Yup from "yup"
import {Link} from "react-router-dom";
import classes from "./Login_index.module.css"
import {withRouter} from 'react-router-dom'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-solid-svg-icons";

const eye = <FontAwesomeIcon icon={faEye}/>;

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .required('Required')
});


const LoginPage = (props) => {

    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
    };
    const {history} = props;
    const handleMenuClick = (pageURL) => {
        history.push(pageURL);
    };
    const [passwordShown, setPasswordShown] = useState(false);
    return (
        <div className={classes.loginPage}>
            <div className={classes.container}>
                <header>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3219/logo.svg" alt=""/>
                    <h2>Login</h2>
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
                                <div className={classes.passwordWr}>
                                    <div><label>E-mail </label></div>
                                    <Field
                                        classname={classes.field}
                                        placeholder="email@smth.com"
                                        name="email"
                                        type="email"
                                    />
                                    <div className={classes.error}>
                                        <ErrorMessage name="email"/>
                                    </div>
                                </div>
                                <div className={classes.passwordWr}>
                                    <div className={classes.passWrapper}><label>Password </label></div>
                                    <Field
                                        placeholder="password"
                                        name="password"
                                        type={passwordShown ? "text" : "password"}
                                        id="myInput"
                                    />
                                    <div className={classes.eye}>
                                        <i onClick={togglePasswordVisibility}>{eye}</i>
                                    </div>
                                    <div className={classes.error}>
                                        <ErrorMessage name="password"/>
                                    </div>

                                </div>
                            </div>
                            <div>
                                <Link to="/resetpassword1">Forgot Password?</Link>
                            </div>

                            <div>
                                <button className={classes.btn} type="submit"
                                        onClick={() => handleMenuClick("/register")}>Create!
                                </button>
                                <button className={classes.btn} type="submit">Login!</button>
                            </div>
                            <hr/>
                            <div>
                                <label>
                                    <button className={classes.btn} type="submit">Gmail</button>
                                    <button className={classes.btn} type="submit">Facebook</button>
                                </label>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}
export default withRouter(LoginPage)
