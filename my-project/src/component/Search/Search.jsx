import React from "react";

import "./Search.scss";

const Search = ({ label, searchWord, handleInput }) => {
  const capitalizedLabel = label[0].toUpperCase() + label.slice(1);

  return (
    <form className="search-box">
      <label htmlFor={label} className="search-box__label">
        {capitalizedLabel}
      </label>
      {/* {HAVE THE WHOLE SEARCH TERM RATHER THAN THE SINGLE LETTER} */}
      <input
        type="text"
        name={label}
        value={searchWord}
        onInput={handleInput}
        className="search-box__input"
      />
    </form>
  );
};

export default Search;
