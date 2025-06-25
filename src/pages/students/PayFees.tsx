import React, { useState } from "react";
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
import { CreditCard, Building2, Wallet } from "lucide-react";

// Dummy data for outstanding fees
const outstandingFees = [
  {
    id: 1,
    description: "Tuition Fee - Semester 1",
    amount: 2500.0,
    dueDate: "2024-04-15",
  },
  {
    id: 2,
    description: "Technology Fee",
    amount: 125.0,
    dueDate: "2024-04-15",
  },
];

const PayFees = () => {
  const [selectedFee, setSelectedFee] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const totalOutstanding = outstandingFees.reduce(
    (sum, fee) => sum + fee.amount,
    0
  );

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Pay Your Fees</h1>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Outstanding Fees Card */}
        <Card>
          <CardHeader>
            <CardTitle>Outstanding Fees</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {outstandingFees.map((fee) => (
                <div
                  key={fee.id}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div>
                    <p className="font-medium">{fee.description}</p>
                    <p className="text-sm text-gray-500">
                      Due Date: {fee.dueDate}
                    </p>
                  </div>
                  <p className="font-bold">${fee.amount.toFixed(2)}</p>
                </div>
              ))}
              <div className="flex justify-between items-center pt-4 border-t">
                <p className="font-semibold">Total Outstanding</p>
                <p className="text-xl font-bold text-red-600">
                  ${totalOutstanding.toFixed(2)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Payment Form Card */}
        <Card>
          <CardHeader>
            <CardTitle>Make Payment</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fee">Select Fee to Pay</Label>
                <Select value={selectedFee} onValueChange={setSelectedFee}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a fee" />
                  </SelectTrigger>
                  <SelectContent>
                    {outstandingFees.map((fee) => (
                      <SelectItem key={fee.id} value={fee.id.toString()}>
                        {fee.description} - ${fee.amount.toFixed(2)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="amount">Amount to Pay</Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="Enter amount"
                  min="0"
                  step="0.01"
                />
              </div>

              <div className="space-y-2">
                <Label>Payment Method</Label>
                <div className="grid grid-cols-3 gap-4">
                  <Button
                    type="button"
                    variant={paymentMethod === "card" ? "default" : "outline"}
                    className="flex flex-col items-center gap-2 h-auto py-4"
                    onClick={() => setPaymentMethod("card")}
                  >
                    <CreditCard className="h-6 w-6" />
                    <span className="text-sm">Credit Card</span>
                  </Button>
                  <Button
                    type="button"
                    variant={paymentMethod === "bank" ? "default" : "outline"}
                    className="flex flex-col items-center gap-2 h-auto py-4"
                    onClick={() => setPaymentMethod("bank")}
                  >
                    <Building2 className="h-6 w-6" />
                    <span className="text-sm">Bank Transfer</span>
                  </Button>
                  <Button
                    type="button"
                    variant={paymentMethod === "mobile" ? "default" : "outline"}
                    className="flex flex-col items-center gap-2 h-auto py-4"
                    onClick={() => setPaymentMethod("mobile")}
                  >
                    <Wallet className="h-6 w-6" />
                    <span className="text-sm">Mobile Money</span>
                  </Button>
                </div>
              </div>

              <Button className="w-full" type="submit">
                Proceed to Payment
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PayFees;
