
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  imageSrc?: string;
  className?: string;
}

const Testimonial = ({ quote, name, role, imageSrc, className }: TestimonialProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={cn(
        "bg-white rounded-xl p-6 shadow-card border border-gray-100",
        className
      )}
    >
      <div className="flex flex-col h-full">
        <div className="mb-6">
          <svg width="45" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary/20">
            <path d="M13.5 0L0 36H9L22.5 0H13.5ZM36 0L22.5 36H31.5L45 0H36Z" fill="currentColor"/>
          </svg>
        </div>
        
        <p className="text-gray-700 leading-relaxed italic flex-grow mb-6">"{quote}"</p>
        
        <div className="flex items-center mt-auto">
          {imageSrc ? (
            <img 
              src={imageSrc} 
              alt={name}
              className="w-12 h-12 rounded-full object-cover mr-4" 
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
              <span className="text-primary font-semibold text-lg">
                {name.charAt(0)}
              </span>
            </div>
          )}
          <div>
            <h4 className="font-semibold text-gray-800">{name}</h4>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonial;
