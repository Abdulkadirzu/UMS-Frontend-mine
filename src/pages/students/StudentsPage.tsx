import SidebarLayout from "@/components/layout/SidebarLayout";
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
import {
  Eye,
  Edit,
  Trash,
  UserPlus,
  Pencil,
  ShoppingBag,
  DollarSign,
} from "lucide-react";
import { students } from "@/utils/mockData";

const StudentsPage = () => {
  return (
    <SidebarLayout>
      <div className="p-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Student Management
            </h1>
            <p className="text-gray-500 mt-1">
              Manage and view all student records
            </p>
          </div>
        </div>

        {/* New Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Registered Units Card */}
          <Card className="bg-[#1E3A8A] text-white">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-lg font-medium">Registered Units</p>
                <h3 className="text-4xl font-bold mt-2">0</h3>
              </div>
              <Pencil className="h-10 w-10 opacity-75" />
            </CardContent>
          </Card>

          {/* Attempted Units Card */}
          <Card className="bg-[#C5221F] text-white">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-lg font-medium">Attempted Units</p>
                <h3 className="text-4xl font-bold mt-2">67</h3>
              </div>
              <ShoppingBag className="h-10 w-10 opacity-75" />
            </CardContent>
          </Card>

          {/* Fee Payment Card */}
          <Card className="bg-[#1E3A8A] text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-medium">Fee Payment</CardTitle>
              <DollarSign className="h-6 w-6" />
            </CardHeader>
            <CardContent className="pt-0">
              <div className="bg-[#C5221F] p-4 rounded-md">
                <p className="text-sm font-medium">
                  Total Billed = Ksh.167,816.00
                </p>
                <p className="text-sm font-medium">
                  Total Paid = Ksh.168,460.00
                </p>
                <p className="text-sm font-medium">Fee Balance = Ksh.-644.00</p>
              </div>
              <div className="flex items-center mt-4 space-x-4">
                <Button
                  size="sm"
                  className="bg-green-500 hover:bg-green-600 text-white"
                >
                  Make Payment
                </Button>
                <Button variant="link" className="text-white p-0 h-auto">
                  Already Paid?
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-xl font-semibold">
              All Students
            </CardTitle>
            <Button
              size="sm"
              variant="default"
              className="bg-blue-600 hover:bg-blue-700"
            >
              <UserPlus className="h-4 w-4 mr-2" />
              Register New Student
            </Button>
          </CardHeader>
          <CardContent className="p-6">
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="font-semibold">Roll Number</TableHead>
                    <TableHead className="font-semibold">Name</TableHead>
                    <TableHead className="font-semibold">Class</TableHead>
                    <TableHead className="font-semibold">Program</TableHead>
                    <TableHead className="font-semibold">Status</TableHead>
                    <TableHead className="font-semibold text-right">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {students.map((student) => (
                    <TableRow key={student.id} className="hover:bg-gray-50">
                      <TableCell className="font-medium">
                        {student.rollNumber}
                      </TableCell>
                      <TableCell>{student.name}</TableCell>
                      <TableCell>{student.class}</TableCell>
                      <TableCell>{student.program}</TableCell>
                      <TableCell>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            student.status === "Active"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {student.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex justify-end space-x-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="hover:bg-gray-100"
                          >
                            <Eye className="h-4 w-4 text-gray-600" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="hover:bg-gray-100"
                          >
                            <Edit className="h-4 w-4 text-blue-600" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="hover:bg-gray-100"
                          >
                            <Trash className="h-4 w-4 text-red-600" />
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
    </SidebarLayout>
  );
};

export default StudentsPage;
