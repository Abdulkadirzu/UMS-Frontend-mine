import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Printer } from "lucide-react";

// Dummy data for receipts grouped by year
const receiptsData = {
  "2024": [
    {
      id: 1,
      date: "2024-03-15",
      description: "Tuition Fee - Semester 1",
      amount: 2500.0,
      receiptNo: "REC-2024-001",
    },
    {
      id: 2,
      date: "2024-02-01",
      description: "Registration Fee",
      amount: 500.0,
      receiptNo: "REC-2024-002",
    },
  ],
  "2023": [
    {
      id: 3,
      date: "2023-09-15",
      description: "Tuition Fee - Semester 2",
      amount: 2500.0,
      receiptNo: "REC-2023-003",
    },
    {
      id: 4,
      date: "2023-03-15",
      description: "Tuition Fee - Semester 1",
      amount: 2500.0,
      receiptNo: "REC-2023-004",
    },
  ],
};

const Receipts = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Receipts</h1>

      <div className="space-y-6">
        {Object.entries(receiptsData).map(([year, receipts]) => (
          <Card key={year}>
            <CardHeader>
              <CardTitle>Year {year}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {receipts.map((receipt) => (
                  <div
                    key={receipt.id}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div>
                      <p className="font-medium">{receipt.description}</p>
                      <p className="text-sm text-gray-500">
                        Receipt No: {receipt.receiptNo}
                      </p>
                      <p className="text-sm text-gray-500">
                        Date: {receipt.date}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="font-bold">${receipt.amount.toFixed(2)}</p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon">
                          <Printer className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Receipts;
