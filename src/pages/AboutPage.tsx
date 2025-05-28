import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-grow">
        <div className="bg-waste-gradient py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-white text-center">About Us</h1>
          </div>
        </div>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-waste-primary">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                At SmartWaste Tracker, our mission is to revolutionize waste management through innovative 
                technology solutions that promote efficiency, sustainability, and community engagement.
              </p>
              <p className="text-lg text-gray-700">
                We believe that proper waste management is crucial for creating cleaner, healthier cities 
                and protecting our environment for future generations. By bringing smart technology to 
                waste collection, we aim to optimize operations, reduce environmental impact, and improve 
                the quality of life in communities around the world.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-waste-primary">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                SmartWaste Tracker was founded in 2025 by a team of environmental engineers and 
                technology experts who recognized the inefficiencies in traditional waste management systems.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                After witnessing the irregular pickup schedules, missed collections, and lack of communication 
                between waste management companies and residents, our founders decided to create a solution 
                that would bring transparency and efficiency to the waste collection process.
              </p>
              <p className="text-lg text-gray-700">
                What began as a small pilot project in one neighborhood has now grown into a comprehensive 
                platform serving multiple communities, with plans for continued expansion and innovation.
              </p>
            </div>
          </div>
        </section>

        

        {/* Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-waste-primary">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-waste-primary">Innovation</h3>
                <p className="text-gray-700">
                  We constantly seek new ways to improve waste management through technology, 
                  data analysis, and creative problem-solving.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-waste-primary">Sustainability</h3>
                <p className="text-gray-700">
                  Every feature and decision is evaluated for its environmental impact, with a 
                  focus on promoting recycling and reducing waste.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-waste-primary">Transparency</h3>
                <p className="text-gray-700">
                  We believe in clear communication and providing accurate, real-time information 
                  to all stakeholders in the waste management process.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-waste-primary">Community</h3>
                <p className="text-gray-700">
                  We work closely with local communities to understand their unique needs and 
                  develop solutions that improve quality of life for all residents.
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

export default AboutPage;
