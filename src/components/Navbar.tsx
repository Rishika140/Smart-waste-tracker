
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-waste-primary w-full sticky top-0 z-50">
      <div className="container mx-auto py-4 px-4 lg:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className="text-white text-xl md:text-2xl font-bold">
            SmartWaste Tracker
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className={cn(
              "text-white hover:text-green-300 transition-colors px-2 py-1 rounded",
              isActive("/") && "bg-waste-accent/20"
            )}
          >
            Home
          </Link>
          <Link
            to="/features"
            className={cn(
              "text-white hover:text-green-300 transition-colors px-2 py-1 rounded",
              isActive("/features") && "bg-waste-accent/20"
            )}
          >
            Features
          </Link>
          <Link
            to="/about"
            className={cn(
              "text-white hover:text-green-300 transition-colors px-2 py-1 rounded",
              isActive("/about") && "bg-waste-accent/20"
            )}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={cn(
              "text-white hover:text-green-300 transition-colors px-2 py-1 rounded",
              isActive("/contact") && "bg-waste-accent/20"
            )}
          >
            Contact
          </Link>

          <div className="flex space-x-3">
            <Link to="/login">
              <Button variant="outline" className="bg-waste-secondary hover:bg-green-500 text-white">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-waste-secondary hover:bg-green-500 text-white">
                Sign Up
              </Button>
            </Link>
          </div>
        </nav>

        {/* Mobile Navigation Button */}
        <Button
          variant="ghost"
          className="md:hidden text-white hover:bg-waste-primary/80"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-waste-primary px-4 py-2">
          <nav className="flex flex-col space-y-3 pb-4">
            <Link
              to="/"
              className={cn(
                "text-white hover:bg-waste-accent/20 px-3 py-2 rounded",
                isActive("/") && "bg-waste-accent/20"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/features"
              className={cn(
                "text-white hover:bg-waste-accent/20 px-3 py-2 rounded",
                isActive("/features") && "bg-waste-accent/20"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              to="/about"
              className={cn(
                "text-white hover:bg-waste-accent/20 px-3 py-2 rounded",
                isActive("/about") && "bg-waste-accent/20"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={cn(
                "text-white hover:bg-waste-accent/20 px-3 py-2 rounded",
                isActive("/contact") && "bg-waste-accent/20"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex space-x-2 pt-2">
              <Link to="/login" className="w-1/2">
                <Button variant="outline" className="w-full text-white border-white hover:bg-waste-secondary hover:text-white">
                  Login
                </Button>
              </Link>
              <Link to="/signup" className="w-1/2">
                <Button className="w-full bg-waste-secondary hover:bg-green-500 text-white">
                  Sign Up
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
