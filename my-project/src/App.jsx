import "./App.scss";
import beer from "./data/beer";
import BestBeer from "./component/BestBeer/BestBeer";
import SearchBeers from "./containers/SearchBeers/SearchBeers";

const App = () => {
  const beerCardsJSX = beer.map((card, id) => {
    return (
      // imgBeer, name, info
      <BestBeer
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
            <h2 className="search__heading">Search</h2>
            <SearchBeers beerArr={beer} />
          </section>
        </div>
        <div className="beer-container__content">{beerCardsJSX}</div>
      </section>
    </div>
  );
};
export default App;
