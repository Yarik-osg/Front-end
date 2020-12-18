import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import axios from "axios";
import checkAuth from "../../checkAuth";
import classes from "../registration_page/Registration_index.module.css";
import {Multiselect} from 'multiselect-react-dropdown';
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    firstName: Yup.string()
        .required('Required'),
    lastName: Yup.string()
        .required('Required'),

});

const UserEditPage = (props) => {
    const instruments = {
        options: [{name: 'Guitar', id: 1}, {name: 'Piano', id: 2}, {name: 'Vocal', id: 3}, {
            name: 'Drums',
            id: 4
        }, {name: 'Bass', id: 5}]
    }

    return(
        <div>
            <Formik
                initialValues={{firstName: '', lastName: '', instruments: '', description: ''}}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values)
                }}>
                {({errors, touched}) => (
                    <Form>
                        <div >
                            {/*{error}*/}
                        </div>
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
                                <ErrorMessage  name="lastName"/>
                            </div>
                            <div>
                                <header><label>Instrument</label></header>
                                <Multiselect
                                    name = "instruments"
                                    options={instruments.options} // Options to display in the dropdown
                                    //selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                                    // onSelect={this.onSelect} // Function will trigger on select event
                                    //onRemove={this.onRemove} // Function will trigger on remove event
                                    displayValue="name" // Property name to display in the dropdown options
                                />

                            </div>

                            <div>
                                <div><label>Description</label></div>
                                <Field
                                    placeholder="description"
                                    name="description"
                                    type="textarea"
                                />
                                <ErrorMessage  name="description"/>
                            </div>

                        </div>
                        <div>
                            <button className={classes.btn}

                                    type="submit">
                               Done!
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default UserEditPage