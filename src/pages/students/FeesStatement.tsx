import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Dummy data for fees statement
const feesData = [
  {
    id: 1,
    date: "2024-03-15",
    description: "Tuition Fee - Semester 1",
    amount: 2500.0,
    status: "Paid",
    receiptNo: "REC-2024-001",
  },
  {
    id: 2,
    date: "2024-02-01",
    description: "Registration Fee",
    amount: 500.0,
    status: "Paid",
    receiptNo: "REC-2024-002",
  },
  {
    id: 3,
    date: "2023-09-15",
    description: "Tuition Fee - Semester 2",
    amount: 2500.0,
    status: "Paid",
    receiptNo: "REC-2023-003",
  },
  {
    id: 4,
    date: "2023-03-15",
    description: "Tuition Fee - Semester 1",
    amount: 2500.0,
    status: "Paid",
    receiptNo: "REC-2023-004",
  },
];

const FeesStatement = () => {
  const totalPaid = feesData.reduce((sum, fee) => sum + fee.amount, 0);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Fees Statement</h1>
        <div className="text-right">
          <p className="text-sm text-gray-500">Total Amount Paid</p>
          <p className="text-2xl font-bold text-green-600">
            ${totalPaid.toFixed(2)}
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Payment History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Receipt No.</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {feesData.map((fee) => (
                <TableRow key={fee.id}>
                  <TableCell>{fee.date}</TableCell>
                  <TableCell>{fee.description}</TableCell>
                  <TableCell>{fee.receiptNo}</TableCell>
                  <TableCell className="text-right">
                    ${fee.amount.toFixed(2)}
                  </TableCell>
                  <TableCell>
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {fee.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default FeesStatement;
