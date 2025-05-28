
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen waste-gradient flex flex-col items-center justify-center p-4 text-white">
      <div className="text-center max-w-md">
        <h1 className="text-6xl sm:text-8xl font-bold mb-6">404</h1>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-lg mb-8 opacity-90">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/">
          <Button className="bg-white text-waste-primary hover:bg-gray-100">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
