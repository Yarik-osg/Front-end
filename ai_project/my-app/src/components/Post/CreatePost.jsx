import React, {Fragment, useState} from 'react'
import {Formik, Field, ErrorMessage, Form, useField, FieldAttributes, FieldArray} from "formik";

import {TextField, Button, Checkbox, Radio, FormControlLabel, Select, MenuItem} from "@material-ui/core";
import *as Yup from "yup"
import {Link} from "react-router-dom";
import classes from "./Createpost.module.css"
import {withRouter} from 'react-router-dom'
import logo from "../../music.svg"
import axios from "axios";
import {Multiselect} from 'multiselect-react-dropdown';
import LocationApi from "./Location";



const validationSchema = Yup.object().shape({
    name_of_post: Yup.string()
        .required('Required'),
    // genre: Yup.string()
    //     .required('Required'),
    // PlacesAutocomplete: Yup.string()
    //      .required('Required'),
    description: Yup.string()
        .required('Required')
});

const CreatePost = (props) => {




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
                    initialValues={{name_of_post: '', description: '', address: '', photo: null}}
                    validationSchema={validationSchema}

                    onSubmit={(values) => {
                        console.log(values);
                        let data = new FormData
                        data.append('photo',values.photo)
                        axios
                            .post('http://localhost:8080/post',
                                {
                                    name_of_post: values["name_of_post"],
                                    description: values["description"],
                                    address: values["address"],
                                    photo: values["data"]
                                }
                            ).then(res => {
                            console.log(res)
                        })
                            .catch(err => {
                                console.log(err)
                                if (err.response) {
                                    console.log(err.response.status);

                                    if (err.response.status === 405)
                                        setError("Wrong password or email")


                                }
                            })
                        console.log(values);
                    }}>

                    {(formProps) => (
                        <Form
                        >
                            <div>
                                {error}
                            </div>
                            <div>
                                <div>
                                    <div><label>Name of post </label></div>
                                    <Field
                                        placeholder="text"
                                        name="name_of_post"
                                        type="text"

                                    />
                                    <div>
                                        <ErrorMessage name="name_of_post"/>
                                    </div>
                                </div>

                                <div>
                                {/*    <div><label>Genre </label></div>*/}
                                {/*    <div>*/}
                                {/*        <FieldArray name="genre">*/}
                                {/*            <Multiselect*/}
                                {/*                //name="genre"*/}
                                {/*                options={genre.options} // Options to display in the dropdown*/}
                                {/*                //selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown*/}
                                {/*                // onSelect={this.onSeясясlect} // Function will trigger on select event*/}
                                {/*                //onRemove={this.onRemove} // Function will trigger on remove event*/}
                                {/*                displayValue="name" // Property name to display in the dropdown options*/}
                                {/*            />*/}
                                {/*        </FieldArray>*/}
                                    </div>
                                <div>
                                    {/*        <ErrorMessage name="genre"/>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                    {/*<div>*/}
                                    {/*    <div><label>primary skills </label></div>*/}
                                    {/*    <div>*/}
                                    {/*    /!*<div>Rhytnm Guitar:    <input type="checkbox" name="myCheckbox" value="1"*!/*/}
                                    {/*    /!*                              onClick="selectOnlyThis(this)"/></div>*!/*/}
                                    {/*    /!*<div>Acoustic Guitar: <input type="checkbox" name="myCheckbox" value="2"*!/*/}
                                    {/*    /!*                             onClick="selectOnlyThis(this)"/></div>*!/*/}
                                    {/*    /!*<div>Keyboard: <input type="checkbox" name="myCheckbox" value="3"*!/*/}
                                    {/*    /!*                             onClick="selectOnlyThis(this)"/></div>*!/*/}
                                    {/*    /!*<div>Piano:<input type="checkbox" name="myCheckbox" value="4"*!/*/}
                                    {/*    /!*                             onClick="selectOnlyThis(this)"/></div>*!/*/}
                                    {/*    /!*<div>Vocalist:<input type="checkbox" name="myCheckbox" value="5"*!/*/}
                                    {/*    /!*                             onClick="selectOnlyThis(this)"/></div>*!/*/}
                                    {/*    /!*<div>Background Singer:<input type="checkbox" name="myCheckbox" value="5"*!/*/}
                                    {/*    /!*                              onClick="selectOnlyThis(this)"/></div>*!/*/}
                                    {/*    /!*<div>Harmonics:<input type="checkbox" name="myCheckbox" value="5"*!/*/}
                                    {/*    /!*                              onClick="selectOnlyThis(this)"/></div>*!/*/}
                                    {/*    </div>*/}
                                    {/*    <div>*/}
                                    {/*        <ErrorMessage name="skills"/>*/}
                                </div>


                                <div><label>Location </label></div>
                                <Field name="address" component={LocationApi}/>
                                <div>
                                    <div><label>video/photo </label></div>
                                    <input type="file" name="photo" onChange={(event)=>formProps.setFieldValue('photo',event.target.files[0])}/>
                                </div>
                                <div>
                                    <div><label>description </label></div>
                                    <Field
                                        placeholder="description"
                                        name="description"
                                        type="text"
                                    />
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