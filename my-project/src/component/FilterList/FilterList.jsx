import React from "react";
import FilterItem from "../FiltersItem/FilterItem";

import "./FilterList.scss";

const FilterList = ({
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
      <FilterItem
        label1={"High ABV(>6.0%)"}
        label2={"Classic Range"}
        label3={"Acidic(ph < 4)"}
        id={"highAlcohol"}
        onChange={handleInputChange}
        filterHighAlc={filterHighAlc}
        filterAcidity={filterAcidity}
        filterClassicRange={filterClassicRange}
        setFilteredHighAlc={setFilteredHighAlc}
        setFilteredAcidity={setFilteredAcidity}
        setFilteredClassicRange={setFilteredClassicRange}
      />
    </div>
  );
};
export default FilterList;
