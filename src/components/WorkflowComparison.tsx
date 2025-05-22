
import { motion } from "framer-motion";
import { Clock, Check, X } from "lucide-react";

const WorkflowComparison = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {/* Traditional Workflow */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-white rounded-xl p-6 shadow-card border border-gray-200"
      >
        <div className="flex items-center mb-6">
          <div className="bg-gray-100 p-3 rounded-full mr-4">
            <Clock className="h-6 w-6 text-gray-500" />
          </div>
          <h3 className="text-xl font-semibold text-gray-700">Traditional Process</h3>
        </div>
        
        <div className="space-y-5">
          <div className="flex items-start">
            <div className="bg-gray-100 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full mr-4 mt-1">
              <span className="font-semibold text-gray-600">1</span>
            </div>
            <div>
              <p className="font-medium text-gray-800">Email spec from client to distributor</p>
              <p className="text-gray-500 text-sm mt-1">Multiple attachments, unclear requirements</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-gray-100 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full mr-4 mt-1">
              <span className="font-semibold text-gray-600">2</span>
            </div>
            <div>
              <p className="font-medium text-gray-800">Distributor forwards to ABB via email</p>
              <p className="text-gray-500 text-sm mt-1">Manual copying of information, context lost</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-gray-100 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full mr-4 mt-1">
              <span className="font-semibold text-gray-600">3</span>
            </div>
            <div>
              <p className="font-medium text-gray-800">Back-and-forth email chains</p>
              <p className="text-gray-500 text-sm mt-1">Questions buried in threads, delayed responses</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-gray-100 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full mr-4 mt-1">
              <span className="font-semibold text-gray-600">4</span>
            </div>
            <div>
              <p className="font-medium text-gray-800">Spreadsheet version confusion</p>
              <p className="text-gray-500 text-sm mt-1">Multiple versions circulated, changes missed</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-gray-100 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full mr-4 mt-1">
              <span className="font-semibold text-gray-600">5</span>
            </div>
            <div>
              <p className="font-medium text-gray-800">Manual documentation of final spec</p>
              <p className="text-gray-500 text-sm mt-1">Lengthy process, risk of errors</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-100 flex items-center">
          <div className="flex items-center mr-8">
            <X className="h-5 w-5 text-red-500 mr-2" />
            <span className="text-gray-700">2-3 weeks process</span>
          </div>
          <div className="flex items-center">
            <X className="h-5 w-5 text-red-500 mr-2" />
            <span className="text-gray-700">Multiple tools required</span>
          </div>
        </div>
      </motion.div>
      
      {/* Specifier Workflow */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-white rounded-xl p-6 shadow-card border border-primary/20"
      >
        <div className="flex items-center mb-6">
          <div className="bg-primary/10 p-3 rounded-full mr-4">
            <Check className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-gray-700">Specifier Process</h3>
        </div>
        
        <div className="space-y-5">
          <div className="flex items-start">
            <div className="bg-primary/10 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full mr-4 mt-1">
              <span className="font-semibold text-primary">1</span>
            </div>
            <div>
              <p className="font-medium text-gray-800">Upload spec to Specifier platform</p>
              <p className="text-gray-500 text-sm mt-1">Centralized storage, easy access</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-primary/10 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full mr-4 mt-1">
              <span className="font-semibold text-primary">2</span>
            </div>
            <div>
              <p className="font-medium text-gray-800">AI instantly analyzes requirements</p>
              <p className="text-gray-500 text-sm mt-1">Key points highlighted, potential issues identified</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-primary/10 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full mr-4 mt-1">
              <span className="font-semibold text-primary">3</span>
            </div>
            <div>
              <p className="font-medium text-gray-800">Direct collaboration with ABB</p>
              <p className="text-gray-500 text-sm mt-1">Real-time communication, no email delays</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-primary/10 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full mr-4 mt-1">
              <span className="font-semibold text-primary">4</span>
            </div>
            <div>
              <p className="font-medium text-gray-800">Co-create final specification</p>
              <p className="text-gray-500 text-sm mt-1">All changes tracked, single source of truth</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-primary/10 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full mr-4 mt-1">
              <span className="font-semibold text-primary">5</span>
            </div>
            <div>
              <p className="font-medium text-gray-800">Export complete documentation</p>
              <p className="text-gray-500 text-sm mt-1">Automatic generation, professionally formatted</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-100 flex items-center">
          <div className="flex items-center mr-8">
            <Check className="h-5 w-5 text-primary mr-2" />
            <span className="text-gray-700">2-3 day process</span>
          </div>
          <div className="flex items-center">
            <Check className="h-5 w-5 text-primary mr-2" />
            <span className="text-gray-700">All-in-one platform</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WorkflowComparison;
