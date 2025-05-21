
import { cn } from "@/lib/utils";

interface TableRowProps {
  title: string;
  description?: string;
  status?: string;
  className?: string;
}

const TableRow = ({ title, description, status, className }: TableRowProps) => {
  return (
    <div className={cn("flex items-center justify-between p-3 border-b last:border-b-0 hover:bg-gray-50", className)}>
      <div className="flex-1">
        <h4 className="font-medium text-sm">{title}</h4>
        {description && <p className="text-xs text-gray-500">{description}</p>}
      </div>
      {status && (
        <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">{status}</span>
      )}
    </div>
  );
};

interface SpecTableProps {
  title: string;
  rows: TableRowProps[];
  className?: string;
}

const SpecTable = ({ title, rows, className }: SpecTableProps) => {
  return (
    <div className={cn("bg-white rounded-xl overflow-hidden shadow-card border", className)}>
      <div className="bg-gray-50 p-3 border-b">
        <h3 className="font-medium text-sm">{title}</h3>
      </div>
      <div>
        {rows.map((row, i) => (
          <TableRow key={i} {...row} />
        ))}
      </div>
    </div>
  );
};

export default SpecTable;
