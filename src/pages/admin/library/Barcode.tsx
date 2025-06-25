import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Barcode } from "lucide-react";

const LibraryBarcode = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Manage Barcodes</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Generate Book Barcode</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Book ID</Label>
                <Input placeholder="Enter book ID" />
              </div>
              <div className="space-y-2">
                <Label>ISBN</Label>
                <Input placeholder="Enter ISBN" />
              </div>
            </div>
            <Button className="w-full">
              <Barcode className="mr-2 h-4 w-4" />
              Generate Barcode
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LibraryBarcode;
