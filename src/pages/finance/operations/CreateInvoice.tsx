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

const CreateInvoice = () => {
  return (
    <div className="container mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Create Student Invoice</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="student">Student</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select student" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student1">John Doe</SelectItem>
                    <SelectItem value="student2">Jane Smith</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="invoiceDate">Invoice Date</Label>
                <Input type="date" id="invoiceDate" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dueDate">Due Date</Label>
                <Input type="date" id="dueDate" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="invoiceNumber">Invoice Number</Label>
                <Input type="text" id="invoiceNumber" placeholder="INV-001" />
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
              <Button>Create Invoice</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateInvoice;
