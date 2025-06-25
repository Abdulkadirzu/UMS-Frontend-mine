import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Calendar,
  Download,
  Printer,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const ViewTimetables: React.FC = () => {
  const timeSlots = [
    "9:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "12:00 PM - 1:00 PM",
    "2:00 PM - 3:00 PM",
    "3:00 PM - 4:00 PM",
  ];

  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const generateSchedule = () => {
    const schedule: { [key: string]: { [key: string]: string } } = {};
    weekdays.forEach((day) => {
      schedule[day] = {};
      timeSlots.forEach((slot) => {
        schedule[day][slot] = Math.random() > 0.3 ? "Class Scheduled" : "Free";
      });
    });
    return schedule;
  };

  const schedule = generateSchedule();

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">View Timetables</h2>
          <p className="text-sm text-gray-500 mt-1">
            View the timetable for a class
          </p>
        </div>
        <div className="flex space-x-4">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Select Date
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button variant="outline">
            <Printer className="mr-2 h-4 w-4" />
            Print
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium">Department</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cs">Computer Science</SelectItem>
              <SelectItem value="ee">Electrical Engineering</SelectItem>
              <SelectItem value="me">Mechanical Engineering</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Batch</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select batch" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024">2024 Batch</SelectItem>
              <SelectItem value="2023">2023 Batch</SelectItem>
              <SelectItem value="2022">2022 Batch</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">View Type</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Weekly" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="list">List</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                  Time
                </th>
                {weekdays.map((day) => (
                  <th
                    key={day}
                    className="px-6 py-3 text-left text-sm font-medium text-gray-500"
                  >
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {timeSlots.map((slot) => (
                <tr key={slot} className="border-b">
                  <td className="px-6 py-4 font-medium">{slot}</td>
                  {weekdays.map((day) => (
                    <td
                      key={`${day}-${slot}`}
                      className={`px-6 py-4 ${
                        schedule[day][slot] === "Free"
                          ? "text-gray-500"
                          : "text-blue-600"
                      }`}
                    >
                      {schedule[day][slot]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <div className="flex justify-between items-center">
        <Button variant="outline">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Previous Week
        </Button>
        <Button variant="outline">
          Next Week
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ViewTimetables;
