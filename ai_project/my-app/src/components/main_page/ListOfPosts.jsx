import React, {useState, useEffect}  from "react";
import axios from "axios"
import Posts from "./Posts";
import Pagination from "./Pagination";


const ListOfPosts = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(10)
    const [totalElements, setTotalElements] = useState(10)
    useEffect( () => {

        setLoading(true)
        axios
                .get(`http://localhost:8080/users?page=${currentPage-1}&size=${postsPerPage}`)
            .then(res => {
                setPosts(res.data.content)
                setTotalElements(res.data.totalElements)
                console.log(res.data.totalElements)

            })
            .catch(err => console.log(err))
        setLoading(false)
    }, [postsPerPage, currentPage])
        //console.log(posts)

    // const indexOfLastPost = currentPage *  postsPerPage
    // const indexOfFirstPost = indexOfLastPost - postsPerPage
    //const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    const perPage = (postsPerPage) => {
        setPostsPerPage(postsPerPage)
        setCurrentPage(1)
    }

    return(
        <div>
            <h1>Testing Pagination</h1>
            <div className="container mt-5">
                <Posts posts={posts} loading={loading} />
                <Pagination postsPerPage={postsPerPage} totalPosts={totalElements} paginate={paginate} perPage = {perPage}/>
            </div>

        </div>

    )

}

export default ListOfPosts