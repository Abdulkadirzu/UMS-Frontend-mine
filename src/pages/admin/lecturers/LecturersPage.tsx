import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Eye, Edit, Trash } from "lucide-react";
import { lecturers } from "@/utils/mockData";
import SidebarLayout from "@/components/layout/SidebarLayout";

const LecturersPage = () => {
  return (
    <SidebarLayout>
      <div>
        <h1 className="text-2xl font-bold mb-6">Lecturer Management</h1>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>All Lecturers</CardTitle>
            <Button size="sm" variant="default">
              Add New Lecturer
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Specialization</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {lecturers.map((lecturer) => (
                  <TableRow key={lecturer.id}>
                    <TableCell className="font-medium">
                      {lecturer.employeeId}
                    </TableCell>
                    <TableCell>{lecturer.name}</TableCell>
                    <TableCell>{lecturer.department}</TableCell>
                    <TableCell>{lecturer.specialization}</TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded-md text-xs ${
                          lecturer.status === "Active"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {lecturer.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </SidebarLayout>
  );
};

export default LecturersPage;
