export const TableRow = ({ className, row, key }) => {
  return (
    <div className={className}>
      <div className={`${className}__title`}>
        <p>{row?.page}</p>
      </div>
      <div className={`${className}__categories`}>
        {Object.entries(row?.categories[0]).map(([, value]) => (
          <p key={value}>{value}</p>
        ))}
      </div>
    </div>
  );
};
