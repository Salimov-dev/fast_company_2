import React, { useEffect, useState } from "react";
// import api from "./api/index";
import api from "./api";
import Users from "./components/users";

const App = () => {
    const [users, setUsers] = useState();
    console.log(Array.isArray(api.users));

    useEffect(() => {
        api.users.fetchAll().then((data) => {
            setUsers(Object.assign(data));
        });

        // api.users.fetchAll().then((data) => setUsers(data));
    }, []);

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
            {users && (
                <Users
                    users={users}
                    onDelete={handleDeleteUser}
                    onToggleBookMark={handleToggleBookMark}
                />
            )}
        </>
    );
};

export default App;
