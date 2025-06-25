import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Search, AlertTriangle } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Discipline = () => {
  // Mock data for disciplinary records
  const records = [
    {
      id: 1,
      studentName: "John Doe",
      studentId: "STU001",
      course: "Computer Science",
      incidentDate: "2024-03-15",
      type: "Academic Misconduct",
      description: "Plagiarism in assignment",
      status: "Under Review",
      action: "Pending",
    },
    {
      id: 2,
      studentName: "Jane Smith",
      studentId: "STU002",
      course: "Computer Science",
      incidentDate: "2024-03-14",
      type: "Behavioral Issue",
      description: "Disruptive behavior in class",
      status: "Resolved",
      action: "Warning Issued",
    },
    {
      id: 3,
      studentName: "Mike Johnson",
      studentId: "STU003",
      course: "Computer Science",
      incidentDate: "2024-03-13",
      type: "Attendance Violation",
      description: "Excessive absences",
      status: "Under Review",
      action: "Pending",
    },
  ];

  return (
    <div className="container mx-auto py-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Disciplinary Records</CardTitle>
            <Button className="bg-blue-500 hover:bg-blue-600">
              <Plus className="mr-2 h-4 w-4" />
              Add Record
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input placeholder="Search students..." className="pl-10" />
              </div>
              <div className="w-[200px]">
                <Label>Filter by Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="academic">
                      Academic Misconduct
                    </SelectItem>
                    <SelectItem value="behavioral">Behavioral Issue</SelectItem>
                    <SelectItem value="attendance">
                      Attendance Violation
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-[200px]">
                <Label>Filter by Status</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="pending">Under Review</SelectItem>
                    <SelectItem value="resolved">Resolved</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student Name</TableHead>
                  <TableHead>Student ID</TableHead>
                  <TableHead>Course</TableHead>
                  <TableHead>Incident Date</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Action</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {records.map((record) => (
                  <TableRow key={record.id}>
                    <TableCell>{record.studentName}</TableCell>
                    <TableCell>{record.studentId}</TableCell>
                    <TableCell>{record.course}</TableCell>
                    <TableCell>{record.incidentDate}</TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          record.type === "Academic Misconduct"
                            ? "bg-red-100 text-red-800"
                            : record.type === "Behavioral Issue"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-orange-100 text-orange-800"
                        }`}
                      >
                        {record.type}
                      </span>
                    </TableCell>
                    <TableCell>{record.description}</TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          record.status === "Under Review"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-green-100 text-green-800"
                        }`}
                      >
                        {record.status}
                      </span>
                    </TableCell>
                    <TableCell>{record.action}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Discipline;
