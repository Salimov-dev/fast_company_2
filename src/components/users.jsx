import React, { useState } from "react";
import SearchStatus from "./searchStatus";
import RenderQualities from "./qualitie";
import User from "./user";
import RenderHeadings from "./headings";
import api from "../api";

const Users = ({ users, ...rest }) => {
  return (
    <>
      {users.length > 0 && (
        <table className="table table-dark table-striped">
          <thead className="table-dark">
            <tr className="renderPhrase">
              <RenderHeadings />
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <User key={user._id} {...rest} {...user} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Users;
