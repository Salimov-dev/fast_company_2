import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookMark";

const User = ({
    _id,
    name,
    qualities,
    profession,
    completedMeetings,
    rate,
    onDelete,
    bookmark,
    onToggleBookMark
}) => {
    return (
        <tr className="table-active rowUser">
            <td>{name}</td>
            <td>
                {qualities.map((qual) => (
                    <Qualitie key={qual._id} {...qual} />
                ))}
            </td>
            <td>{profession.name}</td>
            <td className="completedMeetings">{completedMeetings}</td>
            <td>{rate} /5</td>
            <td>
                <BookMark
                    status={bookmark}
                    onClick={() => onToggleBookMark(_id)}
                />
            </td>
            <td>
                <button
                    className="btn btn-danger"
                    onClick={() => onDelete(_id)}
                >
                    Удалить
                </button>
            </td>
        </tr>
    );
};

export default User;
