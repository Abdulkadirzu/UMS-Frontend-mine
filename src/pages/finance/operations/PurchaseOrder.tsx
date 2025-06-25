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

const PurchaseOrder = () => {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Create Purchase Order</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="vendor">Vendor</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select vendor" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="vendor1">ABC Supplies</SelectItem>
                    <SelectItem value="vendor2">XYZ Services</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="orderDate">Order Date</Label>
                <Input type="date" id="orderDate" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="expectedDate">Expected Delivery Date</Label>
                <Input type="date" id="expectedDate" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="orderNumber">Order Number</Label>
                <Input type="text" id="orderNumber" placeholder="PO-001" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="department">Department</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="it">IT Department</SelectItem>
                    <SelectItem value="admin">Administration</SelectItem>
                    <SelectItem value="facilities">Facilities</SelectItem>
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
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="approved">Approved</SelectItem>
                    <SelectItem value="received">Received</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="items">Items</Label>
              <div className="border rounded-lg p-4 space-y-4">
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-4">
                    <Input placeholder="Item description" />
                  </div>
                  <div className="col-span-2">
                    <Input type="number" placeholder="Quantity" />
                  </div>
                  <div className="col-span-2">
                    <Input type="number" placeholder="Unit price" />
                  </div>
                  <div className="col-span-2">
                    <Input type="number" placeholder="Amount" disabled />
                  </div>
                  <div className="col-span-2">
                    <Button variant="destructive">Remove</Button>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Add Item
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Notes</Label>
              <Textarea
                id="notes"
                placeholder="Enter any additional notes or terms"
                rows={3}
              />
            </div>

            <div className="flex justify-end space-x-4">
              <Button variant="outline">Cancel</Button>
              <Button>Create Purchase Order</Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Purchase Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order No.</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Vendor</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>PO-001</TableCell>
                <TableCell>2024-03-15</TableCell>
                <TableCell>ABC Supplies</TableCell>
                <TableCell>IT Department</TableCell>
                <TableCell>$1,500.00</TableCell>
                <TableCell>Approved</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>PO-002</TableCell>
                <TableCell>2024-03-14</TableCell>
                <TableCell>XYZ Services</TableCell>
                <TableCell>Facilities</TableCell>
                <TableCell>$2,000.00</TableCell>
                <TableCell>Pending</TableCell>
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

export default PurchaseOrder;
