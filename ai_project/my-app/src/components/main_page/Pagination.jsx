import React from "react";


const Pagination = ({postsPerPage, totalPosts, paginate, perPage}) => {
    const pageNumbers = [];

    const values = [5,10,15]
    for (let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++){
        pageNumbers.push(i)
    }
    return(
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key = {number} className="page-item">
                        <button onClick={() => paginate(number)} className= "page-link">
                            {number}
                        </button>
                    </li>
                ))}


                   {/* {values.map((size) => (
                {/* {values.map((size) => (

                        <li key={size} value={size} className="page-item ">
                            <button onClick={() => perPage(size)} className= "page-link">
                                {size}
                            </button>
                        </li>
                    ))}*/}

            </ul>
            <select className="page-link" onChange={event => perPage(event.currentTarget.value)}>
                {values.map((size) => (
                    <option key={size} value={size}>
                        {size}
                    </option>
                ))}
            </select>
        </nav>
    )
}

export default Pagination

