import React from "react";

import "./FilterItem.scss";

const FilterItem = ({
  label1,
  label2,
  label3,
  filterHighAlc,
  filterAcidity,
  filterClassicRange,
  onChange,
  value,
}) => {
  return (
    <div className="filter-list">
      <label className="filter-list__highAlcohol">{label1}</label>
      <input
        id={"highAlcohol"}
        type="checkbox"
        name={label1}
        onChange={onChange}
        value={value}
        filterHighAlc={filterHighAlc}
        className="filter-list__checkbox"
      />
      <br />
      <label className="filter-list__classicRange">{label2}</label>
      <input
        id={"classicRange"}
        type="checkbox"
        name={label2}
        onChange={onChange}
        value={value}
        filterAcidity={filterAcidity}
        className="filter-list__checkbox"
      />
      <br />
      <label className="filter-list__highAcidity">{label3}</label>
      <input
        id={"phAcidity"}
        type="checkbox"
        name={label3}
        onChange={onChange}
        value={value}
        filterClassicRange={filterClassicRange}
        className="filter-list__checkbox"
      />
    </div>
  );
};

export default FilterItem;
