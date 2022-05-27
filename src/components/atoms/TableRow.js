export const TableRow = ({ className, row }) => {
  return (
    <div className={className}>
      <div className={`${className}__title`}>
        <p>{row?.name}</p>
      </div>
      <div className={`${className}__categories`}>
        {row.values.map((value) => {
          return <p>{value}</p>;
        })}
      </div>
    </div>
  );
};
