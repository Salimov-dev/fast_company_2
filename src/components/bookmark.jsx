import React, { useState } from "react";

const BookMark = ({ status, ...rest }) => {
  return (
    <button className="bookmark-icon" {...rest}>
      <i className={"bi bi-bookmark" + (status ? "-heart-fill" : "")}></i>
    </button>
  );
};

export default BookMark;
