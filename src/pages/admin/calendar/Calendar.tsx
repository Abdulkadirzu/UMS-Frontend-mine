import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Calendar as CalendarIcon, Plus, Search } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";

interface Event {
  id: string;
  title: string;
  date: Date;
  type: "exam" | "holiday" | "event" | "deadline";
  description: string;
  location?: string;
}

const CalendarPage: React.FC = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [events, setEvents] = useState<Event[]>([
    {
      id: "1",
      title: "Midterm Exams",
      date: new Date(2024, 2, 15),
      type: "exam",
      description: "Midterm examinations for all courses",
      location: "Main Campus",
    },
    {
      id: "2",
      title: "Spring Break",
      date: new Date(2024, 2, 20),
      type: "holiday",
      description: "Spring break holiday",
    },
    {
      id: "3",
      title: "Assignment Deadline",
      date: new Date(2024, 2, 25),
      type: "deadline",
      description: "Final project submission deadline",
    },
  ]);

  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isAddEventDialogOpen, setIsAddEventDialogOpen] = useState(false);
  const [newEvent, setNewEvent] = useState<Partial<Event>>({
    title: "",
    type: "event",
    description: "",
    location: "",
  });

  const getEventTypeColor = (type: Event["type"]) => {
    switch (type) {
      case "exam":
        return "bg-red-100 text-red-800";
      case "holiday":
        return "bg-green-100 text-green-800";
      case "event":
        return "bg-blue-100 text-blue-800";
      case "deadline":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleAddEvent = () => {
    if (date && newEvent.title) {
      const event: Event = {
        id: Math.random().toString(36).substr(2, 9),
        title: newEvent.title,
        date: date,
        type: newEvent.type as Event["type"],
        description: newEvent.description || "",
        location: newEvent.location,
      };
      setEvents([...events, event]);
      setNewEvent({
        title: "",
        type: "event",
        description: "",
        location: "",
      });
      setIsAddEventDialogOpen(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Academic Calendar</h1>
        <Dialog
          open={isAddEventDialogOpen}
          onOpenChange={setIsAddEventDialogOpen}
        >
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Event
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Event</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="title">Event Title</Label>
                <Input
                  id="title"
                  value={newEvent.title}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, title: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="type">Event Type</Label>
                <Select
                  value={newEvent.type}
                  onValueChange={(value) =>
                    setNewEvent({ ...newEvent, type: value as Event["type"] })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select event type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="exam">Exam</SelectItem>
                    <SelectItem value="holiday">Holiday</SelectItem>
                    <SelectItem value="event">Event</SelectItem>
                    <SelectItem value="deadline">Deadline</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  value={newEvent.description}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, description: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location (Optional)</Label>
                <Input
                  id="location"
                  value={newEvent.location}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, location: e.target.value })
                  }
                />
              </div>
              <Button onClick={handleAddEvent} className="w-full">
                Add Event
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </Card>

        <Card className="p-6 md:col-span-2">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Search className="h-4 w-4 text-gray-500" />
              <Input placeholder="Search events..." className="flex-1" />
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-semibold">
                {date?.toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </h2>

              <div className="space-y-2">
                {events
                  .filter(
                    (event) =>
                      event.date.toDateString() === date?.toDateString()
                  )
                  .map((event) => (
                    <div
                      key={event.id}
                      className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer"
                      onClick={() => setSelectedEvent(event)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">{event.title}</h3>
                          <p className="text-sm text-gray-500">
                            {event.date.toLocaleTimeString()}
                          </p>
                        </div>
                        <Badge className={getEventTypeColor(event.type)}>
                          {event.type}
                        </Badge>
                      </div>
                      {event.location && (
                        <p className="text-sm text-gray-500 mt-1">
                          Location: {event.location}
                        </p>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </Card>
      </div>

      {selectedEvent && (
        <Dialog
          open={!!selectedEvent}
          onOpenChange={() => setSelectedEvent(null)}
        >
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{selectedEvent.title}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label>Date</Label>
                <p>{selectedEvent.date.toLocaleDateString()}</p>
              </div>
              <div>
                <Label>Type</Label>
                <Badge className={getEventTypeColor(selectedEvent.type)}>
                  {selectedEvent.type}
                </Badge>
              </div>
              <div>
                <Label>Description</Label>
                <p>{selectedEvent.description}</p>
              </div>
              {selectedEvent.location && (
                <div>
                  <Label>Location</Label>
                  <p>{selectedEvent.location}</p>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default CalendarPage;
