import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FeaturesPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-grow">
        <div className="bg-waste-gradient py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-white text-center">Our Features</h1>
          </div>
        </div>

        {/* Main Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-waste-primary">Real-Time Truck Tracking</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Know exactly where your garbage collection truck is at any moment. Our system provides accurate GPS tracking 
                  with minimal delay, letting you plan your day better.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    GPS-powered location updates every 30 seconds
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Estimated time of arrival at your location
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Interactive map interface
                  </li>
                </ul>
              </div>
              <div className="bg-gray-200 rounded-lg overflow-hidden h-[400px] flex items-center justify-center">
                <img 
                  src="https://www.researchgate.net/profile/Ahmadh-Kariapper/publication/338479342/figure/fig2/AS:845365662203905@1578562288633/Google-map-with-shortest-path.jpg" 
                  alt="Map tracking interface" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Intelligent Route Optimization */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="order-2 lg:order-1 bg-gray-200 rounded-lg overflow-hidden h-[400px] flex items-center justify-center">
                <img 
                  src="https://www.slashgear.com/img/gallery/how-to-track-an-android-phone-and-find-it-on-google-maps/l-intro-1659476605.jpg" 
                  alt="Route optimization" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold mb-6 text-waste-primary">Intelligent Route Optimization</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Our AI algorithms calculate the most efficient routes for waste collection trucks, saving time, fuel, and reducing carbon emissions.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Up to 30% reduction in fuel consumption
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Real-time traffic data integration
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Dynamic rerouting based on road closures or accidents
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Smart Notifications */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-waste-primary">Smart Notifications</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Never miss a pickup again. Receive timely alerts and reminders about scheduled collections, 
                  delays, and when the truck is approaching your area.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Customizable notification preferences
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    SMS, email, and push notification options
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Proximity alerts when truck is nearby
                  </li>
                </ul>
              </div>
              <div className="bg-gray-200 rounded-lg overflow-hidden h-[400px] flex items-center justify-center">
                <img 
                  src="https://blog.tryshiftcdn.com/uploads/2022/11/how-to-get-a-nofication-aggregator-580x300@2x.jpg" 
                  alt="Mobile notifications" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Other Features */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-waste-primary">Additional Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Complaint Management</h3>
                <p className="text-gray-600">
                  Easy-to-use system for reporting missed pickups or other issues, with real-time status updates.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Customizable Schedules</h3>
                <p className="text-gray-600">
                  View and manage your waste collection schedule with calendar integration.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 text-purple-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Location Analytics</h3>
                <p className="text-gray-600">
                  Detailed insights into collection patterns, waste volumes, and service efficiency.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="h-12 w-12 bg-red-100 rounded-full flex items-center justify-center mb-4 text-red-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                    <line x1="7" y1="7" x2="7.01" y2="7"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Waste Type Tracking</h3>
                <p className="text-gray-600">
                  Monitor different types of waste collected and receive segregation guidelines.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="h-12 w-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4 text-yellow-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Performance Metrics</h3>
                <p className="text-gray-600">
                  Data-driven insights on waste reduction, recycling rates, and environmental impact.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="h-12 w-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4 text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Community Engagement</h3>
                <p className="text-gray-600">
                  Connect with neighbors and local authorities for improved waste management.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default FeaturesPage;  
