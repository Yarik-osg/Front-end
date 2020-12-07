import React from "react"

const Posts = ({posts, loading}) =>{
    if(loading){
        return <h2>Loading...</h2>
    }
    return <ul className= "list-group mb-5">
        {posts.map(post => (
            <li key = {post.id} className="list-group-item ">
                <p className= "text-justify"> {post.id}. {post.email} </p>
            </li>
        ))}
    </ul>
}

export default Posts