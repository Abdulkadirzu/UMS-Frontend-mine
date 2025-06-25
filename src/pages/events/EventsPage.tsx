import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  attendees: number;
  status: "upcoming" | "past";
}

const EventsPage = () => {
  // Mock data for events
  const events: Event[] = [
    {
      id: 1,
      title: "Annual Sports Day",
      description: "Join us for a day of sports and fun activities.",
      date: "2024-03-15",
      time: "09:00 AM - 04:00 PM",
      location: "Main Sports Complex",
      attendees: 150,
      status: "upcoming",
    },
    {
      id: 2,
      title: "Career Fair 2024",
      description: "Meet potential employers and explore career opportunities.",
      date: "2024-03-20",
      time: "10:00 AM - 03:00 PM",
      location: "Conference Hall",
      attendees: 200,
      status: "upcoming",
    },
    {
      id: 3,
      title: "Cultural Festival",
      description: "Celebrate diversity through music, dance, and food.",
      date: "2024-02-28",
      time: "11:00 AM - 08:00 PM",
      location: "Campus Grounds",
      attendees: 300,
      status: "past",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <Card key={event.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">{event.title}</CardTitle>
                <Badge
                  variant={
                    event.status === "upcoming" ? "default" : "secondary"
                  }
                >
                  {event.status === "upcoming" ? "Upcoming" : "Past"}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <div className="space-y-2">
                <div className="flex items-center text-gray-500">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <Users className="h-4 w-4 mr-2" />
                  <span>{event.attendees} attendees</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
