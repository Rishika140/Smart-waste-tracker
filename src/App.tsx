
import { Toaster } from "@/components/ui/toaster";
import { Toaster as FancyToast } from "@/components/ui/sonner";  
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Main page components
import Index from "./pages/Index";
import FeaturesPage from "./pages/FeaturesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import DashboardPage from "./pages/DashboardPage";
import ProfilePage from "./pages/ProfilePage";
import TrackTruckPage from "./pages/TrackTruckPage";
import ComplaintPage from "./pages/ComplaintPage";
import PickupSchedulePage from "./pages/PickupSchedulePage";
import NotFound from "./pages/NotFound";
import ResetPasswordPage from "./pages/ResetPasswordPage";

const qc = new QueryClient(); 

const App = () => {
  return (
    <QueryClientProvider client={qc}>
      <TooltipProvider>
        <Toaster />
        <FancyToast />
        
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/track-truck" element={<TrackTruckPage />} />
            <Route path="/complaint" element={<ComplaintPage />} />
            <Route path="/pickup-schedule" element={<PickupSchedulePage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            
          
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
