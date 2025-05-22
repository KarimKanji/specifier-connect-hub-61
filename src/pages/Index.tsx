
import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";
import FeatureCard from "@/components/FeatureCard";
import SpecList from "@/components/SpecList";
import DashboardPreview from "@/components/DashboardPreview";
import SpecTable from "@/components/SpecTable";
import { ArrowRight, FileText, MessageSquare, Search, Check, Clock } from "lucide-react";
import WorkflowComparison from "@/components/WorkflowComparison";
import Testimonial from "@/components/Testimonial";
import BenefitsMetric from "@/components/BenefitsMetric";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-0">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              ACCELERATE MOTOR <span className="text-gradient">SPECIFICATIONS</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Streamline collaboration between Technical Distributors and ABB with AI-powered spec analysis and real-time co-creation, eliminating lengthy emails and spreadsheets.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Start Collaborating
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                See How It Works
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
                { title: "Industrial Motor Type-A Specs", description: "For Chemical Processing Plant", status: "Updated" },
                { title: "High-Efficiency Motor Requirements", description: "Commercial Building Project", status: "New" },
                { title: "Custom Motor Control Systems", description: "Manufacturing Line Upgrade", status: "Updated" },
                { title: "Explosion-Proof Motor Specs", description: "Oil & Gas Application", status: "Review" },
                { title: "Variable Frequency Drive Integration", description: "Water Treatment Facility", status: "Approved" },
                { title: "Energy-Efficient Motor Upgrade", description: "Sustainable Factory Initiative", status: "New" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4 md:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Transforming Motor Specification</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Replace lengthy emails and complex spreadsheets with a streamlined platform designed specifically for technical distributors and ABB engineers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              title="AI-Powered Spec Analysis" 
              description="Upload specifications from end clients and get instant AI summaries, highlighting critical requirements and potential challenges."
              icon={<Search className="h-6 w-6" />}
              delay={0.1}
            />
            <FeatureCard 
              title="Real-Time Collaboration" 
              description="Collaborate directly with ABB engineers on the platform, eliminating the need for lengthy email chains and Excel spreadsheets."
              icon={<MessageSquare className="h-6 w-6" />}
              delay={0.2}
            />
            <FeatureCard 
              title="Centralized Documentation" 
              description="Keep all specifications, communications, and revisions in one place with automatic version tracking and change history."
              icon={<FileText className="h-6 w-6" />}
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">The Specifier Workflow</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Five simple steps to faster, more accurate motor specifications for your clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-6xl mx-auto">
            <DashboardPreview 
              title="1. Upload Specs" 
              description="Upload end client specifications to the platform"
            />
            <DashboardPreview 
              title="2. AI Analysis" 
              description="Get instant AI summaries and highlights of key requirements"
            />
            <DashboardPreview 
              title="3. ABB Collaboration" 
              description="Connect with ABB engineers for expert input when needed"
            />
            <DashboardPreview 
              title="4. Co-Create Solution" 
              description="Finalize motor specifications in real-time together"
            />
            <DashboardPreview 
              title="5. Faster Delivery" 
              description="Deliver the completed product to your end client"
            />
          </div>
        </div>
      </section>

      {/* Benefits Metrics */}
      <section id="benefits" className="py-20">
        <div className="container mx-auto px-4 md:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Measurable Results</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specifier delivers significant improvements in speed, accuracy, and satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <BenefitsMetric 
              value="65%"
              label="Reduction in Specification Time"
              description="From initial request to final approval"
            />
            <BenefitsMetric 
              value="83%"
              label="Fewer Back-and-Forth Exchanges"
              description="Compared to traditional email workflows"
            />
            <BenefitsMetric 
              value="94%"
              label="Technical Distributor Satisfaction"
              description="Based on platform user feedback"
            />
          </div>
        </div>
      </section>

      {/* Communication Platform - Workflow Comparison */}
      <section id="communication" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Traditional vs. Specifier Workflow</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how Specifier transforms the motor specification process from start to finish.
            </p>
          </div>

          <WorkflowComparison />
          
          <div className="mt-16 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">Why Technical Distributors Choose Specifier</h3>
            
            <SpecList items={[
              "Direct access to ABB engineers without email delays",
              "Instant AI-powered analysis of end client specifications",
              "Elimination of confusing spreadsheet versions",
              "Real-time co-creation of solutions with ABB",
              "Comprehensive record of all communications and changes",
              "Faster turnaround times for end client delivery"
            ]} className="mb-8" />
            
            <div className="text-center mt-12">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Transform Your Specification Process
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4 md:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">From Our Interviews</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Technical distributors and ABB engineers share their experience with Specifier.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Testimonial 
              quote="Specifier has cut our motor specification time by more than half. What used to take weeks of emails now happens in days."
              name="Michael Chen"
              role="Technical Distributor, ElectroTech Solutions"
            />
            <Testimonial 
              quote="As an ABB engineer, I can now support multiple distributors simultaneously with clear documentation and faster resolution times."
              name="Sarah Johnson"
              role="Senior Engineer, ABB Motors Division"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4 md:px-0 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Motor Specification Process?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Join technical distributors already using Specifier to streamline their workflow with ABB.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Request Technical Distributor Access
            </Button>
            <Button size="lg" variant="outline">
              Schedule a Live Demo
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
                <li><a href="#features" className="text-gray-600 hover:text-primary">Features</a></li>
                <li><a href="#how-it-works" className="text-gray-600 hover:text-primary">How It Works</a></li>
                <li><a href="#benefits" className="text-gray-600 hover:text-primary">Benefits</a></li>
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
