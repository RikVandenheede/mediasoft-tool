import { TableHeader } from "../atoms/TableHeader";
import { TableRow } from "../atoms/TableRow";

export const Table = ({ title, categories, data }) => {
  console.log(data);
  return (
    <div className="table">
      <TableHeader
        className="table-header"
        title={title}
        categories={categories}
      />
      <div className="table-body">
        {data.map((row) => (
          <TableRow className="table-body__row" row={row} />
        ))}
      </div>
    </div>
  );
};
