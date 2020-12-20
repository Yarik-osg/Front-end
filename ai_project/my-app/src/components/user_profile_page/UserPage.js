import React from "react";
import Navbar from "../navbar/Navbar";


const UserPage = (props) => {


    const {history} = props;
    const handleMenuClick = (pageURL) => {
        history.push(pageURL);
    };

    return(

        <div>
            <Navbar />
            <h2>This is the user's page</h2>
            <button onClick={() => handleMenuClick("/useredit")}>Edit</button>
        </div>
    )
}

export default UserPage