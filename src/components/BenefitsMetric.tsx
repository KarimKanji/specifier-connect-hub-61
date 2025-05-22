
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BenefitsMetricProps {
  value: string;
  label: string;
  description: string;
  className?: string;
}

const BenefitsMetric = ({ value, label, description, className }: BenefitsMetricProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={cn(
        "bg-white rounded-xl p-8 text-center shadow-card border border-gray-100",
        className
      )}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        whileInView={{ scale: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 200,
          damping: 15,
          delay: 0.2
        }}
        viewport={{ once: true }}
        className="mb-4"
      >
        <span className="text-5xl font-bold text-primary block">{value}</span>
      </motion.div>
      
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{label}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default BenefitsMetric;
