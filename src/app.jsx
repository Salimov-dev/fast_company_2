import React, { useState } from "react";
import api from "./api";
import Users from "./components/users";

const App = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  return <Users />;
};

export default App;
