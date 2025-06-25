import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useNavigate } from "react-router-dom";

const Payments = () => {
  const navigate = useNavigate();

  const paymentTypes = [
    {
      title: "Cash Deposit",
      description: "Record cash deposits and payments",
      path: "/finance/payments/cash-deposit",
      recentCount: 5,
    },
    {
      title: "Refund",
      description: "Process refunds and returns",
      path: "/finance/payments/refund",
      recentCount: 2,
    },
    {
      title: "Bank Transfer",
      description: "Manage bank transfers and wire payments",
      path: "/finance/payments/bank-transfer",
      recentCount: 8,
    },
  ];

  const recentTransactions = [
    {
      id: "TRX-001",
      date: "2024-03-15",
      type: "Cash Deposit",
      amount: "$5,000.00",
      status: "Completed",
      reference: "REC-001",
    },
    {
      id: "TRX-002",
      date: "2024-03-14",
      type: "Bank Transfer",
      amount: "$2,500.00",
      status: "Pending",
      reference: "BT-001",
    },
    {
      id: "TRX-003",
      date: "2024-03-13",
      type: "Refund",
      amount: "$1,000.00",
      status: "Completed",
      reference: "REF-001",
    },
  ];

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {paymentTypes.map((type) => (
          <Card key={type.title} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">{type.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{type.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  {type.recentCount} recent transactions
                </span>
                <Button onClick={() => navigate(type.path)} variant="outline">
                  Manage
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Reference</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentTransactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell>{transaction.id}</TableCell>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>{transaction.type}</TableCell>
                  <TableCell>{transaction.amount}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        transaction.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {transaction.status}
                    </span>
                  </TableCell>
                  <TableCell>{transaction.reference}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
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

export default Payments;
