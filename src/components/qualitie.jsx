import React from "react";

const Qualitie = ({ color, name }) => {
    return (
        <>
            <span className={`badge text-bg-${color} m-1 qualities`}>
                {name}
            </span>
        </>
    );
};

export default Qualitie;
