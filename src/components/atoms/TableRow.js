export const TableRow = ({ className, row }) => {
  const widthFormatter = (width) => {
    if (width === 0) return 0;
    return width * 1.5;
    //  row?.width * 1.5
  };

  return (
    <div className={className}>
      <div className={`${className}__title`}>
        <p>{row?.name}</p>
      </div>
      <div className={`${className}__container`}>
        {row?.width >= 0 && (
          <div className={`${className}__bar`}>
            <p>{row?.width}%</p>
            <span style={{ width: row?.width * 1.5 }}></span>
          </div>
        )}

        <div className={`${className}__categories`}>
          {row.values.map((value, i) => {
            return <p key={i}>{value}</p>;
          })}
        </div>
      </div>
    </div>
  );
};
