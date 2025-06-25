import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Download, FileText, Search } from "lucide-react";

const PayrollPayslipPage = () => {
  // Mock data for payroll records
  const payrollRecords = [
    {
      id: 1,
      employee: "John Doe",
      department: "Engineering",
      position: "Senior Developer",
      basicSalary: 5000,
      allowances: 1000,
      deductions: 500,
      netSalary: 5500,
      month: "March 2024",
      status: "Paid",
    },
    {
      id: 2,
      employee: "Jane Smith",
      department: "Marketing",
      position: "Marketing Manager",
      basicSalary: 6000,
      allowances: 1200,
      deductions: 600,
      netSalary: 6600,
      month: "March 2024",
      status: "Paid",
    },
    // Add more mock data as needed
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Payroll & Payslip Management</h1>
        <div className="flex gap-4">
          <Button variant="outline" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Generate Payroll
          </Button>
          <Button className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Export Payroll
          </Button>
        </div>
      </div>

      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search by employee name or department..."
                className="w-full"
              />
            </div>
            <Button className="flex items-center gap-2">
              <Search className="h-4 w-4" />
              Search
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Payroll Records</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Position</TableHead>
                <TableHead>Basic Salary</TableHead>
                <TableHead>Allowances</TableHead>
                <TableHead>Deductions</TableHead>
                <TableHead>Net Salary</TableHead>
                <TableHead>Month</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payrollRecords.map((record) => (
                <TableRow key={record.id}>
                  <TableCell className="font-medium">
                    {record.employee}
                  </TableCell>
                  <TableCell>{record.department}</TableCell>
                  <TableCell>{record.position}</TableCell>
                  <TableCell>${record.basicSalary}</TableCell>
                  <TableCell>${record.allowances}</TableCell>
                  <TableCell>${record.deductions}</TableCell>
                  <TableCell className="font-medium">
                    ${record.netSalary}
                  </TableCell>
                  <TableCell>{record.month}</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {record.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2"
                    >
                      <FileText className="h-4 w-4" />
                      View Payslip
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default PayrollPayslipPage;
