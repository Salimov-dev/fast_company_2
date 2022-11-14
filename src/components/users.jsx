// import { tab } from "@testing-library/user-event/dist/tab";
import React, { useState } from "react";
import api from "../api";

const Users = () => {
  const users = api.users.fetchAll();

  const userRowChangche = (id) => {
    setItems((prevState) => prevState.filter((item) => item._id !== id));
  };

  const renderPhrase = () => {
    const lastOne = items.length.toString().slice(-1);
    const rowsQuanity = items.length.toString();
    if (lastOne == 0 && rowsQuanity < 10) {
      return (
        <span className="badge rounded-pill text-bg-danger m-3 counterFont">
          увы, {items.length} человек готовы тусануть с тобой сегодня, ты ни
          кому не нужен
        </span>
      );
    } else if (lastOne == 1 && rowsQuanity < 10) {
      return (
        <span className="badge rounded-pill text-bg-warning m-3 counterFont">
          всего {items.length} человек готов тусануть с тобой сегодня
        </span>
      );
    } else if (rowsQuanity < 10 && lastOne >= 2 && lastOne <= 4) {
      return (
        <span className="badge rounded-pill text-bg-primary m-3 counterFont">
          {items.length} человека тусанёт с тобой сегодня
        </span>
      );
    }
    return (
      <span className="badge rounded-pill text-bg-success m-3 counterFont">
        {items.length} человек тусанёт с тобой сегодня
      </span>
    );
  };

  const renderQualities = (item, qualities) => {
    return qualities.map((item) => (
      <span
        key={item.name}
        className={`badge text-bg-${item.color} m-1 qualities`}
      >
        {item.name}
      </span>
    ));
  };

  const headings = [
    "Имя",
    "Качества",
    "Профессия",
    "Встретился (раз)",
    "Оценка",
    "Удалить",
  ];

  const renderHeadings = () => {
    return headings.map((heading) => (
      <th scope="col" key={heading}>
        {heading}
      </th>
    ));
  };

  const [items, setItems] = useState(users);
  const rowUsers = items.map((item, id) => {
    return (
      <tr className="table-active rowUser" key={id}>
        <td>{item.name}</td>
        <td>{renderQualities(item, item.qualities)}</td>
        <td>{item.profession.name}</td>
        <td className="completedMeetings">{item.completedMeetings}</td>
        <td>{item.rate} /5</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => userRowChangche(item._id)}
          >
            Удалить
          </button>
        </td>
      </tr>
    );
  });

  return (
    <React.Fragment>
      {renderPhrase()}
      <table className="table table-dark table-striped">
        <thead className="table-dark">
          <tr className="renderPhrase">{renderHeadings()}</tr>
        </thead>
        <tbody>{rowUsers}</tbody>
      </table>
    </React.Fragment>
  );
};

export default Users;
