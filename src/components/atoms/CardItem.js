import {
  CardUsers,
  CardNewUsers,
  CardAvgSessionDuration,
  CardSessions,
  CardPageviews,
  CardBounceRate,
  TrendingUp,
  TrendingDown,
} from "../../helpers/svg";

export const CardItem = ({ name, value, active, setActive, percentage }) => {
  console.log(name);
  const correctIcon = (name) => {
    if (name === "Users") return <CardUsers className="card-left__icon" />;
    else if (name === "New Users")
      return <CardNewUsers className="card-left__icon" />;
    else if (name === "Avg Session Duration")
      return <CardAvgSessionDuration className="card-left__icon" />;
    else if (name === "Sessions")
      return <CardSessions className="card-left__icon" />;
    else if (name === "Pageviews")
      return <CardPageviews className="card-left__icon" />;
    else if (name === "Bounce Rate")
      return <CardBounceRate className="card-left__icon" />;
  };

  return (
    <div
      onClick={() => setActive(name)}
      className={active === name ? "card card--active" : "card"}
    >
      <div className="card-left">
        {correctIcon(name)}
        <p className="card-left__name">{name}</p>
        <h3 className="card-left__number">{value}</h3>
      </div>

      <div className="card-right">
        <span className="card-right__graph">
          {percentage > 0 ? <TrendingUp /> : <TrendingDown />}
        </span>
        <h4
          className={
            percentage < 0
              ? "card-right__percent card-right__percent--red"
              : "card-right__percent card-right__percent--green"
          }
        >
          {percentage < 0 ? percentage.slice(1, percentage.length) : percentage}
          %
        </h4>
      </div>
    </div>
  );
};
