import React from "react";
import SearchBox from "../SearchBox/SearchBox";
import FilterList from "../FilterList/FilterList";
import "./NavBar.scss";

const NavBar = ({
  handleInput,
  setBeers,
  searchWords,
  handleInputChange,
  setFilteredHighAlc,
  setFilteredAcidity,
  setFilteredClassicRange,
  filterHighAlc,
  filterAcidity,
  filterClassicRange,
}) => {
  return (
    <div>
      <h2 className="search-heading">Search</h2>
      <SearchBox
        label={"Beers"}
        searchWords={searchWords}
        handleInput={handleInput}
        setBeers={setBeers}
      />
      <FilterList
        filterHighAlc={filterHighAlc}
        filterAcidity={filterAcidity}
        filterClassicRange={filterClassicRange}
        handleInputChange={handleInputChange}
        setFilteredHighAlc={setFilteredHighAlc}
        setFilteredAcidity={setFilteredAcidity}
        setFilteredClassicRange={setFilteredClassicRange}
      />
    </div>
  );
};
export default NavBar;
