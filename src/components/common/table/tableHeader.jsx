import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Caret from "../caret";

const TableHeader = ({ onSort, selectedSort, columns, data }) => {
    const [caret, setCaret] = useState(false);

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

    useEffect(() => {
        selectedSort.order === "desc" ? setCaret(true) : setCaret(false);
    }, [selectedSort.order]);

    const checkItem = (item) => {
        return selectedSort.path;
    };

    return (
        <thead className="table">
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
                        <div className="d-flex bd-highlight">
                            {columns[column].name}
                            <button className="page-link">
                                {columns[column].path ===
                                    checkItem(selectedSort.path) && (
                                    <Caret onCaret={caret} />
                                )}
                            </button>
                        </div>
                    </th>
                ))}
            </tr>
        </thead>
    );
};

TableHeader.propTypes = {
    selectedSort: PropTypes.object.isRequired,
    columns: PropTypes.object.isRequired,
    onSort: PropTypes.func.isRequired,
    data: PropTypes.array,
    handleChangeCaret: PropTypes.func
};

export default TableHeader;
