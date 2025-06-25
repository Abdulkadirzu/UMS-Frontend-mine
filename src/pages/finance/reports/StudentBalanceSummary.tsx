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

const StudentBalanceSummary = () => {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Student Balance Summary</h1>
        <div className="flex gap-4">
          <Button>Export PDF</Button>
          <Button>Export Excel</Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <Label htmlFor="program">Program</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select program" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Programs</SelectItem>
                  <SelectItem value="cs">Computer Science</SelectItem>
                  <SelectItem value="business">
                    Business Administration
                  </SelectItem>
                  <SelectItem value="engineering">Engineering</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="semester">Semester</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select semester" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Semesters</SelectItem>
                  <SelectItem value="fall2024">Fall 2024</SelectItem>
                  <SelectItem value="spring2024">Spring 2024</SelectItem>
                  <SelectItem value="summer2024">Summer 2024</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="balanceStatus">Balance Status</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="paid">Paid</SelectItem>
                  <SelectItem value="partial">Partial</SelectItem>
                  <SelectItem value="unpaid">Unpaid</SelectItem>
                </SelectContent>
              </Select>
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
          <CardTitle>Balance Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Summary Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Total Students</p>
                    <p className="text-2xl font-bold">1,250</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Total Outstanding</p>
                    <p className="text-2xl font-bold">$2,500,000</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Paid Students</p>
                    <p className="text-2xl font-bold">850</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Unpaid Students</p>
                    <p className="text-2xl font-bold">400</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Student Balance Table */}
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Program</TableHead>
                  <TableHead>Semester</TableHead>
                  <TableHead className="text-right">Total Charges</TableHead>
                  <TableHead className="text-right">Total Payments</TableHead>
                  <TableHead className="text-right">Balance</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>STU001</TableCell>
                  <TableCell>John Doe</TableCell>
                  <TableCell>Computer Science</TableCell>
                  <TableCell>Fall 2024</TableCell>
                  <TableCell className="text-right">$15,000.00</TableCell>
                  <TableCell className="text-right">$15,000.00</TableCell>
                  <TableCell className="text-right">$0.00</TableCell>
                  <TableCell>
                    <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                      Paid
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>STU002</TableCell>
                  <TableCell>Jane Smith</TableCell>
                  <TableCell>Business Admin</TableCell>
                  <TableCell>Fall 2024</TableCell>
                  <TableCell className="text-right">$15,000.00</TableCell>
                  <TableCell className="text-right">$10,000.00</TableCell>
                  <TableCell className="text-right">$5,000.00</TableCell>
                  <TableCell>
                    <span className="px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800">
                      Partial
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>STU003</TableCell>
                  <TableCell>Mike Johnson</TableCell>
                  <TableCell>Engineering</TableCell>
                  <TableCell>Fall 2024</TableCell>
                  <TableCell className="text-right">$15,000.00</TableCell>
                  <TableCell className="text-right">$0.00</TableCell>
                  <TableCell className="text-right">$15,000.00</TableCell>
                  <TableCell>
                    <span className="px-2 py-1 rounded-full text-xs bg-red-100 text-red-800">
                      Unpaid
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
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentBalanceSummary;
