import React from "react";

const Qualities = (props) => {
  const Qualities = props.qualities.map((item, id) => {
    const getRandomKey = () => {
      return item._id + Math.round(Math.random() * 100);
    };

    return (
      <>
        <span
          // key={item.id}
          key={getRandomKey()}
          className={`badge text-bg-${item.color} m-1 qualities`}
        >
          {item.name}
        </span>
      </>
    );
  });

  return Qualities;
};

export default Qualities;
