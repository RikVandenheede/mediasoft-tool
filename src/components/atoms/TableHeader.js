export const TableHeader = ({
  className,
  title,
  categories,
  selectOptions,
}) => {
  return (
    <div className={className}>
      <div className={`${className}__title`}>
        <p>{title}</p>
      </div>

      {selectOptions ? (
        <select>
          {selectOptions?.map((option) => (
            <option>{option}</option>
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
