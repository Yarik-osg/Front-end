import React, {useState, useEffect}  from "react";
import axios from "axios"
import Posts from "./Posts";
import Pagination from "./Pagination";


const ListOfPosts = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(15)

    useEffect( () => {
        setLoading(true)
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(res => setPosts(res.data))
            .catch(err => console.log(err))
        setLoading(false)
    }, [])
    console.log(posts)

    const indexOfLastPost = currentPage *  postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return(
      <div>
          <h1>Testing Pagination</h1>
            <div className="container mt-5">
            <Posts posts={currentPosts} loading={loading} />
            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
            </div>

      </div>

    )

}

export default ListOfPosts