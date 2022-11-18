import React, { useState } from "react";

const Bookmarks = (props) => {
  const handleAddToBookmarks = (id, bookmark) => {
    const elementIndex = props.items.findIndex(
      (bookmark) => bookmark._id === id
    );
    const newBookmark = [...props.items];

    newBookmark[elementIndex].bookmark === false
      ? (newBookmark[elementIndex].bookmark = true)
      : (newBookmark[elementIndex].bookmark = false);
    props.setItems(newBookmark);
  };

  return (
    <button className="btn-sm bookmark-icon">
      <i
        className={
          props.item.bookmark === true
            ? "bi bi-bookmark-star-fill"
            : "bi bi-bookmark-star"
        }
        onClick={() => handleAddToBookmarks(props.id, props.bookmark)}
      ></i>
    </button>
  );
};

export default Bookmarks;
