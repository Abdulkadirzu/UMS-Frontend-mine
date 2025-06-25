import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

interface EventsPageProps {
  type?: "upcoming" | "past";
}

const EventsPage = ({ type = "upcoming" }: EventsPageProps) => {
  // Mock data for events
  const eventsData = [
    {
      id: 1,
      title: "Annual Sports Day",
      description: "Join us for a day of sports and activities!",
      date: "2024-04-15",
      time: "9:00 AM - 4:00 PM",
      location: "Main Sports Complex",
      attendees: 150,
      status: "upcoming",
    },
    {
      id: 2,
      title: "Career Fair 2024",
      description: "Meet potential employers and explore career opportunities.",
      date: "2024-04-20",
      time: "10:00 AM - 3:00 PM",
      location: "Conference Hall",
      attendees: 200,
      status: "upcoming",
    },
    {
      id: 3,
      title: "Cultural Festival",
      description: "Celebrate diversity with cultural performances and food.",
      date: "2024-03-01",
      time: "2:00 PM - 8:00 PM",
      location: "Main Auditorium",
      attendees: 300,
      status: "past",
    },
  ];

  const filteredEvents = eventsData.filter(
    (event) => event.status === (type === "past" ? "past" : "upcoming")
  );

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">
          {type === "past" ? "Past Events" : "Upcoming Events"}
        </h1>
        <p className="text-gray-500 mt-1">
          {type === "past"
            ? "View all past events and their details"
            : "Stay updated with upcoming events"}
        </p>
      </div>

      <div className="grid gap-6">
        {filteredEvents.map((event) => (
          <Card key={event.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle>{event.title}</CardTitle>
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
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center">
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
