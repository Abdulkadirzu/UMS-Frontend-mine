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

const SalaryPayableReport = () => {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Salary Payable Report</h1>
        <div className="flex gap-4">
          <Button>Export PDF</Button>
          <Button>Export Excel</Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Report Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <Label htmlFor="reportType">Report Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="monthly">Monthly Report</SelectItem>
                  <SelectItem value="quarterly">Quarterly Report</SelectItem>
                  <SelectItem value="yearly">Yearly Report</SelectItem>
                  <SelectItem value="custom">Custom Period</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="department">Department</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  <SelectItem value="academic">Academic</SelectItem>
                  <SelectItem value="admin">Administration</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="it">IT</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="dateRange">Date Range</Label>
              <div className="grid grid-cols-2 gap-2">
                <Input type="date" id="startDate" />
                <Input type="date" id="endDate" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="search">Search</Label>
              <Input id="search" placeholder="Search by name or ID" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Report Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-sm text-gray-500">Total Employees</p>
                  <p className="text-2xl font-bold">250</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-sm text-gray-500">Total Salary</p>
                  <p className="text-2xl font-bold">$750,000</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-sm text-gray-500">Total Deductions</p>
                  <p className="text-2xl font-bold">$75,000</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-sm text-gray-500">Net Payable</p>
                  <p className="text-2xl font-bold">$675,000</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Department-wise Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Department</TableHead>
                <TableHead>Employees</TableHead>
                <TableHead className="text-right">Total Salary</TableHead>
                <TableHead className="text-right">Total Deductions</TableHead>
                <TableHead className="text-right">Net Payable</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Academic</TableCell>
                <TableCell>100</TableCell>
                <TableCell className="text-right">$300,000.00</TableCell>
                <TableCell className="text-right">$30,000.00</TableCell>
                <TableCell className="text-right">$270,000.00</TableCell>
                <TableCell>
                  <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                    Completed
                  </span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Administration</TableCell>
                <TableCell>50</TableCell>
                <TableCell className="text-right">$200,000.00</TableCell>
                <TableCell className="text-right">$20,000.00</TableCell>
                <TableCell className="text-right">$180,000.00</TableCell>
                <TableCell>
                  <span className="px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800">
                    Pending
                  </span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>IT</TableCell>
                <TableCell>75</TableCell>
                <TableCell className="text-right">$150,000.00</TableCell>
                <TableCell className="text-right">$15,000.00</TableCell>
                <TableCell className="text-right">$135,000.00</TableCell>
                <TableCell>
                  <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                    Completed
                  </span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Finance</TableCell>
                <TableCell>25</TableCell>
                <TableCell className="text-right">$100,000.00</TableCell>
                <TableCell className="text-right">$10,000.00</TableCell>
                <TableCell className="text-right">$90,000.00</TableCell>
                <TableCell>
                  <span className="px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800">
                    Pending
                  </span>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Payment History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Payment Date</TableHead>
                <TableHead>Batch No.</TableHead>
                <TableHead>Department</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead>Payment Method</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>2024-03-15</TableCell>
                <TableCell>BATCH-001</TableCell>
                <TableCell>Academic</TableCell>
                <TableCell className="text-right">$270,000.00</TableCell>
                <TableCell>Bank Transfer</TableCell>
                <TableCell>
                  <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                    Completed
                  </span>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2024-03-15</TableCell>
                <TableCell>BATCH-002</TableCell>
                <TableCell>IT</TableCell>
                <TableCell className="text-right">$135,000.00</TableCell>
                <TableCell>Bank Transfer</TableCell>
                <TableCell>
                  <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                    Completed
                  </span>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2024-03-16</TableCell>
                <TableCell>BATCH-003</TableCell>
                <TableCell>Administration</TableCell>
                <TableCell className="text-right">$180,000.00</TableCell>
                <TableCell>Bank Transfer</TableCell>
                <TableCell>
                  <span className="px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800">
                    Processing
                  </span>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default SalaryPayableReport;
