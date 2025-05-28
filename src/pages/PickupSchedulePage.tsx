import { useState, useEffect } from "react";
import DashboardNav from "@/components/DashboardNav";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

interface ScheduleEvent {
  date: Date;
  type: string;
  time: string;
  notes?: string;
  status?: "ontime" | "delayed" | "cancelled";
}

const PickupSchedulePage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [scheduleEvents, setScheduleEvents] = useState<ScheduleEvent[]>([]);
  const [selectedDayEvents, setSelectedDayEvents] = useState<ScheduleEvent[]>([]);

  useEffect(() => {
    const events: ScheduleEvent[] = [];
    const today = new Date();
    
    let pickupDay = new Date(today);
    
    pickupDay.setDate(today.getDate() + 1);
    
    for (let i = 0; i < 14; i++) {
      events.push({
        date: new Date(pickupDay),
        type: i % 3 === 0 ? "Recycling Pickup" : "Regular Pickup",
        time: "08:00 AM",
        notes: i % 3 === 0 
          ? "Recyclables only: plastic, paper, glass, and metal."
          : "Regular waste collection. Please ensure waste is properly sorted.",
        status: Math.random() > 0.8 ? "delayed" : "ontime"
      });
      
      pickupDay.setDate(pickupDay.getDate() + 2); 
    }
    
    const specialPickup = new Date(today);
    specialPickup.setDate(today.getDate() + 7); 
    
    events.push({
      date: specialPickup,
      type: "Special Pickup",
      time: "01:00 PM",
      notes: "Large item collection. Pre-registration required.",
      status: "ontime"
    });
    
    setScheduleEvents(events);
  }, []);

  useEffect(() => {
    if (!date) return;
    
    const events = scheduleEvents.filter(event => 
      event.date.getDate() === date.getDate() && 
      event.date.getMonth() === date.getMonth() && 
      event.date.getFullYear() === date.getFullYear()
    );
    
    setSelectedDayEvents(events);
  }, [date, scheduleEvents]);

  const hasEvent = (day: Date) => {
    return scheduleEvents.some(event => 
      event.date.getDate() === day.getDate() && 
      event.date.getMonth() === day.getMonth() && 
      event.date.getFullYear() === day.getFullYear()
    );
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "Regular Pickup":
        return "bg-green-100 text-green-800 hover:bg-green-200";
      case "Recycling Pickup":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200";
      case "Special Pickup":
        return "bg-purple-100 text-purple-800 hover:bg-purple-200";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200";
    }
  };

  const getStatusIndicator = (status: string | undefined) => {
    switch (status) {
      case "delayed":
        return <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">Delayed</span>;
      case "cancelled":
        return <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">Cancelled</span>;
      default:
        return <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">On Time</span>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-waste-primary">Pickup Schedule</h1>
            <p className="text-gray-600">
              View your upcoming waste collection dates and plan accordingly
            </p>
          </div>
          
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-center">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
                modifiers={{
                  hasEvent: (date) => hasEvent(date),
                }}
                modifiersStyles={{
                  hasEvent: {
                    backgroundColor: "#f0f9ff",
                    color: "#3b82f6",
                    fontWeight: "bold",
                  },
                }}
              />
            </div>

            <div className="mt-6">
              <h3 className="font-medium text-gray-700 mb-2">Pickup Types:</h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                  Regular Pickup
                </Badge>
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                  Recycling Pickup
                </Badge>
                <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">
                  Special Pickup
                </Badge>
              </div>
            </div>
            
            <div className="mt-4">
              <h3 className="font-medium text-gray-700 mb-2">Status:</h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                  On Time
                </Badge>
                <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
                  Delayed
                </Badge>
                <Badge className="bg-red-100 text-red-800 hover:bg-red-200">
                  Cancelled
                </Badge>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Schedule Details</CardTitle>
                <CardDescription>
                  {date
                    ? `Pickup information for ${date.toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}`
                    : "Select a date to view pickup details"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {selectedDayEvents.length > 0 ? (
                  <div className="space-y-6">
                    {selectedDayEvents.map((event, index) => (
                      <div
                        key={index}
                        className="border-l-4 border-waste-accent pl-4 py-2"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <Badge className={getEventTypeColor(event.type)}>
                              {event.type}
                            </Badge>
                            {event.status && getStatusIndicator(event.status)}
                            <h3 className="text-lg font-semibold mt-2">
                              {event.date.toLocaleDateString("en-US", {
                                weekday: "long",
                                month: "long",
                                day: "numeric",
                              })} at {event.time}
                            </h3>
                            {event.notes && (
                              <p className="text-gray-600 mt-1">{event.notes}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-500">
                      {date
                        ? "No pickups scheduled for this date."
                        : "Select a date to view pickup details."}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Next Regular Pickup</CardTitle>
                </CardHeader>
                <CardContent>
                  {scheduleEvents
                    .filter((event) => event.type === "Regular Pickup" && event.date >= new Date())
                    .sort((a, b) => a.date.getTime() - b.date.getTime())
                    .slice(0, 1)
                    .map((event, index) => (
                      <div key={index}>
                        <p className="text-xl font-semibold text-waste-primary">
                          {event.date.toLocaleDateString("en-US", {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                        <p className="text-gray-600 mt-1">Time: {event.time} {event.status && getStatusIndicator(event.status)}</p>
                        <p className="text-sm text-gray-500 mt-2">{event.notes}</p>
                      </div>
                    ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Next Recycling Pickup</CardTitle>
                </CardHeader>
                <CardContent>
                  {scheduleEvents
                    .filter((event) => event.type === "Recycling Pickup" && event.date >= new Date())
                    .sort((a, b) => a.date.getTime() - b.date.getTime())
                    .slice(0, 1)
                    .map((event, index) => (
                      <div key={index}>
                        <p className="text-xl font-semibold text-blue-600">
                          {event.date.toLocaleDateString("en-US", {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                        <p className="text-gray-600 mt-1">Time: {event.time} {event.status && getStatusIndicator(event.status)}</p>
                        <p className="text-sm text-gray-500 mt-2">{event.notes}</p>
                      </div>
                    ))}
                </CardContent>
              </Card>
            </div>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-waste-primary">Waste Segregation</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Please segregate your waste into biodegradable, recyclable (plastic, paper, glass, metal), 
                    and non-recyclable categories. Use different colored bags if possible.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-waste-primary">Placement</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Place your waste bins or bags at the designated collection point before 8:00 AM on the 
                    scheduled pickup day.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-waste-primary">Special Items</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    For large items, electronic waste, or hazardous materials, please schedule a special 
                    pickup through our customer service.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickupSchedulePage;