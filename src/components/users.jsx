import React, { useState, useEffect } from "react";
import User from "./user";
import RenderHeadings from "./headings";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
import PropTypes from "prop-types";
import GroupList from "./groupList";
import api from "../api";
import SearchStatus from "./searchStatus";

const Users = ({ users, idProperty, ...rest }) => {
    const pageSize = 3;

    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfessions] = useState();
    const [selectedProf, setSelectedProf] = useState();

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfessions(data));
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf]);

    const filteredUsers = selectedProf
        ? users.filter(
              (user) =>
                  JSON.stringify(user.profession) ===
                  JSON.stringify(selectedProf)
          )
        : users;

    const count = filteredUsers.length;
    const userCrop = paginate(filteredUsers, currentPage, pageSize);
    const clearFilter = () => {
        setSelectedProf();
    };

    useEffect(() => {
        if (userCrop.length === 0 && currentPage > 1) {
            return setCurrentPage(currentPage - 1);
        }
    }, [userCrop]);

    const handleProfessionSelect = (item) => {
        setSelectedProf(item);
    };

    return (
        <div className="d-flex">
            {professions && (
                <div className="d-flex flex-column flex-shrink-0 p-3">
                    <GroupList
                        selectedItem={selectedProf}
                        items={professions}
                        onItemSelect={handleProfessionSelect}
                    />
                    <button
                        className="btn btn-secondary mt-2"
                        onClick={clearFilter}
                    >
                        Очистить
                    </button>
                </div>
            )}
            <div className="d-flex flex-column">
                <SearchStatus length={count} />
                {count > 0 && (
                    <table className="table table-dark table-striped">
                        <thead className="table-dark">
                            <tr className="renderPhrase">
                                <RenderHeadings />
                            </tr>
                        </thead>
                        <tbody>
                            {userCrop.map((user) => (
                                <User
                                    key={user[idProperty]}
                                    {...rest}
                                    {...user}
                                />
                            ))}
                        </tbody>
                    </table>
                )}
                <div className="d-flex justify-content-center">
                    <Pagination
                        itemsCount={count}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        onPageChange={handlePageChange}
                        count={count}
                    />
                </div>
            </div>
        </div>
    );
};

Users.defaultProps = {
    idProperty: "_id"
};

Users.propTypes = {
    idProperty: PropTypes.string.isRequired,
    users: PropTypes.array.isRequired
};

export default Users;
