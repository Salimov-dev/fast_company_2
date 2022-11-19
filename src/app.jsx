import React, { useState } from "react";
import api from "./api";
import Users from "./components/users";

const App = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  // const handleAddToBookmark = (id) => {
  //   const elementIndex = users.findIndex((bookmark) => bookmark._id === id);
  //   const newBookmark = [...users];

  //   !newBookmark[elementIndex].bookmark
  //     ? (newBookmark[elementIndex].bookmark = true)
  //     : (newBookmark[elementIndex].bookmark = false);
  //   setUsers(newBookmark);
  // };

  return (
    <React.Fragment>
      <Users users={users} />
      {/* <Users users={users} onToggleBookMark={handleAddToBookmark} /> */}
    </React.Fragment>
  );
};

export default App;
