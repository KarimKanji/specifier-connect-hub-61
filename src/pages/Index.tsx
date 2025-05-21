
import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";
import FeatureCard from "@/components/FeatureCard";
import SpecList from "@/components/SpecList";
import DashboardPreview from "@/components/DashboardPreview";
import SpecTable from "@/components/SpecTable";
import { ArrowRight, FileText, MessageSquare, Search } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-0">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              WELCOME TO <span className="text-gradient">SPECIFIER</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Leverage AI-powered insights to analyze specifications faster, communicate better, and build stronger relationships between Technical Distributors and ABB.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Spec Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-0">
          <div className="max-w-5xl mx-auto">
            <SpecTable 
              title="Active Specifications"
              className="animate-fade-in"
              rows={[
                { title: "Power Distribution Panel", description: "ABB-PDP-2023-01", status: "Updated" },
                { title: "Circuit Breaker Specifications", description: "CB-SPEC-V3", status: "New" },
                { title: "Automation Control Systems", description: "ACS-2023-Q2", status: "Updated" },
                { title: "Voltage Regulators Type A", description: "VR-2023-TYPE-A", status: "Review" },
                { title: "Industrial IoT Sensors", description: "IOT-SENSOR-2023", status: "Approved" },
                { title: "Smart Building Integration", description: "SBI-PROTO-2023", status: "New" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4 md:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why use Specifier</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced tools to streamline specification reading and enhance communication between Technical Distributors and manufacturing partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              title="Fast AI Reading" 
              description="Process technical specifications in seconds, not hours. Our AI extracts key requirements and highlights critical points."
              icon={<Search className="h-6 w-6" />}
            />
            <FeatureCard 
              title="Smart Documentation" 
              description="Organize all specifications in one place with intelligent tagging, versioning, and change tracking."
              icon={<FileText className="h-6 w-6" />}
            />
            <FeatureCard 
              title="Direct Communication" 
              description="Connect directly with ABB engineers and product managers for clarifications and technical support."
              icon={<MessageSquare className="h-6 w-6" />}
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specifier streamlines the technical specification workflow with an intuitive process designed for professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <DashboardPreview 
              title="1. Upload and Analyze" 
              description="Upload specifications and let our AI analyze requirements"
            />
            <DashboardPreview 
              title="2. Review and Annotate" 
              description="Review AI insights and add your own annotations"
            />
            <DashboardPreview 
              title="3. Collaborate and Resolve" 
              description="Collaborate with ABB on questions and clarifications"
            />
          </div>
        </div>
      </section>

      {/* Communication Platform */}
      <section id="communication" className="py-20">
        <div className="container mx-auto px-4 md:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Seamless Communication Platform</h2>
              <p className="text-lg text-gray-600 mb-8">
                Specifier bridges the gap between Technical Distributors and ABB, enabling faster decision-making and project implementation.
              </p>
              
              <SpecList items={[
                "Direct messaging with ABB technical teams",
                "Real-time specification updates and notifications",
                "Shared annotation and commenting system",
                "Version history tracking for all communications",
                "Searchable knowledge base of previous inquiries",
                "Integrated technical document sharing"
              ]} className="mb-8" />
              
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Explore Communication Features
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <SpecTable 
                title="Technical Queries"
                className="col-span-2"
                rows={[
                  { title: "Circuit Breaker Rating Question", status: "Answered" },
                  { title: "Control Panel Integration", status: "Pending" },
                  { title: "Voltage Range Clarification", status: "Answered" }
                ]}
              />
              <SpecTable 
                title="Recent Messages"
                rows={[
                  { title: "Update on Project 1023", status: "New" },
                  { title: "Spec Change Request", status: "New" }
                ]}
              />
              <SpecTable 
                title="Document Sharing"
                rows={[
                  { title: "Technical Diagram", status: "Shared" },
                  { title: "Installation Guide", status: "Updated" }
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4 md:px-0 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Specification Process?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Join technical distributors already using Specifier to streamline their workflow with ABB.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get Started Today
            </Button>
            <Button size="lg" variant="outline">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 md:px-0">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Specifier</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-primary">Features</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">How It Works</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-primary">Documentation</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">API</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Guides</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-primary">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-primary">Privacy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Terms</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-12 pt-8 text-center">
            <p className="text-gray-600">
              &copy; {new Date().getFullYear()} Specifier by ABB. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
