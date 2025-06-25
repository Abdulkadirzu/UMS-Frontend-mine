import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const staff = [
  {
    id: 1,
    name: "Dr. John Smith",
    role: "Professor",
    department: "Computer Science",
    email: "john.smith@university.edu",
    phone: "+1 234-567-8901",
  },
  {
    id: 2,
    name: "Dr. Sarah Johnson",
    role: "Associate Professor",
    department: "Computer Science",
    email: "sarah.johnson@university.edu",
    phone: "+1 234-567-8902",
  },
  {
    id: 3,
    name: "Dr. Michael Brown",
    role: "Assistant Professor",
    department: "Computer Science",
    email: "michael.brown@university.edu",
    phone: "+1 234-567-8903",
  },
  {
    id: 4,
    name: "Dr. Emily Davis",
    role: "Lecturer",
    department: "Computer Science",
    email: "emily.davis@university.edu",
    phone: "+1 234-567-8904",
  },
];

const DepartmentStaff: React.FC = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Department Staff</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Add New Staff
        </button>
      </div>
      <div className="bg-white rounded-lg shadow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {staff.map((member) => (
              <TableRow key={member.id}>
                <TableCell>{member.name}</TableCell>
                <TableCell>{member.role}</TableCell>
                <TableCell>{member.department}</TableCell>
                <TableCell>{member.email}</TableCell>
                <TableCell>{member.phone}</TableCell>
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

export default DepartmentStaff;
