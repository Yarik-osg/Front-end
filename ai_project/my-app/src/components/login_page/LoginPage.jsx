import React, {useState} from 'react'
import {Formik, Field, ErrorMessage, Form,} from "formik";
import *as Yup from "yup"
import {Link} from "react-router-dom";
import classes from "./Login_index.module.css"
import { withRouter } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
const eye = <FontAwesomeIcon icon={faEye} />;

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

    const { history } = props;
    const handleMenuClick = (pageURL) => {
        history.push(pageURL);
    };
    const [passwordShown, setPasswordShown] = useState(false);
    return (
        <div className="LoginPage">
            <header>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3219/logo.svg" alt=""/>
                <h1>Login</h1>
            </header>
            <Formik
                initialValues={{email: '', password: ''}}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values)
                    axios
                        .post('https://jsonplaceholder.typicode.com/todos',
                            {
                                email: values["email"],
                                password: values["password"]
                            }
                        ).then(res => console.log(res))
                        .catch(err => console.log(err))
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
                                <div className="pass-wrapper"><label>Password </label></div>
                                <Field
                                    placeholder="password"
                                    name="password"
                                    type={passwordShown ? "text" : "password"}
                                    id="myInput"

                                />
                                <i onClick={togglePasswordVisibility}>{eye}</i>
                                <ErrorMessage name="password"/>
                            </div>
                        </div>
                        <div >
                            <Link to="/resetpassword1"   >Forgot Password?</Link>
                        </div>

                        <div>
                            <button type="submit"  onClick={() => handleMenuClick("/register")}>Create!</button>
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
export default withRouter (LoginPage)
