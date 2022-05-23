import { TableHeader } from "../atoms/TableHeader";
import { TableRow } from "../atoms/TableRow";

import { TableRowLoader } from "../../helpers/loaders";

//// Object bstaat uit {name: "", values: [{}]} ////
export const Table = ({ title, categories, data }) => {
  return (
    <div className="table">
      <TableHeader
        className="table-header"
        title={title}
        categories={categories}
      />
      <div className="table-body">
        {data.length === 0 ? (
          <TableRowLoader />
        ) : (
          data.map((row, i) => (
            <TableRow key={i} className="table-body__row" row={row} />
          ))
        )}
      </div>
    </div>
  );
};
