
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, TrendingUp, Truck, BarChart3, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="waste-gradient text-white py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-shadow">
            Optimize Waste Management with Smart Tracking
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Efficiently monitor garbage collection trucks, optimize routes, and keep your city clean with our AI-powered system.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/features">
              <Button className="bg-waste-secondary hover:bg-green-500 text-white text-lg py-6 px-8">
                Learn More
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white text-lg py-6 px-8">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>
 {/* Statistics Section */}
 <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-waste-primary text-4xl font-bold mb-2">98%</div>
              <p className="text-gray-600">Collection Reliability</p>
            </div>
            <div className="p-6">
              <div className="text-waste-primary text-4xl font-bold mb-2">30%</div>
              <p className="text-gray-600">Fuel Cost Reduction</p>
            </div>
            <div className="p-6">
              <div className="text-waste-primary text-4xl font-bold mb-2">50K+</div>
              <p className="text-gray-600">Happy Residents</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-waste-primary">
            How Our Smart System Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="h-16 w-16 bg-waste-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-waste-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Location Tracking</h3>
              <p className="text-gray-600">GPS tracking provides real-time location data for all collection trucks</p>
            </div>
            <div className="text-center p-6">
              <div className="h-16 w-16 bg-waste-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-waste-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Route Optimization</h3>
              <p className="text-gray-600">AI algorithms calculate the most efficient routes based on multiple factors</p>
            </div>
            <div className="text-center p-6">
              <div className="h-16 w-16 bg-waste-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-waste-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Truck Monitoring</h3>
              <p className="text-gray-600">Real-time monitoring of truck capacity, maintenance needs, and performance</p>
            </div>
            <div className="text-center p-6">
              <div className="h-16 w-16 bg-waste-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-waste-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Data Analytics</h3>
              <p className="text-gray-600">Comprehensive reporting and insights for continuous improvement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-waste-primary">
            Benefits of Our Platform
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-waste-primary flex items-center">
                <Award className="mr-2 text-waste-secondary" /> For Municipalities
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-waste-secondary mt-0.5 mr-2 flex-shrink-0" />
                  <span>Reduce operational costs by up to 30% through optimized routes</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-waste-secondary mt-0.5 mr-2 flex-shrink-0" />
                  <span>Decrease fuel consumption and carbon emissions</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-waste-secondary mt-0.5 mr-2 flex-shrink-0" />
                  <span>Improve resource allocation and workforce management</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-waste-secondary mt-0.5 mr-2 flex-shrink-0" />
                  <span>Access detailed analytics for data-driven decision making</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-waste-primary flex items-center">
                <Award className="mr-2 text-waste-secondary" /> For Residents
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-waste-secondary mt-0.5 mr-2 flex-shrink-0" />
                  <span>Real-time notifications when trucks are approaching</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-waste-secondary mt-0.5 mr-2 flex-shrink-0" />
                  <span>Convenient pickup schedule management through the app</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-waste-secondary mt-0.5 mr-2 flex-shrink-0" />
                  <span>Simple complaint registration and tracking system</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-waste-secondary mt-0.5 mr-2 flex-shrink-0" />
                  <span>Greater reliability and predictability of waste collection</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-waste-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Smarter Waste Management?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied users and communities that have already transformed their waste management operations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/signup">
              <Button className="bg-waste-secondary hover:bg-green-500 text-white text-lg py-6 px-8">
                Sign Up Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="bg-waste-secondary hover:bg-green-500 text-white text-lg py-6 px-8">
                Contact 
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
