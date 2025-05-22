
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
  delay?: number;
}

const FeatureCard = ({ title, description, icon, className, delay = 0 }: FeatureCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={cn(
        "bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-card border border-gray-100 transition-all hover:shadow-lg hover:-translate-y-1",
        className
      )}
    >
      {icon && <div className="mb-5 text-primary p-3 bg-primary/5 rounded-lg inline-block">{icon}</div>}
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
