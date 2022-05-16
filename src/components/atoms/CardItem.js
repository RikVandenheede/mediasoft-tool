import { useState } from "react";
import { CardUsers } from "../../helpers/svg";

export const CardItem = ({ name, value, active, setActive }) => {
  return (
    <div
      onClick={() => setActive(name)}
      className={active === name ? "card card--active" : "card"}
    >
      <div className="card-left">
        <CardUsers className="card-left__icon" />
        <p className="card-left__name">{name}</p>
        <h3 className="card-left__number">{value}</h3>
      </div>

      <div className="card-right">
        <p className="card-right__graph"></p>
        <h4 className="card-right__percent">16.5%</h4>
      </div>
    </div>
  );
};
