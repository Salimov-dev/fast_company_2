import React from "react";

const Caret = (onCaret) => {
    return (
        <i
            className={
                "bi bi-caret-" + (onCaret.onCaret ? "down-fill" : "up-fill")
            }
        ></i>
    );
};

export default Caret;
