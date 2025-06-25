import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ArrowLeftRight } from "lucide-react";

const LibraryReturn = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Return Books</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Process Book Return</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Book ID</Label>
                <Input placeholder="Enter book ID" />
              </div>
              <div className="space-y-2">
                <Label>Student ID</Label>
                <Input placeholder="Enter student ID" />
              </div>
            </div>
            <Button className="w-full">
              <ArrowLeftRight className="mr-2 h-4 w-4" />
              Process Return
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LibraryReturn;
