import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Plus,
  Search,
  Filter,
  Video,
  Calendar,
  Clock,
  Users,
} from "lucide-react";

const OnlineClassesPage: React.FC = () => {
  // Mock data for online classes
  const onlineClasses = [
    {
      id: 1,
      title: "Introduction to Programming",
      course: "CS101",
      instructor: "Dr. John Smith",
      date: "2024-03-20",
      time: "10:00 AM",
      duration: "1 hour",
      platform: "Zoom",
      meetingId: "123-456-789",
      password: "CS101",
      participants: 45,
      status: "Scheduled",
    },
    {
      id: 2,
      title: "Database Systems",
      course: "CS201",
      instructor: "Prof. Sarah Johnson",
      date: "2024-03-21",
      time: "2:00 PM",
      duration: "1.5 hours",
      platform: "Zoom",
      meetingId: "987-654-321",
      password: "CS201",
      participants: 38,
      status: "Completed",
    },
    {
      id: 3,
      title: "Web Development",
      course: "CS301",
      instructor: "Dr. Michael Brown",
      date: "2024-03-22",
      time: "11:30 AM",
      duration: "2 hours",
      platform: "Zoom",
      meetingId: "456-789-123",
      password: "CS301",
      participants: 52,
      status: "Scheduled",
    },
  ];

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Online Classes</h1>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Schedule New Class
        </Button>
      </div>

      {/* Search and Filter Bar */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search classes..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
      </div>

      {/* Classes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {onlineClasses.map((class_) => (
          <Card key={class_.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">{class_.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Course:</span>
                  <span className="font-medium">{class_.course}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Instructor:</span>
                  <span className="font-medium">{class_.instructor}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Platform:</span>
                  <span className="font-medium">{class_.platform}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Meeting ID:</span>
                  <span className="font-medium">{class_.meetingId}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Password:</span>
                  <span className="font-medium">{class_.password}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Date:</span>
                  <span className="font-medium">{class_.date}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Time:</span>
                  <span className="font-medium">{class_.time}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Duration:</span>
                  <span className="font-medium">{class_.duration}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Participants:</span>
                  <span className="font-medium">{class_.participants}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Status:</span>
                  <span
                    className={`font-medium ${
                      class_.status === "Completed"
                        ? "text-green-600"
                        : "text-blue-600"
                    }`}
                  >
                    {class_.status}
                  </span>
                </div>
                <div className="pt-4 flex gap-2">
                  <Button variant="outline" className="flex-1">
                    Edit
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Join Meeting
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OnlineClassesPage;
