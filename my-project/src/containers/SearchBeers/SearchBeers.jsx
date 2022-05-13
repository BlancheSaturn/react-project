import React, { useState } from "react";
//Bring in component we need
import Search from "../../component/Search/Search";
import BestBeer from "../../component/BestBeer/BestBeer";
import beer from "../../data/beer";

const SearchBeers = ({ beerArr }) => {
  const [searchWords, setSearchWords] = useState("");

  const handleInput = (event) => {
    setSearchWords(event.target.value);
  };

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
    <>
      <p>{searchWords}</p>
      <Search
        label={"beers"}
        searchWords={searchWords}
        handleInput={handleInput}
      />
      <BestBeer
        imgBeer={beer.image_url}
        name={beer.name}
        info={beer.description}
        beerArr={filteredBeers}
      />
    </>
  );
};

export default SearchBeers;
