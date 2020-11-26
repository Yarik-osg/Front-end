import React from "react"

const Posts = ({posts, loading}) =>{
    if(loading){
        return <h2>Loading...</h2>
    }
    return <ul className= "list-group mb-5">
        {posts.map(post => (
            <li key = {post.id} className="list-group-item ">
                <p className= "text-justify">{post.title}</p>
            </li>
        ))}
    </ul>
}

export default Posts