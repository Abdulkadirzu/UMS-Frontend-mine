import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

const StudentBalanceReport = () => {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Student Balance Report</h1>
        <Button>Export PDF</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Search Student</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="studentId">Student ID</Label>
              <Input id="studentId" placeholder="Enter student ID" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="studentName">Student Name</Label>
              <Input id="studentName" placeholder="Enter student name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="semester">Semester</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select semester" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fall2024">Fall 2024</SelectItem>
                  <SelectItem value="spring2024">Spring 2024</SelectItem>
                  <SelectItem value="summer2024">Summer 2024</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Student Balance Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-semibold mb-2">Student Information</h3>
              <div className="space-y-2">
                <p>
                  <span className="text-gray-500">Name:</span> John Smith
                </p>
                <p>
                  <span className="text-gray-500">ID:</span> STU001
                </p>
                <p>
                  <span className="text-gray-500">Program:</span> Bachelor of
                  Science
                </p>
                <p>
                  <span className="text-gray-500">Current Semester:</span> Fall
                  2024
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Balance Summary</h3>
              <div className="space-y-2">
                <p>
                  <span className="text-gray-500">Total Charges:</span>{" "}
                  $15,000.00
                </p>
                <p>
                  <span className="text-gray-500">Total Payments:</span>{" "}
                  $10,000.00
                </p>
                <p>
                  <span className="text-gray-500">Current Balance:</span>{" "}
                  $5,000.00
                </p>
                <p>
                  <span className="text-gray-500">Due Date:</span> 2024-12-31
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-4">Charges</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Reference</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>2024-09-01</TableCell>
                    <TableCell>Tuition Fee - Fall 2024</TableCell>
                    <TableCell>INV-001</TableCell>
                    <TableCell className="text-right">$10,000.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2024-09-01</TableCell>
                    <TableCell>Registration Fee</TableCell>
                    <TableCell>INV-002</TableCell>
                    <TableCell className="text-right">$500.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2024-09-15</TableCell>
                    <TableCell>Lab Fee</TableCell>
                    <TableCell>INV-003</TableCell>
                    <TableCell className="text-right">$1,000.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2024-09-15</TableCell>
                    <TableCell>Library Fee</TableCell>
                    <TableCell>INV-004</TableCell>
                    <TableCell className="text-right">$500.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2024-09-15</TableCell>
                    <TableCell>Student Activity Fee</TableCell>
                    <TableCell>INV-005</TableCell>
                    <TableCell className="text-right">$3,000.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Payments</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Reference</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>2024-09-05</TableCell>
                    <TableCell>Tuition Payment</TableCell>
                    <TableCell>PAY-001</TableCell>
                    <TableCell>Bank Transfer</TableCell>
                    <TableCell className="text-right">$5,000.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2024-09-20</TableCell>
                    <TableCell>Registration Payment</TableCell>
                    <TableCell>PAY-002</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell className="text-right">$500.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2024-10-01</TableCell>
                    <TableCell>Lab Fee Payment</TableCell>
                    <TableCell>PAY-003</TableCell>
                    <TableCell>Bank Transfer</TableCell>
                    <TableCell className="text-right">$1,000.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2024-10-15</TableCell>
                    <TableCell>Library Fee Payment</TableCell>
                    <TableCell>PAY-004</TableCell>
                    <TableCell>Cash</TableCell>
                    <TableCell className="text-right">$500.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2024-10-30</TableCell>
                    <TableCell>Activity Fee Payment</TableCell>
                    <TableCell>PAY-005</TableCell>
                    <TableCell>Bank Transfer</TableCell>
                    <TableCell className="text-right">$3,000.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Payment Plan</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>2024-09-30</TableCell>
                    <TableCell>First Installment</TableCell>
                    <TableCell className="text-right">$5,000.00</TableCell>
                    <TableCell>
                      <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                        Paid
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2024-10-31</TableCell>
                    <TableCell>Second Installment</TableCell>
                    <TableCell className="text-right">$5,000.00</TableCell>
                    <TableCell>
                      <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                        Paid
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2024-11-30</TableCell>
                    <TableCell>Third Installment</TableCell>
                    <TableCell className="text-right">$5,000.00</TableCell>
                    <TableCell>
                      <span className="px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800">
                        Pending
                      </span>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentBalanceReport;
