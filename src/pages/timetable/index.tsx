import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Calendar, Users, Building, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const TimetableIndex: React.FC = () => {
  const modules = [
    {
      title: "Class Timing Sets",
      description: "Manage class timing sets and periods",
      icon: Clock,
      path: "/timetable/class-timing-sets",
    },
    {
      title: "Timetable Management",
      description: "Create and manage timetables",
      icon: Calendar,
      path: "/timetable/management",
    },
    {
      title: "Teacher Timetable",
      description: "View and manage teacher schedules",
      icon: Users,
      path: "/timetable/teacher",
    },
    {
      title: "Student Timetable",
      description: "View and manage student schedules",
      icon: Users,
      path: "/timetable/student",
    },
    {
      title: "Room Timetable",
      description: "View and manage room schedules",
      icon: Building,
      path: "/timetable/room",
    },
    {
      title: "Settings",
      description: "Configure timetable settings",
      icon: Settings,
      path: "/timetable/settings",
    },
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Timetable Management</h1>
        <p className="text-gray-500">
          Manage class timings, schedules, and view timetables for teachers,
          students, and rooms.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((module) => (
          <Link key={module.path} to={module.path}>
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <module.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{module.title}</h3>
                  <p className="text-sm text-gray-500">{module.description}</p>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-4">
          <Button>
            <Calendar className="mr-2 h-4 w-4" />
            Create New Timetable
          </Button>
          <Button variant="outline">
            <Clock className="mr-2 h-4 w-4" />
            Manage Timing Sets
          </Button>
          <Button variant="outline">
            <Users className="mr-2 h-4 w-4" />
            View Teacher Schedules
          </Button>
          <Button variant="outline">
            <Building className="mr-2 h-4 w-4" />
            View Room Schedules
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TimetableIndex;
