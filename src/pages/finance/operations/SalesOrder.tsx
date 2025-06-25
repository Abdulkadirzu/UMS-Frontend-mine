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

const SalesOrder = () => {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Create Sales Order</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="customer">Customer</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select customer" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="customer1">ABC Company</SelectItem>
                    <SelectItem value="customer2">XYZ Corporation</SelectItem>
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
                <Input type="text" id="orderNumber" placeholder="SO-001" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="paymentTerms">Payment Terms</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select payment terms" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediate">Immediate</SelectItem>
                    <SelectItem value="net15">Net 15</SelectItem>
                    <SelectItem value="net30">Net 30</SelectItem>
                    <SelectItem value="net60">Net 60</SelectItem>
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
                    <SelectItem value="confirmed">Confirmed</SelectItem>
                    <SelectItem value="shipped">Shipped</SelectItem>
                    <SelectItem value="delivered">Delivered</SelectItem>
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
              <Label htmlFor="shipping">Shipping Information</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="shippingAddress">Shipping Address</Label>
                  <Textarea
                    id="shippingAddress"
                    placeholder="Enter shipping address"
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="shippingMethod">Shipping Method</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select shipping method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">
                        Standard Shipping
                      </SelectItem>
                      <SelectItem value="express">Express Shipping</SelectItem>
                      <SelectItem value="overnight">
                        Overnight Shipping
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
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
              <Button>Create Sales Order</Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Sales Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order No.</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Payment Terms</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>SO-001</TableCell>
                <TableCell>2024-03-15</TableCell>
                <TableCell>ABC Company</TableCell>
                <TableCell>$3,500.00</TableCell>
                <TableCell>Confirmed</TableCell>
                <TableCell>Net 30</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>SO-002</TableCell>
                <TableCell>2024-03-14</TableCell>
                <TableCell>XYZ Corporation</TableCell>
                <TableCell>$2,800.00</TableCell>
                <TableCell>Pending</TableCell>
                <TableCell>Immediate</TableCell>
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

export default SalesOrder;
