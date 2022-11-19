import React from "react";

const Qualitie = (props) => {
  return (
    <>
      <span className={`badge text-bg-${props.color} m-1 qualities`}>
        {props.name}
      </span>
    </>
  );
};

export default Qualitie;
