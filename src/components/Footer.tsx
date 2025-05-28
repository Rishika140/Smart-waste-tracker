
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-waste-primary text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SmartWaste Tracker</h3>
            <p className="text-gray-300">
              Optimizing waste management through cutting-edge technology and
              smart solutions for a cleaner environment.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-waste-secondary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-gray-300 hover:text-waste-secondary">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-waste-secondary">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-waste-secondary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <address className="not-italic text-gray-300">
              <div className="mb-2">123 hyd</div>
              <div className="mb-2">hitech City, hC 12345</div>
              <div className="mb-2">support@smartwaste.com</div>
              <div>+91 9526319954</div>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-300">
          <p>© 2025 SmartWaste Tracker. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
