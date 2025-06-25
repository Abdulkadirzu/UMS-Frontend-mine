import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const courses = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Programming",
    credits: 3,
    department: "Computer Science",
    semester: "Fall 2024",
  },
  {
    id: 2,
    code: "CS102",
    name: "Data Structures",
    credits: 4,
    department: "Computer Science",
    semester: "Fall 2024",
  },
  {
    id: 3,
    code: "CS201",
    name: "Database Systems",
    credits: 3,
    department: "Computer Science",
    semester: "Spring 2025",
  },
  {
    id: 4,
    code: "CS301",
    name: "Software Engineering",
    credits: 4,
    department: "Computer Science",
    semester: "Spring 2025",
  },
];

const DepartmentCourses: React.FC = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Department Courses</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Add New Course
        </button>
      </div>
      <div className="bg-white rounded-lg shadow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Code</TableHead>
              <TableHead>Course Name</TableHead>
              <TableHead>Credits</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Semester</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {courses.map((course) => (
              <TableRow key={course.id}>
                <TableCell>{course.code}</TableCell>
                <TableCell>{course.name}</TableCell>
                <TableCell>{course.credits}</TableCell>
                <TableCell>{course.department}</TableCell>
                <TableCell>{course.semester}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <button className="text-blue-500 hover:text-blue-700">
                      Edit
                    </button>
                    <button className="text-red-500 hover:text-red-700">
                      Delete
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DepartmentCourses;
