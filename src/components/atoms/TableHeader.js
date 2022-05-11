import React, { useRef } from "react";

export const TableHeader = ({ className, title, categories }) => {
  const tableCategory = useRef();
  console.log(tableCategory?.current.getComputedStyle);

  return (
    <div className={className}>
      <div className={`${className}__title`}>
        <p>{title}</p>
      </div>
      <div ref={tableCategory} className={`${className}__categories`}>
        {categories.map((categorie) => (
          <p key={categorie}>{categorie}</p>
        ))}
      </div>
    </div>
  );
};
