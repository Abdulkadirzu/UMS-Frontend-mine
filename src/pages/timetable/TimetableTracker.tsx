import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Search,
  Download,
  History,
  User,
  Calendar,
  AlertCircle,
} from "lucide-react";

const TimetableTracker: React.FC = () => {
  const changes = [
    {
      id: 1,
      date: "2024-03-15",
      time: "10:30 AM",
      type: "Class Rescheduled",
      details: "Data Structures class moved from Room 101 to Lab 201",
      department: "Computer Science",
      batch: "2024 Batch",
      status: "Approved",
    },
    {
      id: 2,
      date: "2024-03-14",
      time: "2:15 PM",
      type: "Teacher Change",
      details: "Dr. Sarah Johnson replaced Dr. John Smith for Algorithms",
      department: "Computer Science",
      batch: "2023 Batch",
      status: "Pending",
    },
    {
      id: 3,
      date: "2024-03-13",
      time: "11:45 AM",
      type: "Time Slot Change",
      details: "Database Systems moved from 2 PM to 3 PM",
      department: "Computer Science",
      batch: "2024 Batch",
      status: "Rejected",
    },
  ];

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">Timetable Tracker</h2>
          <p className="text-sm text-gray-500 mt-1">
            Monitor and track timetable changes and updates
          </p>
        </div>
        <div className="flex space-x-4">
          <Button variant="outline">
            <History className="mr-2 h-4 w-4" />
            View History
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        <div className="space-y-2">
          <Label>Search</Label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Search changes..." className="pl-10" />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Department</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="All departments" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>
              <SelectItem value="cs">Computer Science</SelectItem>
              <SelectItem value="ee">Electrical Engineering</SelectItem>
              <SelectItem value="me">Mechanical Engineering</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Change Type</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="All types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="reschedule">Class Rescheduled</SelectItem>
              <SelectItem value="teacher">Teacher Change</SelectItem>
              <SelectItem value="time">Time Slot Change</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Status</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="All status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date & Time</TableHead>
              <TableHead>Change Type</TableHead>
              <TableHead>Details</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Batch</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {changes.map((change) => (
              <TableRow key={change.id}>
                <TableCell>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span>{change.date}</span>
                    </div>
                    <div className="text-sm text-gray-500">{change.time}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {change.type}
                  </span>
                </TableCell>
                <TableCell>{change.details}</TableCell>
                <TableCell>{change.department}</TableCell>
                <TableCell>{change.batch}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      change.status === "Approved"
                        ? "bg-green-100 text-green-800"
                        : change.status === "Pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {change.status}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm">
                      View Details
                    </Button>
                    {change.status === "Pending" && (
                      <Button variant="ghost" size="sm">
                        Approve
                      </Button>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      <div className="mt-6">
        <h3 className="text-lg font-medium mb-4">Recent Alerts</h3>
        <Card className="p-4">
          <div className="flex items-center space-x-4">
            <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center">
              <AlertCircle className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <h4 className="font-medium">Pending Changes</h4>
              <p className="text-sm text-gray-500">
                3 changes awaiting approval
              </p>
              <p className="text-sm text-gray-500">Last updated: 2024-03-15</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TimetableTracker;
