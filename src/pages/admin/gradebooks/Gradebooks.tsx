import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Download } from "lucide-react";
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

const Gradebooks = () => {
  // Mock data for grades
  const grades = [
    {
      id: 1,
      studentName: "John Doe",
      studentId: "STU001",
      course: "Computer Science",
      subject: "Introduction to Programming",
      midterm: 85,
      final: 90,
      assignments: 88,
      total: 88,
      grade: "A",
    },
    {
      id: 2,
      studentName: "Jane Smith",
      studentId: "STU002",
      course: "Computer Science",
      subject: "Introduction to Programming",
      midterm: 78,
      final: 82,
      assignments: 80,
      total: 80,
      grade: "B",
    },
    {
      id: 3,
      studentName: "Mike Johnson",
      studentId: "STU003",
      course: "Computer Science",
      subject: "Introduction to Programming",
      midterm: 92,
      final: 95,
      assignments: 90,
      total: 92,
      grade: "A+",
    },
  ];

  return (
    <div className="container mx-auto py-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Gradebooks</CardTitle>
            <Button className="bg-blue-500 hover:bg-blue-600">
              <Download className="mr-2 h-4 w-4" />
              Export Grades
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
                <Label>Filter by Course</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All Courses" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Courses</SelectItem>
                    <SelectItem value="cs">Computer Science</SelectItem>
                    <SelectItem value="math">Mathematics</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-[200px]">
                <Label>Filter by Subject</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All Subjects" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Subjects</SelectItem>
                    <SelectItem value="programming">
                      Introduction to Programming
                    </SelectItem>
                    <SelectItem value="calculus">Calculus I</SelectItem>
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
                  <TableHead>Subject</TableHead>
                  <TableHead>Midterm</TableHead>
                  <TableHead>Final</TableHead>
                  <TableHead>Assignments</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Grade</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {grades.map((grade) => (
                  <TableRow key={grade.id}>
                    <TableCell>{grade.studentName}</TableCell>
                    <TableCell>{grade.studentId}</TableCell>
                    <TableCell>{grade.course}</TableCell>
                    <TableCell>{grade.subject}</TableCell>
                    <TableCell>{grade.midterm}</TableCell>
                    <TableCell>{grade.final}</TableCell>
                    <TableCell>{grade.assignments}</TableCell>
                    <TableCell>{grade.total}</TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          grade.grade === "A+"
                            ? "bg-green-100 text-green-800"
                            : grade.grade === "A"
                            ? "bg-green-50 text-green-700"
                            : grade.grade === "B"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {grade.grade}
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

export default Gradebooks;
