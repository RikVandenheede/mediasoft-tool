// This is a dummy icon (remove later)
import { CardUsers } from "../../helpers/svg";

export const CardItem = () => {
  return (
    <div className="card">
      <div className="card-left">
        <CardUsers className="card-left__icon" />
        <p className="card-left__name">New Users</p>
        <h3 className="card-left__number">162</h3>
      </div>

      <div className="card-right">
        <p className="card-right__graph"></p>
        <h4 className="card-right__percent">16.5%</h4>
      </div>
    </div>
  );
};
