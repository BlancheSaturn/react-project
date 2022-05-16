import React from "react";

import "./SearchBox.scss";

const NavBox = ({ label, searchWords, handleInput, beerArr }) => {
  const capitalizedLabel = label[0].toUpperCase() + label.slice(1);

  const filteredBeers = beerArr.filter((beer) => {
    const beerNameLower = beer.name.toLowerCase();
    const searchWordsLower = searchWords.toLocaleLowerCase();

    if (beerNameLower.includes(searchWordsLower)) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <form className="search-box">
      <label htmlFor={label} className="search-box__label">
        {capitalizedLabel}
      </label>
      {/* {HAVE THE WHOLE SEARCH TERM RATHER THAN THE SINGLE LETTER} */}
      <input
        type="text"
        name={label}
        value={searchWords}
        onInput={handleInput}
        className="search-box__input"
        beerArr={filteredBeers}
      />
    </form>
  );
};

export default NavBox;
