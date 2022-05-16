import React, { useState } from "react";
import "./App.scss";
import beer from "./data/beer";
import BestBeerCard from "./component/BestBeerCard/BestBeerCard";
import SearchBox from "./component/SearchBox/SearchBox";
import NavBar from "./component/NavBar/NavBar";

const App = () => {
  const [searchWords, setSearchWords] = useState("");
  const handleInput = (event) => {
    setSearchWords(event.target.value);
  };

  const beerCardsJSX = beer.map((card, id) => {
    return (
      // imgBeer, name, info
      <BestBeerCard
        key={card + id}
        imgBeer={card.image_url}
        name={card.name}
        info={card.description}
      />
    );
  });

  return (
    <div className="app">
      <section className="beer-container">
        <div className="beer-container__nav">
          <section className="search">
            <NavBar heading={"Search"} />
            <SearchBox
              label={"beers"}
              searchWords={searchWords}
              handleInput={handleInput}
            />
          </section>
        </div>
        <div className="beer-container__content">{beerCardsJSX}</div>
      </section>
    </div>
  );
};
export default App;
