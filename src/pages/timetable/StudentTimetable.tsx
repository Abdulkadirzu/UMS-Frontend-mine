import React from "react";
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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search, Download, Calendar, User, Building } from "lucide-react";

const StudentTimetable: React.FC = () => {
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Student Timetable</h2>
        <div className="flex space-x-4">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        <div className="space-y-2">
          <Label>Search Student</Label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Search students..." className="pl-10" />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Batch</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="All batches" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Batches</SelectItem>
              <SelectItem value="2024">2024 Batch</SelectItem>
              <SelectItem value="2023">2023 Batch</SelectItem>
              <SelectItem value="2022">2022 Batch</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Week</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Current week" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="current">Current Week</SelectItem>
              <SelectItem value="next">Next Week</SelectItem>
              <SelectItem value="previous">Previous Week</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>View</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Weekly view" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="weekly">Weekly View</SelectItem>
              <SelectItem value="daily">Daily View</SelectItem>
              <SelectItem value="list">List View</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Time</TableHead>
              <TableHead>Monday</TableHead>
              <TableHead>Tuesday</TableHead>
              <TableHead>Wednesday</TableHead>
              <TableHead>Thursday</TableHead>
              <TableHead>Friday</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">9:00 - 10:00</TableCell>
              <TableCell>
                <div className="space-y-1">
                  <div className="font-medium">Data Structures</div>
                  <div className="text-sm text-gray-500">Dr. John Smith</div>
                  <div className="text-sm text-gray-500">Room 101</div>
                </div>
              </TableCell>
              <TableCell>
                <div className="space-y-1">
                  <div className="font-medium">Algorithms</div>
                  <div className="text-sm text-gray-500">Dr. Sarah Johnson</div>
                  <div className="text-sm text-gray-500">Room 102</div>
                </div>
              </TableCell>
              <TableCell>
                <div className="space-y-1">
                  <div className="font-medium">Database Systems</div>
                  <div className="text-sm text-gray-500">
                    Prof. Michael Brown
                  </div>
                  <div className="text-sm text-gray-500">Room 103</div>
                </div>
              </TableCell>
              <TableCell>
                <div className="space-y-1">
                  <div className="font-medium">Web Development</div>
                  <div className="text-sm text-gray-500">Dr. Emily Davis</div>
                  <div className="text-sm text-gray-500">Lab 201</div>
                </div>
              </TableCell>
              <TableCell>
                <div className="space-y-1">
                  <div className="font-medium">Software Engineering</div>
                  <div className="text-sm text-gray-500">
                    Prof. Robert Wilson
                  </div>
                  <div className="text-sm text-gray-500">Room 104</div>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">10:00 - 11:00</TableCell>
              <TableCell>
                <div className="space-y-1">
                  <div className="font-medium">Computer Networks</div>
                  <div className="text-sm text-gray-500">Dr. Lisa Anderson</div>
                  <div className="text-sm text-gray-500">Lab 202</div>
                </div>
              </TableCell>
              <TableCell>
                <div className="space-y-1">
                  <div className="font-medium">Operating Systems</div>
                  <div className="text-sm text-gray-500">
                    Prof. David Miller
                  </div>
                  <div className="text-sm text-gray-500">Room 105</div>
                </div>
              </TableCell>
              <TableCell>
                <div className="space-y-1">
                  <div className="font-medium">Machine Learning</div>
                  <div className="text-sm text-gray-500">Dr. James Taylor</div>
                  <div className="text-sm text-gray-500">Lab 203</div>
                </div>
              </TableCell>
              <TableCell>
                <div className="space-y-1">
                  <div className="font-medium">Cloud Computing</div>
                  <div className="text-sm text-gray-500">
                    Prof. Jennifer White
                  </div>
                  <div className="text-sm text-gray-500">Room 106</div>
                </div>
              </TableCell>
              <TableCell>
                <div className="space-y-1">
                  <div className="font-medium">Cybersecurity</div>
                  <div className="text-sm text-gray-500">Dr. Thomas Clark</div>
                  <div className="text-sm text-gray-500">Lab 204</div>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>

      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-500">
          Showing schedule for John Doe (CS 2024)
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Calendar View
          </Button>
          <Button variant="outline">
            <Building className="mr-2 h-4 w-4" />
            Room View
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StudentTimetable;
