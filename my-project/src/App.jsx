import React, { useState, useEffect } from "react";
import "./App.scss";
import BestBeerCard from "./component/BestBeerCard/BestBeerCard";
import NavBar from "./component/NavBar/NavBar";

import beer from "./data/beer";

// NOTE - SEARCH FUNCTIONALITY WAS WORKING FINE WHILE TRYING TO FIX THE FILTER I'VE BROKEN IT.
const App = () => {
  const [searchWords, setSearchWords] = useState("");
  const [beers, setBeers] = useState([]);
  const [filterHighAlc, setFilteredHighAlc] = useState("");
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
    console.log(event);
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

  useEffect(() => {
    getBeers(filterHighAlc, filterAcidity, filterClassicRange);
  }, [filterHighAlc, filterAcidity, filterClassicRange]);

  const baseUrl = "https://api.punkapi.com/v2/beers";

  const getBeers = async (filterHighAlc, filterClassicRange) => {
    let queryParameter = "";
    let url = "";
    if (filterHighAlc) {
      queryParameter += "abv_gt=6";
    }
    if (filterClassicRange) {
      if (queryParameter) {
        queryParameter += "&";
      }
      queryParameter += "brewed_before=01-2010";
    }
    console.log(queryParameter);
    if (queryParameter) {
      url = baseUrl + "?" + queryParameter;
    } else {
      url = baseUrl + "/";
    }

    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    setBeers(data);
  };

  const filterAcidic = filteredBeers.filter((beer) => beer.pv);
  if (beer.ph < 4) {
    return true;
  }

  return (
    <div className="app">
      <section className="beer-container">
        <div className="beer-container__nav">
          <section className="search">
            <NavBar
              id={"highAlcohol"}
              handleInput={handleInput}
              setBeers={setBeers}
              searchWords={searchWords}
              filterAcidity={filterAcidity}
              handleInputChange={handleInputChange}
              setFilteredHighAlc={setFilteredHighAlc}
              setFilteredAcidity={setFilteredAcidity}
              setFilteredClassicRange={setFilteredClassicRange}
            />
          </section>
        </div>
        <div className="beer-container__content">
          {beers && <BestBeerCard beersArr={filteredBeers} />}
          {!searchWords && filterAcidity && (
            <BestBeerCard beersArr={filterAcidic} />
          )}
        </div>
      </section>
    </div>
  );
};
export default App;
