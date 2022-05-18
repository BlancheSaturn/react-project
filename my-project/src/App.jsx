import React, { useState } from "react";
import "./App.scss";
import BestBeerCard from "./component/BestBeerCard/BestBeerCard";
import NavBar from "./component/NavBar/NavBar";

import beer from "./data/beer";

const App = () => {
  const [searchWords, setSearchWords] = useState("");
  const [beers, setBeers] = useState([]);
  const [filterHighAlc, setFilteredHighAlc] = useState(false);
  const [filterAcidity, setFilteredAcidity] = useState(false);
  const [filterClassicRange, setFilteredClassicRange] = useState(false);

  const handleInput = (event) => {
    setSearchWords(event.target.value);
  };

  const filteredBeers = beer.filter((beer) => {
    const beersLower = beer.name.toLowerCase();
    const searchWordsLower = searchWords.toLocaleLowerCase();

    if (beersLower.includes(searchWordsLower)) {
      return true;
    } else {
      return false;
    }
  });

  const handleInputChange = (event) => {
    if (event.target.id === "highAlcohol") {
      setFilteredHighAlc(event.target.checked);
    }
    if (event.target.id === "phAcidity") {
      setFilteredAcidity(event.target.checked);
    }

    if (event.target.id === "classicRange") {
      setFilteredClassicRange(event.target.checked);
    }
  };

  const filterHighAlcohol = filteredBeers.filter((beer) => beer.abv);
  if (beer.abv > 6.0) {
    return true;
  }
  const filterAcidic = filteredBeers.filter((beer) => beer.pv);
  if (beer.ph < 4) {
    return true;
  }

  const filterClassic = filteredBeers.filter((beer) => beer.first_brewed);
  if (beer.first_brewed <= "04/2008") {
    return true;
  }

  return (
    <div className="app">
      <section className="beer-container">
        <div className="beer-container__nav">
          <section className="search">
            <NavBar
              handleInput={handleInput}
              setBeers={setBeers}
              searchWords={searchWords}
              filterHighAlc={filterHighAlc}
              filterAcidity={filterAcidity}
              filterClassicRange={filterClassicRange}
              handleInputChange={handleInputChange}
              setFilteredHighAlc={setFilteredHighAlc}
              setFilteredAcidity={setFilteredAcidity}
              setFilteredClassicRange={setFilteredClassicRange}
            />
          </section>
        </div>
        <div className="beer-container__content">
          {beers && <BestBeerCard beersArr={filteredBeers} />}
          {/* {filterHighAlc && <BestBeerCard beersArr={filterHighAlcohol} />}
          {filterAcidity && <BestBeerCard beersArr={filterAcidic} />}
          {filterClassicRange && <BestBeerCard beersArr={filterClassic} />} */}
        </div>
      </section>
    </div>
  );
};
export default App;
