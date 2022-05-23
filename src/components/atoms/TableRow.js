export const TableRow = ({ className, row }) => {
  console.log(row.values);
  return (
    <div className={className}>
      <div className={`${className}__title`}>
        <p>{row?.name}</p>
      </div>
      <div className={`${className}__categories`}>
        {console.log(row)}
        {row.values.map((value) => {
          return <p>{value}</p>;
        })}
      </div>
    </div>
  );
};
