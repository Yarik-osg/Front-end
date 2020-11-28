import React, {useState} from 'react'
import {Formik, Field, ErrorMessage, Form,} from "formik";
import *as Yup from "yup"
import {Link} from "react-router-dom";
import classes from "./Login_index.module.css"
import {withRouter} from 'react-router-dom'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-solid-svg-icons";
import logo from "../../music.svg"
import {FacebookLoginButton, GoogleLoginButton} from "react-social-login-buttons";

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
                    <img src={logo} alt=""/>
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
                            <div className={classes.inputBlock}>
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
                            <div className={classes.linkPass}>
                                <Link to="/resetpassword1">Forgot Password?</Link>
                            </div>

                            <div className={classes.buttons}>
                                <button className={classes.btn} type="submit"
                                        onClick={() => handleMenuClick("/register")}>Create!
                                </button>
                                <button className={classes.btn} type="submit">Login!</button>
                            </div>
                            <hr/>
                            <div>
                                    {/*<button className={classes.btn} type="submit">Gmail</button>*/}
                                    {/*<button className={classes.btn} type="submit">Facebook</button>*/}
                                    <FacebookLoginButton className={classes.btn} type="submit" />
                                    <GoogleLoginButton onClick={() => alert("Hello")} />
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}
export default withRouter(LoginPage)
