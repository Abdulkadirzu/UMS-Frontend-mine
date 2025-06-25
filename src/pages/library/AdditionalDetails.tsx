import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const AdditionalDetails = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Additional Details
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage additional book information
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Add Book Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Book ID</Label>
                <Input placeholder="Enter book ID" />
              </div>
              <div className="space-y-2">
                <Label>Edition</Label>
                <Input placeholder="Enter edition" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea
                placeholder="Enter book description"
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <Label>Additional Notes</Label>
              <Textarea
                placeholder="Enter any additional notes"
                className="min-h-[100px]"
              />
            </div>

            <Button className="w-full">Save Details</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Book Details List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Book ID</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Edition</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Last Updated</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* Book details entries will be displayed here */}
              <TableRow>
                <TableCell>B001</TableCell>
                <TableCell>Introduction to Computer Science</TableCell>
                <TableCell>3rd Edition</TableCell>
                <TableCell className="max-w-[300px] truncate">
                  A comprehensive introduction to computer science concepts...
                </TableCell>
                <TableCell>2024-03-15</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdditionalDetails;
