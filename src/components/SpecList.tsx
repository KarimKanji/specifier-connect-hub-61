
import { Check } from "lucide-react";
import { motion } from "framer-motion";

interface SpecListItemProps {
  text: string;
  index: number;
}

const SpecListItem = ({ text, index }: SpecListItemProps) => (
  <motion.div 
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3, delay: index * 0.1 }}
    className="flex items-start mb-4"
  >
    <div className="bg-primary/10 p-1.5 rounded-full mr-3 flex-shrink-0">
      <Check className="h-4 w-4 text-primary" />
    </div>
    <span className="text-gray-700 leading-relaxed">{text}</span>
  </motion.div>
);

interface SpecListProps {
  items: string[];
  className?: string;
}

const SpecList = ({ items, className = "" }: SpecListProps) => {
  return (
    <div className={className}>
      {items.map((item, index) => (
        <SpecListItem key={index} text={item} index={index} />
      ))}
    </div>
  );
};

export default SpecList;
