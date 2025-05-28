import { useState } from "react";
import DashboardNav from "@/components/DashboardNav";
import WasteChart from "@/components/WasteChart";

// This page acts as the main dashboard users land on
const DashboardPage = () => {
  // Not bothering with dynamic fetching yet – just hardcoded dummy data for now
  const [chartInfo] = useState(() => {
    return {
      labels: ["Biodegradable", "Plastic", "Glass", "Metal"],
      values: [120, 80, 30, 20],  // total collected per type
      colors: [
        "rgba(75, 192, 192, 0.6)",
        "rgba(255, 159, 64, 0.6)",
        "rgba(153, 102, 255, 0.6)",
        "rgba(255, 205, 86, 0.6)",
      ],
    };
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-waste-primary">Dashboard</h1>
          <p className="text-gray-600">Welcome to your SmartWaste Tracker dashboard</p>
        </div>

       

        {/* High-level stats summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Waste Collected</h3>
            <p className="text-3xl font-bold text-waste-accent">250 kg</p>
            <div className="mt-2 text-sm text-green-600">↑ 12% from last month</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Pickups Completed</h3>
            <p className="text-3xl font-bold text-waste-accent">8</p>
            <div className="mt-2 text-sm text-gray-500">This month</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Recycling Rate</h3>
            <p className="text-3xl font-bold text-waste-accent">68%</p>
            <div className="mt-2 text-sm text-green-600">↑ 5% from last month</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Next Pickup</h3>
            <p className="text-3xl font-bold text-waste-accent">Apr 4</p>
            <div className="mt-2 text-sm text-gray-500">In 6 huours</div>
          </div>
        </div>

        {/* This might be better off split into its own component later */}
        <div className="grid grid-cols-1 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-6 text-waste-primary">Waste Collection Overview</h2>
            <div className="h-80">
              {/* Note: may want to optimize this for responsiveness later */}
              <WasteChart data={chartInfo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
