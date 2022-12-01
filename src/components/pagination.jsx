import React, { useEffect } from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = ({
    itemsCount,
    pageSize,
    onPageChange,
    currentPage,
    setCurrentPage
}) => {
    const pageCount = Math.ceil(itemsCount / pageSize);
    if (pageCount === 1) return setCurrentPage(1);
    const pages = _.range(1, pageCount + 1);

    useEffect(() => {
        setCurrentPage(pageCount);
    }, [pageCount]);

    return (
        <nav>
            <ul className="pagination">
                {pages.map((page) => (
                    <li
                        className={
                            "page-item " +
                            (page === currentPage ? "active" : "")
                        }
                        key={"page_" + page}
                    >
                        <button
                            className="page-link"
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
Pagination.propTypes = {
    setCurrentPage: PropTypes.func.isRequired,
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired
};

export default Pagination;
