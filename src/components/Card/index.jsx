import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import "./card.scss";

function Card(props) {
  const history = useHistory();

  function goToDetail(id) {
    history.push(`/character/${id}`);
  }

  return (
    <div className="card--character" onClick={() => goToDetail(props.id)}>
      <div className="card--character__body">
        <div className="card--character__img">
          <img src={props.image} alt="" />
        </div>
        <div className="card--character__detail">
          <h2 className="card--character__title">{props.name}</h2>
          <div>
            <p className="card--character__summary">{props.status}</p>
            <p className="card--character__summary">{props.human}</p>
            <h3 className="card--character__content">First seen in:</h3>
            <p className="card--character__summary">{props.location}</p>
            <h3 className="card--character__content">{props.species}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
