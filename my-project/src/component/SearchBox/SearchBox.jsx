import React from "react";

import "./SearchBox.scss";

const SearchBox = ({ label, searchWords, handleInput }) => {
  const capitalizedLabel = label[0].toUpperCase() + label.slice(1);

  return (
    <div>
      <form className="search-box">
        <label htmlFor={label} className="search-box__label">
          {capitalizedLabel}
        </label>
        <input
          type="text"
          name={label}
          value={searchWords}
          onInput={handleInput}
          className="search-box__input"
        />
      </form>
    </div>
  );
};

export default SearchBox;
