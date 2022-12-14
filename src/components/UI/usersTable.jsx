import React from "react";
import PropTypes from "prop-types";
import BookMark from "./bookMark";
import Qualitites from "./qualities/qualitiesList";
import Table from "../common/table";
import { Link } from "react-router-dom";

const UserTable = ({
    users,
    onSort,
    selectedSort,
    onToggleBookMark,
    onDelete,
    sortedUsers
}) => {
    const columns = {
        name: {
            path: "name",
            name: "Имя",
            component: (user) => (
                <Link to={`/users/${user._id}`}>{user.name}</Link>
            )
        },
        qualities: {
            name: "Качества",
            component: (user) => <Qualitites qualities={user.qualities} />
        },
        professions: { path: "profession.name", name: "Профессия" },
        completedMeetings: {
            path: "completedMeetings",
            name: "Встретился раз"
        },
        rate: { path: "rate", name: "Оценка" },
        bookmark: {
            path: "bookmark",
            name: "Избранное",
            component: (user) => (
                <BookMark
                    status={user.bookmark}
                    onClick={() => onToggleBookMark(user._id)}
                />
            )
        },
        delete: {
            component: (user) => (
                <button
                    className="btn btn-danger"
                    onClick={() => onDelete(user._id)}
                >
                    Удалить
                </button>
            )
        }
    };
    return (
        <Table
            onSort={onSort}
            selectedSort={selectedSort}
            columns={columns}
            data={users}
            sortedUsers={sortedUsers}
        />
    );
};

UserTable.propTypes = {
    users: PropTypes.array.isRequired,
    currentSort: PropTypes.object,
    selectedSort: PropTypes.object.isRequired,
    onSort: PropTypes.func.isRequired,
    onToggleBookMark: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    data: PropTypes.array,
    sortedUsers: PropTypes.array
};

export default UserTable;
