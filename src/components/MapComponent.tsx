
import { useEffect, useRef, useState, useCallback } from "react";
import { useToast } from "@/components/ui/use-toast";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { Truck } from "lucide-react";

interface MapComponentProps {
  initialLocation?: { lat: number; lng: number };
}

const MapComponent = ({ initialLocation = { lat: 28.6139, lng: 77.2090 } }: MapComponentProps) => {
  const [truckPosition, setTruckPosition] = useState(initialLocation);
  const { toast } = useToast();
  const [mapRef, setMapRef] = useState<google.maps.Map | null>(null);
  const [isMapVisible, setIsMapVisible] = useState(false);

  // Using a publicly shareable API key for demo purposes
  const googleMapsApiKey = "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg";

  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey
  });

  const onMapLoad = useCallback((map: google.maps.Map) => {
    setMapRef(map);
    setIsMapVisible(true);
    console.log("Map loaded successfully");
  }, []);

  // Simulate truck movement
  useEffect(() => {
    if (!isLoaded) return;

    let i = 0;
    const simulateMovement = () => {
      i++;
      const newLng = initialLocation.lng + (Math.sin(i / 10) * 0.002);
      const newLat = initialLocation.lat + (Math.cos(i / 10) * 0.002);
      
      setTruckPosition({ lat: newLat, lng: newLng });
      
      // Check if truck is near user's location (simulated check)
      const distanceToUser = Math.sqrt(
        Math.pow(newLng - initialLocation.lng, 2) + 
        Math.pow(newLat - initialLocation.lat, 2)
      );
      
      // If truck is within certain distance, show notification
      if (distanceToUser < 0.001 && i % 50 === 0) {
        toast({
          title: "Truck Nearby",
          description: "The waste collection truck is approaching your location!",
          duration: 5000,
        });
      }
    };

    const interval = setInterval(simulateMovement, 500);

    // Clean up
    return () => {
      clearInterval(interval);
    };
  }, [isLoaded, initialLocation, toast]);

  const mapContainerStyle = {
    width: '100%',
    height: '500px',
    borderRadius: '0.5rem'
  };

  if (loadError) {
    return (
      <div className="h-[500px] w-full flex items-center justify-center bg-gray-100 rounded-lg">
        <p className="text-red-500">Error loading maps. Please check your connection and try again.</p>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="h-[500px] w-full flex items-center justify-center bg-gray-100 rounded-lg">
        <p className="text-gray-500">Loading map...</p>
      </div>
    );
  }

  return (
    <div className="relative">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={initialLocation}
        zoom={15}
        onLoad={onMapLoad}
        options={{
          disableDefaultUI: false,
          zoomControl: true,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: true,
        }}
      >
        {/* User location marker */}
        <Marker
          position={initialLocation}
          icon={{
            url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
          }}
          title="Your Location"
        />
        
        {/* Truck marker */}
        <Marker
          position={truckPosition}
          icon={{
            url: "https://maps.google.com/mapfiles/ms/icons/green-dot.png",
          }}
          title="Waste Collection Truck"
        />
      </GoogleMap>
    </div>
  );
};

export default MapComponent;
