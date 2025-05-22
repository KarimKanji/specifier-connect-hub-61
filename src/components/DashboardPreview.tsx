
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface DashboardPreviewProps {
  title: string;
  description?: string;
  imageSrc?: string;
  className?: string;
  delay?: number;
}

const DashboardPreview = ({ title, description, imageSrc, className = "", delay = 0 }: DashboardPreviewProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <Card className={`overflow-hidden shadow-lg backdrop-blur-sm bg-white/90 border border-gray-100 transition-all hover:-translate-y-2 ${className}`}>
        <div className="bg-primary/5 p-5 border-b">
          <h3 className="font-medium text-gray-800">{title}</h3>
          {description && <p className="text-sm text-gray-600 mt-1 leading-relaxed">{description}</p>}
        </div>
        <CardContent className="p-0">
          <div className="bg-gray-50/80 p-8 flex items-center justify-center min-h-[220px]">
            {imageSrc ? (
              <img 
                src={imageSrc} 
                alt={title} 
                className="max-w-full h-auto rounded shadow-sm" 
              />
            ) : (
              <div className="w-full h-full min-h-[180px] rounded-md bg-gradient-to-r from-gray-200 to-gray-100 animate-pulse"></div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default DashboardPreview;
