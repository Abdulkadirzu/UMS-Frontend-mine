import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Barcode } from "lucide-react";

const ManageBarcode = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Manage Barcode</h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage book barcodes and generate new ones
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Generate Barcode</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Book ID</Label>
                <Input placeholder="Enter book ID" />
              </div>
              <div className="space-y-2">
                <Label>Barcode</Label>
                <Input placeholder="Enter or scan barcode" />
              </div>
            </div>

            <div className="flex justify-center p-8 border rounded-lg">
              <div className="text-center">
                <Barcode className="h-32 w-32 mx-auto mb-4 text-gray-400" />
                <p className="text-sm text-gray-500">Barcode Preview</p>
              </div>
            </div>

            <Button className="w-full">Generate Barcode</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Barcode List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="relative">
              <Input placeholder="Search barcodes..." className="pl-10" />
            </div>

            <div className="border rounded-lg divide-y">
              {/* Barcode list items will be displayed here */}
              <div className="p-4 flex items-center justify-between">
                <div>
                  <p className="font-medium">Book ID: B001</p>
                  <p className="text-sm text-gray-500">Barcode: 123456789</p>
                </div>
                <Button variant="outline" size="sm">
                  Print
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ManageBarcode;
