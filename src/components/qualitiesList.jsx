import React from "react";
import PropTypes from "prop-types";
import Qualitie from "./qualitie";

const QualititesList = ({ qualities }) => {
    return (
        <>
            {qualities.map((qual) => (
                <Qualitie key={qual._id} {...qual} />
            ))}
        </>
    );
};

QualititesList.propTypes = {
    qualities: PropTypes.array.isRequired
};

export default QualititesList;
