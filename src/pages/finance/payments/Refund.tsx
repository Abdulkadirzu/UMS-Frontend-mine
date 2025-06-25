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
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Refund = () => {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Process Refund</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="refundDate">Refund Date</Label>
                <Input type="date" id="refundDate" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="refundNumber">Refund Number</Label>
                <Input type="text" id="refundNumber" placeholder="REF-001" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="originalPayment">Original Payment</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select original payment" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="payment1">
                      INV-001 - Tuition Fee
                    </SelectItem>
                    <SelectItem value="payment2">
                      INV-002 - Registration Fee
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="refundType">Refund Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select refund type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full">Full Refund</SelectItem>
                    <SelectItem value="partial">Partial Refund</SelectItem>
                    <SelectItem value="cancellation">Cancellation</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="amount">Refund Amount</Label>
                <Input type="number" id="amount" placeholder="0.00" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="refundMethod">Refund Method</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select refund method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cash">Cash</SelectItem>
                    <SelectItem value="bank">Bank Transfer</SelectItem>
                    <SelectItem value="check">Check</SelectItem>
                    <SelectItem value="credit">Credit to Account</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="recipient">Recipient</Label>
                <Input
                  type="text"
                  id="recipient"
                  placeholder="Enter recipient name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="approved">Approved</SelectItem>
                    <SelectItem value="processed">Processed</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="reason">Reason for Refund</Label>
              <Textarea
                id="reason"
                placeholder="Enter reason for refund"
                rows={3}
              />
            </div>

            <div className="flex justify-end space-x-4">
              <Button variant="outline">Cancel</Button>
              <Button>Process Refund</Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Refunds</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Refund No.</TableHead>
                <TableHead>Original Payment</TableHead>
                <TableHead>Recipient</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>2024-03-15</TableCell>
                <TableCell>REF-001</TableCell>
                <TableCell>INV-001</TableCell>
                <TableCell>John Doe</TableCell>
                <TableCell>$1,000.00</TableCell>
                <TableCell>Bank Transfer</TableCell>
                <TableCell>
                  <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                    Completed
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
                <TableCell>REF-002</TableCell>
                <TableCell>INV-002</TableCell>
                <TableCell>Jane Smith</TableCell>
                <TableCell>$500.00</TableCell>
                <TableCell>Credit to Account</TableCell>
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
    </div>
  );
};

export default Refund;
