
import { Card, CardContent } from "@/components/ui/card";

interface DashboardPreviewProps {
  title: string;
  description?: string;
  imageSrc?: string;
  className?: string;
}

const DashboardPreview = ({ title, description, imageSrc, className = "" }: DashboardPreviewProps) => {
  return (
    <Card className={`overflow-hidden shadow-lg transition-transform hover:-translate-y-1 ${className}`}>
      <div className="bg-primary/5 p-4 border-b">
        <h3 className="font-medium text-gray-700">{title}</h3>
        {description && <p className="text-sm text-gray-500 mt-1">{description}</p>}
      </div>
      <CardContent className="p-0">
        <div className="bg-gray-50 p-8 flex items-center justify-center min-h-[200px]">
          {imageSrc ? (
            <img 
              src={imageSrc} 
              alt={title} 
              className="max-w-full h-auto rounded shadow-sm" 
            />
          ) : (
            <div className="w-full h-full bg-gray-200 animate-pulse rounded-md"></div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardPreview;
