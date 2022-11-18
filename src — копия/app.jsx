import React, { useState } from "react";
import Users from "./components/users";
// import UsersList from "./components/usersList";

const App = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  return <Users />;
};

export default App;
