import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Timetable = () => {
  // Time slots
  const timeSlots = [
    "8:00 AM - 9:00 AM",
    "9:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "12:00 PM - 1:00 PM",
    "1:00 PM - 2:00 PM",
    "2:00 PM - 3:00 PM",
    "3:00 PM - 4:00 PM",
    "4:00 PM - 5:00 PM",
  ];

  // Days of the week
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  // Mock data for timetable
  const timetable = {
    Monday: [
      {
        id: 1,
        course: "Introduction to Physics",
        time: "9:00 AM - 11:00 AM",
        room: "Room 101",
        instructor: "Dr. Smith",
      },
      {
        id: 2,
        course: "Advanced Mathematics",
        time: "2:00 PM - 4:00 PM",
        room: "Room 302",
        instructor: "Prof. Johnson",
      },
    ],
    Tuesday: [
      {
        id: 3,
        course: "Computer Science",
        time: "10:00 AM - 12:00 PM",
        room: "Lab 101",
        instructor: "Dr. Brown",
      },
    ],
    Wednesday: [
      {
        id: 4,
        course: "Introduction to Physics",
        time: "9:00 AM - 11:00 AM",
        room: "Room 101",
        instructor: "Dr. Smith",
      },
      {
        id: 5,
        course: "Advanced Mathematics",
        time: "2:00 PM - 4:00 PM",
        room: "Room 302",
        instructor: "Prof. Johnson",
      },
    ],
    Thursday: [
      {
        id: 6,
        course: "Computer Science",
        time: "10:00 AM - 12:00 PM",
        room: "Lab 101",
        instructor: "Dr. Brown",
      },
    ],
    Friday: [
      {
        id: 7,
        course: "Introduction to Physics",
        time: "9:00 AM - 11:00 AM",
        room: "Room 101",
        instructor: "Dr. Smith",
      },
    ],
  };

  // Helper function to get class for a specific time slot and day
  const getClassForTimeSlot = (timeSlot: string, day: string) => {
    return timetable[day as keyof typeof timetable]?.find((class_) => {
      const [startTime] = class_.time.split(" - ");
      const [slotStartTime] = timeSlot.split(" - ");
      return startTime === slotStartTime;
    });
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Class Timetable</h1>
        <p className="text-gray-500 mt-1">View your weekly class schedule</p>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px]">Time</TableHead>
                {days.map((day) => (
                  <TableHead key={day}>{day}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {timeSlots.map((timeSlot) => (
                <TableRow key={timeSlot}>
                  <TableCell className="font-medium">{timeSlot}</TableCell>
                  {days.map((day) => {
                    const class_ = getClassForTimeSlot(timeSlot, day);
                    return (
                      <TableCell key={`${day}-${timeSlot}`}>
                        {class_ ? (
                          <div className="p-2 bg-blue-50 rounded-md">
                            <div className="font-medium">{class_.course}</div>
                            <div className="text-sm text-gray-500">
                              {class_.room}
                            </div>
                            <div className="text-sm text-gray-500">
                              {class_.instructor}
                            </div>
                          </div>
                        ) : (
                          <div className="text-gray-400">-</div>
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Timetable;
