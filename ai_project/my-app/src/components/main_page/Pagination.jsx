import React from "react";
import classes from './Pagination_index.module.css'

const Pagination = ({postsPerPage, totalPosts, paginate, perPage}) => {
    const pageNumbers = [];

    const values = [6,9,12]
    for (let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++){
        pageNumbers.push(i)
    }
    return(
        <nav>
            <ul className="pagination">
                <li>
                    <ul className="flex-lg-wrap pagination mt-3">
                    {pageNumbers.map(number => (
                        <li key = {number} className="page-item">
                            <button onClick={() => paginate(number)} className= "page-link">
                                {number}
                            </button>
                        </li>
                    ))}
                </ul>
                </li>
                <li>
                    <select className={classes.btn}  defaultValue="6" onChange={event => perPage(event.currentTarget.value)}>
                    {values.map((size) => (
                        <option key={size} value={size}>
                            {size}
                        </option>
                    ))}
                </select>
                </li>
            </ul>





        </nav>
    )
}

export default Pagination