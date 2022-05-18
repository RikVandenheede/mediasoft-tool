export const TableHeader = ({
  className,
  title,
  categories,
  selectOptions,
  setDate,
}) => {
  return (
    <div className={className}>
      <div className={`${className}__title`}>
        <p>{title}</p>
      </div>

      {selectOptions ? (
        <select onChange={(e) => setDate(e.target.value.split(" ")[0])}>
          {selectOptions?.map((option, i) => (
            <option key={i} value={option.value}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <div className={`${className}__categories`}>
          {categories.map((categorie, i) => (
            <p key={i}>{categorie}</p>
          ))}
        </div>
      )}
    </div>
  );
};
