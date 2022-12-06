import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ onSort, selectedSort, columns, data }) => {
    const handleSort = (item) => {
        if (selectedSort.path === item) {
            onSort({
                ...selectedSort,
                order: selectedSort.order === "asc" ? "desc" : "asc"
            });
        } else {
            onSort({ path: item, order: "asc" });
        }
    };

    console.log(selectedSort.order);

    return (
        <thead className="table-dark">
            <tr className="renderPhrase">
                {Object.keys(columns).map((column) => (
                    <th
                        key={column}
                        onClick={
                            columns[column].path
                                ? () => handleSort(columns[column].path)
                                : undefined
                        }
                        {...{ role: columns[column].path && "button" }}
                        scope="col"
                    >
                        {columns[column].name}
                    </th>
                ))}

                {/* <th scope="col">Качества</th>
                <th onClick={() => handleSort("profession.name")} scope="col">
                    Профессия
                </th>
                <th onClick={() => handleSort("completedMeetings")} scope="col">
                    Встретился (раз)
                </th>
                <th onClick={() => handleSort("rate")} scope="col">
                    Оценка
                </th>
                <th onClick={() => handleSort("bookmark")} scope="col">
                    Закладки
                </th>
                <th />
                <th scope="col">Удалить</th> */}
            </tr>
        </thead>
    );
};

TableHeader.propTypes = {
    selectedSort: PropTypes.object.isRequired,
    columns: PropTypes.object.isRequired,
    onSort: PropTypes.func.isRequired,
    data: PropTypes.array
};

export default TableHeader;
