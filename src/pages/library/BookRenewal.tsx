import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RefreshCw } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const BookRenewal = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Book Renewal</h1>
          <p className="text-sm text-gray-500 mt-1">
            Renew book loans and manage extensions
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Renew Book</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Book ID</Label>
                <Input placeholder="Enter book ID" />
              </div>
              <div className="space-y-2">
                <Label>New Return Date</Label>
                <Input type="date" />
              </div>
            </div>

            <div className="p-4 border rounded-lg bg-gray-50">
              <h3 className="font-medium mb-2">Current Loan Details</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Student ID</p>
                  <p className="font-medium">S123</p>
                </div>
                <div>
                  <p className="text-gray-500">Current Due Date</p>
                  <p className="font-medium">2024-04-15</p>
                </div>
                <div>
                  <p className="text-gray-500">Renewal Count</p>
                  <p className="font-medium">2/3</p>
                </div>
                <div>
                  <p className="text-gray-500">Fine Amount</p>
                  <p className="font-medium">$0.00</p>
                </div>
              </div>
            </div>

            <Button className="w-full">
              <RefreshCw className="mr-2 h-4 w-4" />
              Renew Book
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Renewal History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Book ID</TableHead>
                <TableHead>Student ID</TableHead>
                <TableHead>Previous Due Date</TableHead>
                <TableHead>New Due Date</TableHead>
                <TableHead>Renewal Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* Renewal history entries will be displayed here */}
              <TableRow>
                <TableCell>B001</TableCell>
                <TableCell>S123</TableCell>
                <TableCell>2024-04-15</TableCell>
                <TableCell>2024-05-15</TableCell>
                <TableCell>2024-04-10</TableCell>
                <TableCell>
                  <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                    Active
                  </span>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookRenewal;
