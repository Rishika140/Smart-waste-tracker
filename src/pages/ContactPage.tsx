
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const ContactPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-grow">
        <div className="bg-waste-gradient py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-white text-center">Contact Us</h1>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-waste-primary">Get In Touch</h2>
              <p className="text-lg text-gray-700 mb-8">
                Have questions about SmartWaste Tracker? We're here to help. 
                Fill out the form with your inquiry and our team will get back to you as soon as possible.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mr-4 text-green-600 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-waste-primary">Phone</h3>
                    <p className="text-gray-700">+91 9526319954</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 text-blue-600 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-waste-primary">Email</h3>
                    <p className="text-gray-700">support@smartwaste.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mr-4 text-purple-600 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-waste-primary">Office</h3>
                    <p className="text-gray-700">hitech City, hC 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-12 w-12 bg-red-100 rounded-full flex items-center justify-center mr-4 text-red-600 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-waste-primary">Business Hours</h3>
                    <p className="text-gray-700">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-700">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-waste-primary">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
          
       
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
