import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Search, MessageSquare } from "lucide-react";
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

const Remarks = () => {
  // Mock data for remarks
  const remarks = [
    {
      id: 1,
      studentName: "John Doe",
      studentId: "STU001",
      course: "Computer Science",
      date: "2024-03-15",
      category: "Academic Performance",
      remark: "Excellent progress in programming assignments",
      teacher: "Dr. Smith",
      status: "Active",
    },
    {
      id: 2,
      studentName: "Jane Smith",
      studentId: "STU002",
      course: "Computer Science",
      date: "2024-03-14",
      category: "Class Participation",
      remark: "Needs to participate more in class discussions",
      teacher: "Prof. Johnson",
      status: "Active",
    },
    {
      id: 3,
      studentName: "Mike Johnson",
      studentId: "STU003",
      course: "Computer Science",
      date: "2024-03-13",
      category: "Project Work",
      remark: "Outstanding work on the final project",
      teacher: "Dr. Williams",
      status: "Archived",
    },
  ];

  return (
    <div className="container mx-auto py-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Student Remarks</CardTitle>
            <Button className="bg-blue-500 hover:bg-blue-600">
              <Plus className="mr-2 h-4 w-4" />
              Add Remark
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
                <Label>Filter by Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="academic">
                      Academic Performance
                    </SelectItem>
                    <SelectItem value="participation">
                      Class Participation
                    </SelectItem>
                    <SelectItem value="project">Project Work</SelectItem>
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
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="archived">Archived</SelectItem>
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
                  <TableHead>Date</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Remark</TableHead>
                  <TableHead>Teacher</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {remarks.map((remark) => (
                  <TableRow key={remark.id}>
                    <TableCell>{remark.studentName}</TableCell>
                    <TableCell>{remark.studentId}</TableCell>
                    <TableCell>{remark.course}</TableCell>
                    <TableCell>{remark.date}</TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          remark.category === "Academic Performance"
                            ? "bg-blue-100 text-blue-800"
                            : remark.category === "Class Participation"
                            ? "bg-purple-100 text-purple-800"
                            : "bg-green-100 text-green-800"
                        }`}
                      >
                        {remark.category}
                      </span>
                    </TableCell>
                    <TableCell className="max-w-md truncate">
                      {remark.remark}
                    </TableCell>
                    <TableCell>{remark.teacher}</TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          remark.status === "Active"
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {remark.status}
                      </span>
                    </TableCell>
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

export default Remarks;
