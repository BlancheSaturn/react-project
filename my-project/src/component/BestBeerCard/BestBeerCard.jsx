import React from "react";
import "./BestBeerCard.scss";

const BestBeerCard = ({ imgBeer, name, info }) => {
  return (
    <section>
      <div className="card-content">
        <div className="card-content__image">
          <img src={imgBeer} className="card-content__image--pic" alt="beer" />
        </div>
        <div className="card-content__info">
          <h3 className="card-content__info--name">{name}</h3>
          <p className="card-content__info--desc">{info}</p>
        </div>
      </div>
    </section>
  );
};

export default BestBeerCard;
