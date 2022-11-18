import React, { useState } from "react";
import api from "./api";
import SearchStatus from "./components/searchStatus";
import Users from "./components/users";

const App = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  return (
    <React.Fragment>
      {/* <SearchStatus users={users} /> */}
      <Users users={users} />
      {/* <Users users={users} /> */}
    </React.Fragment>
  );
};

export default App;
