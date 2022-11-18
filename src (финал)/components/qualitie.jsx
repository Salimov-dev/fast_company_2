import React from "react";

const RenderQualities = (props) => {
  const renderQualities = props.qualities.map((item) => {
    return (
      <>
        <span
          key={item.name}
          className={`badge text-bg-${item.color} m-1 qualities`}
        >
          {item.name}
        </span>
      </>
    );
  });

  return renderQualities;
};

export default RenderQualities;
