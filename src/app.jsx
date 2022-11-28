import React, { useState } from "react";
import api from "./api";
import Users from "./components/users";
// import SearchStatus from "./components/searchStatus";

const App = () => {
    const [users, setUsers] = useState(api.users.fetchAll());

    const handleDeleteUser = (id) => {
        const newRowsUsers = users.filter((counter) => counter._id !== id);
        setUsers(newRowsUsers);
    };

    const handleToggleBookMark = (id) => {
        const elementIndex = users.findIndex((bookmark) => bookmark._id === id);
        const newBookmark = [...users];

        !newBookmark[elementIndex].bookmark
            ? (newBookmark[elementIndex].bookmark = true)
            : (newBookmark[elementIndex].bookmark = false);
        setUsers(newBookmark);
    };

    return (
        <>
            {/* <SearchStatus length={users.length} /> */}
            <Users
                users={users}
                onDelete={handleDeleteUser}
                onToggleBookMark={handleToggleBookMark}
            />
        </>
    );
};

export default App;
