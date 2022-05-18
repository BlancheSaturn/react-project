import React from "react";
import "./BestBeerCard.scss";

const BestBeerCard = ({ beersArr }) => {
  return (
    <div className="card">
      {beersArr.map((card, id) => {
        return (
          <div className="card-content" key={card + id}>
            <img
              src={card.image_url}
              className="card-content__image"
              alt="beer"
            />
            <div className="card-content__info">
              <h3 className="card-content__info--name">{card.name}</h3>
              <p className="card-content__info--desc">{card.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BestBeerCard;
