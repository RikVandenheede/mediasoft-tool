import { TableHeader } from "../atoms/TableHeader";
import { TableRow } from "../atoms/TableRow";

import { TableRowLoaderSmall } from "../../helpers/loaders";

//// Object bstaat uit {name: "", values: [{}]} ////
export const Table = ({ title, categories, data, className }) => {
  return (
    <div className={`${className} table`}>
      <TableHeader
        className={`${className} table-header`}
        title={title}
        categories={categories}
      />
      <div className={`${className} table-body`}>
        {data.map((row, i) => (
          <TableRow
            key={i}
            className={`${className} table-body__row`}
            row={row}
          />
        ))}
      </div>
    </div>
  );
};
