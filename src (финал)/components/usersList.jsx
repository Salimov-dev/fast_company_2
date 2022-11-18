import React from "react";
import RenderQualities from "./qualitie";
import Bookmarks from "./bookmark";

const UsersList = (props) => {

  const handleDeleteUser = (id) => {
    const newRowsUsers = props.items.filter((counter) => counter._id !== id);
    props.setItems(newRowsUsers);
  };

  return props.items.map((item, id) => {
    return (
      <tr className="table-active rowUser" key={id}>
        <td>{item.name}</td>
        <td>
          <RenderQualities items={props.items} qualities={item.qualities} />
        </td>
        <td>{item.profession.name}</td>
        <td className="completedMeetings">{item.completedMeetings}</td>
        <td>{item.rate} /5</td>
        <td><Bookmarks items={props.items} id={item._id}/></td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => handleDeleteUser(item._id)}
          >
            Удалить
          </button>
        </td>
      </tr>
    );
  });
};

export default UsersList;
