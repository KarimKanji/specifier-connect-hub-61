
import { Check } from "lucide-react";

interface SpecListItemProps {
  text: string;
}

const SpecListItem = ({ text }: SpecListItemProps) => (
  <div className="flex items-start mb-3">
    <div className="bg-primary/10 p-1 rounded-full mr-3">
      <Check className="h-4 w-4 text-primary" />
    </div>
    <span className="text-gray-700">{text}</span>
  </div>
);

interface SpecListProps {
  items: string[];
  className?: string;
}

const SpecList = ({ items, className = "" }: SpecListProps) => {
  return (
    <div className={className}>
      {items.map((item, index) => (
        <SpecListItem key={index} text={item} />
      ))}
    </div>
  );
};

export default SpecList;
