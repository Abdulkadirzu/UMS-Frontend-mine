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

const VendorReportDetail = () => {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Vendor Report Detail</h1>
        <div className="flex gap-4">
          <Button>Export PDF</Button>
          <Button>Export Excel</Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Vendor Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Vendor Name</Label>
              <p className="text-lg font-medium">ABC Supplies Ltd.</p>
            </div>
            <div className="space-y-2">
              <Label>Vendor ID</Label>
              <p className="text-lg font-medium">VEN-001</p>
            </div>
            <div className="space-y-2">
              <Label>Contact Person</Label>
              <p className="text-lg font-medium">John Smith</p>
            </div>
            <div className="space-y-2">
              <Label>Contact Number</Label>
              <p className="text-lg font-medium">+1 234 567 8900</p>
            </div>
            <div className="space-y-2">
              <Label>Email</Label>
              <p className="text-lg font-medium">john.smith@abcsupplies.com</p>
            </div>
            <div className="space-y-2">
              <Label>Address</Label>
              <p className="text-lg font-medium">
                123 Business Street, City, Country
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Payment Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-sm text-gray-500">Total Invoiced</p>
                  <p className="text-2xl font-bold">$150,000.00</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-sm text-gray-500">Total Paid</p>
                  <p className="text-2xl font-bold">$120,000.00</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-sm text-gray-500">Outstanding</p>
                  <p className="text-2xl font-bold">$30,000.00</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-sm text-gray-500">Last Payment</p>
                  <p className="text-2xl font-bold">$15,000.00</p>
                </div>
              </CardContent>
            </Card>
          </div>
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
                <TableHead>Date</TableHead>
                <TableHead>Invoice No.</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead>Payment Method</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>2024-03-15</TableCell>
                <TableCell>INV-001</TableCell>
                <TableCell>Office Supplies</TableCell>
                <TableCell className="text-right">$15,000.00</TableCell>
                <TableCell>Bank Transfer</TableCell>
                <TableCell>
                  <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                    Paid
                  </span>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2024-03-01</TableCell>
                <TableCell>INV-002</TableCell>
                <TableCell>IT Equipment</TableCell>
                <TableCell className="text-right">$25,000.00</TableCell>
                <TableCell>Check</TableCell>
                <TableCell>
                  <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                    Paid
                  </span>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2024-02-15</TableCell>
                <TableCell>INV-003</TableCell>
                <TableCell>Maintenance Services</TableCell>
                <TableCell className="text-right">$30,000.00</TableCell>
                <TableCell>Bank Transfer</TableCell>
                <TableCell>
                  <span className="px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800">
                    Pending
                  </span>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Payment Schedule</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Due Date</TableHead>
                <TableHead>Invoice No.</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>2024-04-15</TableCell>
                <TableCell>INV-004</TableCell>
                <TableCell>Q2 Supplies</TableCell>
                <TableCell className="text-right">$20,000.00</TableCell>
                <TableCell>
                  <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                    Upcoming
                  </span>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    Schedule
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2024-05-15</TableCell>
                <TableCell>INV-005</TableCell>
                <TableCell>Q2 Services</TableCell>
                <TableCell className="text-right">$25,000.00</TableCell>
                <TableCell>
                  <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                    Upcoming
                  </span>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    Schedule
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

export default VendorReportDetail;
