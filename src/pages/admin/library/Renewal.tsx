import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RefreshCw } from "lucide-react";

const LibraryRenewal = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Book Renewal</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Process Book Renewal</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Book ID</Label>
                <Input placeholder="Enter book ID" />
              </div>
              <div className="space-y-2">
                <Label>New Return Date</Label>
                <Input type="date" />
              </div>
            </div>
            <Button className="w-full">
              <RefreshCw className="mr-2 h-4 w-4" />
              Process Renewal
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LibraryRenewal;
