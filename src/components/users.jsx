import React, { useState } from "react";
import SearchStatus from "./searchStatus";
import RenderQualities from "./qualitie";
import UsersList from "./usersList";
import RenderHeadings from "./headings";
import api from "../api";

const Users = (props) => {
  const [items, setItems] = useState(props.users);
  // console.log(items);
  // const {items} = props


  return (
    <React.Fragment>
      <SearchStatus items={items} />
      <table className="table table-dark table-striped">
        <thead className="table-dark">
          <tr className="renderPhrase">
            <RenderHeadings />
          </tr>
        </thead>
        <tbody>
          <UsersList items={items} setItems={setItems} />
          {/* <UsersList items={items}  /> */}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Users;
