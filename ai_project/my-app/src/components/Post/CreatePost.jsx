import React, {useState} from 'react'
import {Formik, Field, ErrorMessage, Form,} from "formik";
import *as Yup from "yup"
import {Link} from "react-router-dom";
import classes from "./Createpost.module.css"
import {withRouter} from 'react-router-dom'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-solid-svg-icons";
import logo from "../../music.svg"
import {FacebookLoginButton, GoogleLoginButton} from "react-social-login-buttons";
import axios from "axios";
import checkAuth from "../../checkAuth";
import {Multiselect} from 'multiselect-react-dropdown';
import PlacesAutocomplete from "react-places-autocomplete";
const eye = <FontAwesomeIcon icon={faEye}/>;

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .required('Required')
});


const CreatePost = (props) => {
    const [address, setAddress] = React.useState("");

    const handleChangeAddress = (value) => {
        setAddress(value)
    }

    const handleSelectAddress = (value) => {
        setAddress(value)
    }
    const {history} = props;
    const handleMenuClick = (pageURL) => {
        history.push(pageURL);
    };
    const [error, setError] = useState(" ");
    const genre = {
        options: [{name: 'Phonk', id: 1}, {name: 'Rock', id: 2}, {name: 'Classical', id: 3}, {
            name: 'Pop',
            id: 4
        }, {name: 'Hip-hop', id: 5}]
    }
    return (
        <div>
            <div>
                <header>
                    <img src={logo} alt=""/>
                    <h2>Create post</h2>
                </header>
                <Formik
                    initialValues={{email: '', password: ''}}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        console.log(values);
                        axios
                            .post('http://localhost:8080/login',
                                {
                                    email: values["email"],
                                    password: values["password"]
                                }
                            ).then(res => {
                            localStorage.setItem('token', res.data.token)
                            console.log(res)
                            checkAuth.isAuthorised = true;
                            const Check = checkAuth.isAuthorised
                            localStorage.setItem("check", JSON.stringify(Check))
                            console.log(localStorage.getItem("check"))
                            props.history.push("/users");
                        })
                            .catch(err => {
                                console.log(err)
                                if (err.response) {
                                    console.log(err.response.status);
                                    //setError(err.response.status)
                                    if (err.response.status === 405)
                                        setError("Wrong password or email")
                                    // const error= localStorage.getItem("error")
                                    // console.log(error);

                                }
                            })
                        console.log(localStorage.getItem('token'))


                    }}>
                    {({errors, touched}) => (
                        <Form
                            //    onSubmit={this.handleSubmit}
                        >
                            <div>
                                {error}
                            </div>
                            <div>
                                <div>
                                    <div><label>Name of post </label></div>
                                    <Field
                                        //className={classes.field}
                                        placeholder="text"
                                        name="name_of_post"
                                        type="text"

                                    />
                                    <div>
                                        <ErrorMessage name="name_of_post"/>
                                    </div>
                                </div>
                                <div>
                                    <div><label>Genre </label></div>
                                    <Multiselect
                                        options={genre.options} // Options to display in the dropdown
                                        //selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                                        // onSelect={this.onSelect} // Function will trigger on select event
                                        //onRemove={this.onRemove} // Function will trigger on remove event
                                        displayValue="name" // Property name to display in the dropdown options
                                    />
                                    <div>
                                        <ErrorMessage name="genre"/>
                                    </div>
                                </div>
                                <div>
                                    <div><label>primary skills </label></div>
                                    {/*<div>Rhytnm Guitar:    <input type="checkbox" name="myCheckbox" value="1"*/}
                                    {/*                              onClick="selectOnlyThis(this)"/></div>*/}
                                    {/*<div>Acoustic Guitar: <input type="checkbox" name="myCheckbox" value="2"*/}
                                    {/*                             onClick="selectOnlyThis(this)"/></div>*/}
                                    {/*<div>Keyboard: <input type="checkbox" name="myCheckbox" value="3"*/}
                                    {/*                             onClick="selectOnlyThis(this)"/></div>*/}
                                    {/*<div>Piano:<input type="checkbox" name="myCheckbox" value="4"*/}
                                    {/*                             onClick="selectOnlyThis(this)"/></div>*/}
                                    {/*<div>Vocalist:<input type="checkbox" name="myCheckbox" value="5"*/}
                                    {/*                             onClick="selectOnlyThis(this)"/></div>*/}
                                    {/*<div>Background Singer:<input type="checkbox" name="myCheckbox" value="5"*/}
                                    {/*                              onClick="selectOnlyThis(this)"/></div>*/}
                                    {/*<div>Harmonics:<input type="checkbox" name="myCheckbox" value="5"*/}
                                    {/*                              onClick="selectOnlyThis(this)"/></div>*/}

                                    <div>
                                        <ErrorMessage name="skills"/>
                                    </div>

                                </div>
                                <div>
                                    <div><label>Location </label></div>
                                    <div>
                                        <PlacesAutocomplete
                                            value={address}
                                            onChange={handleChangeAddress}
                                            onSelect={handleSelectAddress}
                                        >
                                            {({
                                                  getInputProps,
                                                  suggestions,
                                                  getSuggestionItemProps,
                                                  loading,
                                              }) => (
                                                <div>
                                                    <input
                                                        {...getInputProps({
                                                            placeholder: "Enter Address...",
                                                        })}
                                                    />
                                                    <div>
                                                        {loading && <div>Loading...</div>}
                                                        {suggestions.map((suggestion) => {
                                                            const style = suggestion.active
                                                                ? { backgroundColor: "#a83232", cursor: "pointer" }
                                                                : { backgroundColor: "#ffffff", cursor: "pointer" }

                                                            return (
                                                                <div {...getSuggestionItemProps(suggestion, { style })}>
                                                                    {suggestion.description}
                                                                </div>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                            )}
                                        </PlacesAutocomplete>
                                    </div>



                                </div>
                                <div>
                                    <div><label>video/photo </label></div>
                                    <Field
                                        placeholder="video"
                                        name="video"
                                        type="text"
                                    />

                                    <div>
                                        <ErrorMessage name="video"/>
                                    </div>

                                </div>
                                <div>
                                    <div><label>video/photo </label></div>
                                    <Field
                                        placeholder="video"
                                        name="video"
                                        type="text"
                                    />

                                    <div>
                                        <ErrorMessage name="video"/>
                                    </div>

                                </div>
                                <div>
                                    <div><label>description </label></div>
                                    <textarea>

                               </textarea>

                                </div>
                            </div>

                            <div>
                                <button type="submit">Add post!</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}
export default withRouter(CreatePost)