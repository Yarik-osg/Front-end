import React from "react";


const PostPage = (props) => {



    return(
        <div>
            Here is content of post with id
            {props.match.params.id}
        </div>

    )
}

export default PostPage