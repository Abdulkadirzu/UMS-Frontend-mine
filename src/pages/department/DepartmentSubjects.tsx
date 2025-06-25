import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const subjects = [
  {
    id: 1,
    code: "SUB101",
    name: "Programming Fundamentals",
    course: "CS101",
    lecturer: "Dr. Smith",
    students: 45,
  },
  {
    id: 2,
    code: "SUB102",
    name: "Data Structures & Algorithms",
    course: "CS102",
    lecturer: "Dr. Johnson",
    students: 38,
  },
  {
    id: 3,
    code: "SUB201",
    name: "Database Design",
    course: "CS201",
    lecturer: "Dr. Williams",
    students: 42,
  },
  {
    id: 4,
    code: "SUB301",
    name: "Software Development",
    course: "CS301",
    lecturer: "Dr. Brown",
    students: 35,
  },
];

const DepartmentSubjects: React.FC = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Department Subjects</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Add New Subject
        </button>
      </div>
      <div className="bg-white rounded-lg shadow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Code</TableHead>
              <TableHead>Subject Name</TableHead>
              <TableHead>Course</TableHead>
              <TableHead>Lecturer</TableHead>
              <TableHead>Students</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {subjects.map((subject) => (
              <TableRow key={subject.id}>
                <TableCell>{subject.code}</TableCell>
                <TableCell>{subject.name}</TableCell>
                <TableCell>{subject.course}</TableCell>
                <TableCell>{subject.lecturer}</TableCell>
                <TableCell>{subject.students}</TableCell>
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

export default DepartmentSubjects;
