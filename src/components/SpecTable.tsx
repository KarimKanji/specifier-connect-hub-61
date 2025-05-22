
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TableRowProps {
  title: string;
  description?: string;
  status?: string;
  className?: string;
  index?: number;
}

const TableRow = ({ title, description, status, className, index = 0 }: TableRowProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.05 }}
      className={cn("flex items-center justify-between p-4 border-b last:border-b-0 hover:bg-gray-50 transition-colors", className)}
    >
      <div className="flex-1">
        <h4 className="font-medium text-sm text-gray-800">{title}</h4>
        {description && <p className="text-xs text-gray-500 mt-1">{description}</p>}
      </div>
      {status && (
        <span className={cn(
          "text-xs px-2 py-1 rounded-full font-medium",
          status === "New" && "bg-blue-50 text-blue-600",
          status === "Updated" && "bg-green-50 text-green-600",
          status === "Review" && "bg-orange-50 text-orange-600",
          status === "Approved" && "bg-emerald-50 text-emerald-600",
          status === "Answered" && "bg-purple-50 text-purple-600",
          status === "Pending" && "bg-amber-50 text-amber-600",
          status === "Shared" && "bg-indigo-50 text-indigo-600",
          !["New", "Updated", "Review", "Approved", "Answered", "Pending", "Shared"].includes(status) && "bg-gray-100 text-gray-600"
        )}>
          {status}
        </span>
      )}
    </motion.div>
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
      <div className="bg-gray-50 p-4 border-b">
        <h3 className="font-medium text-sm text-gray-800">{title}</h3>
      </div>
      <div>
        {rows.map((row, i) => (
          <TableRow key={i} {...row} index={i} />
        ))}
      </div>
    </div>
  );
};

export default SpecTable;
