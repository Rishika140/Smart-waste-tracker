import { useState, useEffect } from "react";
import DashboardNav from "@/components/DashboardNav";
import MapComponent from "@/components/MapComponent";
import { Button } from "@/components/ui/button";
import { Bell, BellOff } from "lucide-react";

const TrackTruckPage = () => {
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [loading, setLoading] = useState(true);
  const [errMsg, setErrMsg] = useState("");
  const [notifEnabled, setNotifEnabled] = useState(true);

  // Try to grab user's geolocation when we mount
  useEffect(() => {
    const fetchLocation = () => {
      if (!navigator.geolocation) {
        // fallback if geolocation isn't there
        console.warn("Geolocation unsupported");
        setErrMsg("Your browser doesn't support geolocation. We'll use a default location.");
        setLocation({ lat: 28.6139, lng: 77.2090 });
        setLoading(false);
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setLocation({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          });
          setLoading(false);
        },
        (err) => {
          console.error("Location fetch failed:", err);
          setErrMsg("Couldn't fetch location. We'll fallback to default spot.");
          setLocation({ lat: 28.6139, lng: 77.2090 });
          setLoading(false);
        },
        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 10000,
        }
      );
    };

    fetchLocation();
  }, []);

  // Just dummy truck data for now - can update later if needed
  const truckDetails = {
    id: "T-12345",
    status: "On Route",
    eta: "3:45 PM",
    distanceAway: "1.2 km",
    movingSpeed: "35 km/h",
  };

  const handleToggleNotif = () => {
    setNotifEnabled((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav />

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-waste-primary">
              Truck Tracker
            </h1>
            <p className="text-gray-600">
              Keep an eye on your local waste collection truck in real-time!
            </p>
          </div>

          {/* Notification Toggle */}
          <Button
            variant={notifEnabled ? "outline" : "default"}
            onClick={handleToggleNotif}
            className="gap-2"
          >
            {notifEnabled ? (
              <>
                <BellOff className="h-4 w-4" /> Mute Alerts
              </>
            ) : (
              <>
                <Bell className="h-4 w-4" /> Turn On Alerts
              </>
            )}
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Section */}
          <div className="lg:col-span-2 rounded-lg overflow-hidden shadow-md">
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              {loading ? (
                <div className="h-[500px] flex items-center justify-center bg-gray-100">
                  <p>Loading your map...</p>
                </div>
              ) : (
                <MapComponent initialLocation={location || undefined} />
              )}
            </div>
          </div>

          {/* Truck Details Card */}
          <div className="bg-white rounded-lg shadow-md p-6 h-fit">
            <h2 className="text-xl font-bold mb-6 text-waste-primary">
              Truck Snapshot
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">ID</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {truckDetails.id}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500">Status</h3>
                <p className="mt-1 inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  {truckDetails.status}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500">ETA</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {truckDetails.eta}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500">Distance</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {truckDetails.distanceAway}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500">Speed</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {truckDetails.movingSpeed}
                </p>
              </div>
            </div>

            {/* Probably can split this into a separate component later */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-waste-primary">Today's Collection</h3>
              <p className="text-sm text-gray-600 mt-1">
                Collection is happening normally. Make sure your bins are outside!
              </p>
            </div>

            <div className="mt-4 p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-waste-primary">Alert Settings</h3>
              <p className="text-sm text-gray-600 mt-1">
                {notifEnabled
                  ? "You will be alerted when the truck is near."
                  : "Alerts are muted for now. Enable if needed."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackTruckPage;
