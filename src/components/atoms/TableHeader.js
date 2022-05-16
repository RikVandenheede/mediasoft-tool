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
          {selectOptions?.map((option) => (
            <option value={option.value}>{option}</option>
          ))}
        </select>
      ) : (
        <div className={`${className}__categories`}>
          {categories.map((categorie) => (
            <p key={categorie}>{categorie}</p>
          ))}
        </div>
      )}
    </div>
  );
};
