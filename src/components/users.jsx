import React, { useState } from "react";
import SearchStatus from "./searchStatus";
import RenderQualities from "./qualitie";
import User from "./user";
import RenderHeadings from "./headings";
import api from "../api";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";

const Users = ({ users, ...rest }) => {
    const count = users.length;
    const pageSize = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const userCrop = paginate(users, currentPage, pageSize);

    return (
        <>
            {count > 0 && (
                <table className="table table-dark table-striped">
                    <thead className="table-dark">
                        <tr className="renderPhrase">
                            <RenderHeadings />
                        </tr>
                    </thead>
                    <tbody>
                        {userCrop.map((user) => (
                            <User key={user._id} {...rest} {...user} />
                        ))}
                    </tbody>
                </table>
            )}
            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </>
    );
};

export default Users;
