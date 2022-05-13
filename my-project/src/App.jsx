import "./App.scss";
import beer from "./data/beer";
import BestBeer from "./component/BestBeer/BestBeer";

const App = () => {
  const beerCardsJSX = beer.map((drink, id) => {
    return (
      // imgBeer, name, info
      <BestBeer
        key={drink + id}
        imgBeer={drink.image_url}
        name={drink.name}
        info={drink.description}
      />
    );
  });

  return (
    <div className="app">
      <section className="beer-container">
        <div className="beer-container__nav">Search, Filter</div>
        <div className="beer-container__content">{beerCardsJSX}</div>
      </section>
    </div>
  );
};
export default App;
