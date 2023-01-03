import React from "react";
import PropTypes from "prop-types";

const Qualitie = ({ color, name }) => {
    return (
        <>
            <span className={`badge text-bg-${color} m-1 qualities`}>
                {name}
            </span>
        </>
    );
};

Qualitie.propTypes = {
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default Qualitie;
