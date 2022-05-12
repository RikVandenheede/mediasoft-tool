export const TableHeader = ({ className, title, categories }) => {
  return (
    <div className={className}>
      <div className={`${className}__title`}>
        <p>{title}</p>
      </div>
      <div className={`${className}__categories`}>
        {categories.map((categorie) => (
          <p key={categorie}>{categorie}</p>
        ))}
      </div>
    </div>
  );
};
