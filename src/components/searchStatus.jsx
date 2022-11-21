import React from "react";

const SearchStatus = ({ length }) => {
    const lastOne = length.toString().slice(-1);
    const rowsQuanity = length.toString();

    if (lastOne == 0 && rowsQuanity < 10) {
        return (
            <span className="badge rounded-pill text-bg-danger m-3 counterFont">
                увы, {length} человек готовы тусануть с тобой сегодня, ты ни
                кому не нужен
            </span>
        );
    } else if (lastOne == 1 && rowsQuanity < 10) {
        return (
            <span className="badge rounded-pill text-bg-warning m-3 counterFont">
                всего {length} человек готов тусануть с тобой сегодня
            </span>
        );
    } else if (rowsQuanity < 10 && lastOne >= 2 && lastOne <= 4) {
        return (
            <span className="badge rounded-pill text-bg-primary m-3 counterFont">
                {length} человека тусанёт с тобой сегодня
            </span>
        );
    }
    return (
        <span className="badge rounded-pill text-bg-success m-3 counterFont">
            {length} человек тусанёт с тобой сегодня
        </span>
    );
};

export default SearchStatus;
