
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const DashboardNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-waste-primary text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl md:text-2xl font-bold">
            SmartWaste Tracker
          </Link>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link
                to="/dashboard"
                className={cn(
                  "px-3 py-2 rounded-md transition-colors",
                  isActive("/dashboard") 
                    ? "bg-waste-accent/30 text-white" 
                    : "hover:bg-waste-accent/20"
                )}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className={cn(
                  "px-3 py-2 rounded-md transition-colors",
                  isActive("/profile") 
                    ? "bg-waste-accent/30 text-white" 
                    : "hover:bg-waste-accent/20"
                )}
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/track-truck"
                className={cn(
                  "px-3 py-2 rounded-md transition-colors",
                  isActive("/track-truck") 
                    ? "bg-waste-accent/30 text-white" 
                    : "hover:bg-waste-accent/20"
                )}
              >
                Track Truck
              </Link>
            </li>
            <li>
              <Link
                to="/complaint"
                className={cn(
                  "px-3 py-2 rounded-md transition-colors",
                  isActive("/complaint") 
                    ? "bg-waste-accent/30 text-white" 
                    : "hover:bg-waste-accent/20"
                )}
              >
                Complaint
              </Link>
            </li>
            <li>
              <Link
                to="/pickup-schedule"
                className={cn(
                  "px-3 py-2 rounded-md transition-colors",
                  isActive("/pickup-schedule") 
                    ? "bg-waste-accent/30 text-white" 
                    : "hover:bg-waste-accent/20"
                )}
              >
                Pickup Schedule
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className={cn(
                  "px-3 py-2 rounded-md transition-colors",
                  isActive("/index") 
                    ? "bg-waste-accent/30 text-white" 
                    : "hover:bg-waste-accent/20"
                )}
              >
                Log Out
              </Link>
            </li>
          </ul>
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 pb-3">
            <ul className="flex flex-col space-y-2">
              <li>
                <Link
                  to="/dashboard"
                  className={cn(
                    "block px-3 py-2 rounded-md",
                    isActive("/dashboard") 
                      ? "bg-waste-accent/30" 
                      : "hover:bg-waste-accent/20"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  className={cn(
                    "block px-3 py-2 rounded-md",
                    isActive("/profile") 
                      ? "bg-waste-accent/30" 
                      : "hover:bg-waste-accent/20"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/track-truck"
                  className={cn(
                    "block px-3 py-2 rounded-md",
                    isActive("/track-truck") 
                      ? "bg-waste-accent/30" 
                      : "hover:bg-waste-accent/20"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Track Truck
                </Link>
              </li>
              <li>
                <Link
                  to="/complaint"
                  className={cn(
                    "block px-3 py-2 rounded-md",
                    isActive("/complaint") 
                      ? "bg-waste-accent/30" 
                      : "hover:bg-waste-accent/20"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Complaint
                </Link>
              </li>
              <li>
                <Link
                  to="/pickup-schedule"
                  className={cn(
                    "block px-3 py-2 rounded-md",
                    isActive("/pickup-schedule") 
                      ? "bg-waste-accent/30" 
                      : "hover:bg-waste-accent/20"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pickup Schedule
                </Link>
              </li>
              <li>
                <Link
                  to="/index"
                  className={cn(
                    "block px-3 py-2 rounded-md",
                    isActive("/index") 
                      ? "bg-waste-accent/30" 
                      : "hover:bg-waste-accent/20"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Log Out
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default DashboardNav;
