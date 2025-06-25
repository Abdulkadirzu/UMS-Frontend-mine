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

const UnknownStudentsPayment = () => {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Unknown Students Payment</h1>
        <Button>Export Report</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Record New Payment</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="paymentDate">Payment Date</Label>
                <Input type="date" id="paymentDate" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="receiptNumber">Receipt Number</Label>
                <Input type="text" id="receiptNumber" placeholder="REC-001" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="amount">Amount</Label>
                <Input type="number" id="amount" placeholder="0.00" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="paymentMethod">Payment Method</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select payment method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cash">Cash</SelectItem>
                    <SelectItem value="bank">Bank Transfer</SelectItem>
                    <SelectItem value="check">Check</SelectItem>
                    <SelectItem value="card">Credit/Debit Card</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="payerName">Payer Name</Label>
                <Input
                  type="text"
                  id="payerName"
                  placeholder="Enter payer name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="payerContact">Payer Contact</Label>
                <Input
                  type="text"
                  id="payerContact"
                  placeholder="Enter contact number"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="paymentType">Payment Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select payment type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tuition">Tuition Fee</SelectItem>
                    <SelectItem value="registration">
                      Registration Fee
                    </SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="verified">Verified</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Notes</Label>
              <Input
                type="text"
                id="notes"
                placeholder="Enter any additional notes or information"
              />
            </div>

            <div className="flex justify-end space-x-4">
              <Button variant="outline">Cancel</Button>
              <Button>Record Payment</Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Unknown Payments</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Receipt No.</TableHead>
                <TableHead>Payer Name</TableHead>
                <TableHead>Payment Type</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>2024-03-15</TableCell>
                <TableCell>REC-001</TableCell>
                <TableCell>John Smith</TableCell>
                <TableCell>Tuition Fee</TableCell>
                <TableCell className="text-right">$5,000.00</TableCell>
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
              <TableRow>
                <TableCell>2024-03-14</TableCell>
                <TableCell>REC-002</TableCell>
                <TableCell>Sarah Johnson</TableCell>
                <TableCell>Registration Fee</TableCell>
                <TableCell className="text-right">$500.00</TableCell>
                <TableCell>Cash</TableCell>
                <TableCell>
                  <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                    Verified
                  </span>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2024-03-13</TableCell>
                <TableCell>REC-003</TableCell>
                <TableCell>Michael Brown</TableCell>
                <TableCell>Other</TableCell>
                <TableCell className="text-right">$1,000.00</TableCell>
                <TableCell>Check</TableCell>
                <TableCell>
                  <span className="px-2 py-1 rounded-full text-xs bg-red-100 text-red-800">
                    Rejected
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
    </div>
  );
};

export default UnknownStudentsPayment;
