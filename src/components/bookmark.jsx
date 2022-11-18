import React, { useState } from "react";

const Bookmarks = (props) => {
  const [bookmark, setBookmarks] = useState(false);

  const handleAddToBookmarks = () => {
    bookmark === false ? setBookmarks(true) : setBookmarks(false);
  };

  return (
    <button className="btn-sm bookmark-icon">
      <i
        key={props._id}
        class={
          bookmark === true ? "bi bi-bookmark-star-fill" : "bi bi-bookmark-star"
        }
        onClick={handleAddToBookmarks}
      ></i>
    </button>
  );
};

export default Bookmarks;
