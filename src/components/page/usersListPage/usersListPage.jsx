import React, { useState, useEffect, useMemo } from "react";
import Pagination from "../../common/pagination";
import { paginate } from "../../../utils/paginate";
import PropTypes from "prop-types";
import GroupList from "../../common/groupList";
import api from "../../../api";
import SearchStatus from "../../UI/searchStatus";
import UserTable from "../../UI/usersTable";
import _ from "lodash";

const UsersListPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfessions] = useState();
    const [selectedProf, setSelectedProf] = useState();
    const [sortBy, setSortBy] = useState({ path: "name", order: "asc" });
    const pageSize = 4;

    const [users, setUsers] = useState();
    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
    }, []);

    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId));
    };
    const handleToggleBookMark = (id) => {
        setUsers(
            users.map((user) => {
                if (user._id === id) {
                    return { ...user, bookmark: !user.bookmark };
                }
                return user;
            })
        );
    };

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfessions(data));
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf]);

    const handleProfessionSelect = (item) => {
        setSelectedProf(item);
    };

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const handleSort = (item) => {
        setSortBy(item);
    };

    const filteredUsers = selectedProf
        ? users.filter(
              (user) =>
                  JSON.stringify(user.profession) ===
                  JSON.stringify(selectedProf)
          )
        : users;

    const sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order]);

    const [searchQuery, setSearchQuery] = useState("");
    const searchedUsers = useMemo(() => {
        return sortedUsers.filter((user) =>
            user.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery, sortedUsers]);

    useEffect(() => {
        setSearchQuery("");
    }, [selectedProf]);

    const userCrop = paginate(searchedUsers, currentPage, pageSize);
    const clearFilter = () => {
        setSelectedProf();
    };

    if (users) {
        if (userCrop.length === 0 && currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }

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
                            ????????????????
                        </button>
                    </div>
                )}
                <div className="d-flex flex-column container-fluid">
                    <SearchStatus length={searchedUsers.length} />
                    <div className="input-group mb-3 ">
                        <input
                            type="text"
                            className="form-control mb-3"
                            placeholder="Search..."
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        {(searchedUsers.length > 0)
                        ? (<UserTable
                            users={userCrop}
                            onDelete={handleDelete}
                            onToggleBookMark={handleToggleBookMark}
                            onSort={handleSort}
                            selectedSort={sortBy}
                            sortedUsers={sortedUsers}
                            />)
                        : (
                            <div className="container-fluid">
                                <h2>???????????????????????? ???? ??????????????</h2>
                            </div>
                        )}
                    </div>
                    {searchedUsers.length > pageSize && (
                        <div className="d-flex justify-content-center">
                            <Pagination
                                itemsCount={searchedUsers.length}
                                pageSize={pageSize}
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                                onPageChange={handlePageChange}
                                count={searchedUsers.length}
                            />
                        </div>
                    )}
                </div>
            </div>
        );
    }
    return "loading";
};

UsersListPage.propTypes = {
    users: PropTypes.array
};

export default UsersListPage;
