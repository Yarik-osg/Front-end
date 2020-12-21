import React from "react"
import {Grid} from "@material-ui/core";
import CardPost from "../card/CardPost";
const Posts = ({posts, loading}) =>{
    if(loading){
        return <h2>Loading...</h2>
    }
    // return <ul className= "list-group mb-5">
    //     {posts.map(post => (
    //         <li key = {post.id} className="list-group-item ">
    //             <p className= "text-justify"> {post.id}. {post.email} </p>
    //         </li>
    //     ))}
    // </ul>

    return (
        <Grid container spacing={4}>
                {posts.map(post => (
            <Grid item >
                <CardPost id = {post.id}
                          //username = {post.postHeader}
                    title = {post.postHeader}
                          description = {post.description}
                          address={post.location}
                          id_user={post.user_id}
                />
            </Grid>
                    ))}
        </Grid>
    )
}

export default Posts