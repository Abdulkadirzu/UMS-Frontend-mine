import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Dummy data for fees structure
const feesStructure = {
  "Tuition Fees": [
    { description: "Per Credit Hour", amount: 250.0 },
    { description: "Minimum Credit Hours per Semester", amount: 12 },
    { description: "Maximum Credit Hours per Semester", amount: 18 },
  ],
  "Registration Fees": [
    { description: "New Student Registration", amount: 500.0 },
    { description: "Returning Student Registration", amount: 300.0 },
  ],
  "Other Fees": [
    { description: "Library Fee (per semester)", amount: 100.0 },
    { description: "Laboratory Fee (per semester)", amount: 150.0 },
    { description: "Student Activity Fee (per semester)", amount: 75.0 },
    { description: "Technology Fee (per semester)", amount: 125.0 },
  ],
  "Housing Fees": [
    { description: "On-Campus Housing (per semester)", amount: 2000.0 },
    { description: "Housing Application Fee", amount: 100.0 },
  ],
};

const FeesStructure = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Fees Structure</h1>
        <p className="text-sm text-gray-500">Academic Year 2023-2024</p>
      </div>

      <div className="grid gap-6">
        {Object.entries(feesStructure).map(([category, fees]) => (
          <Card key={category}>
            <CardHeader>
              <CardTitle>{category}</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Description</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {fees.map((fee, index) => (
                    <TableRow key={index}>
                      <TableCell>{fee.description}</TableCell>
                      <TableCell className="text-right">
                        ${fee.amount.toFixed(2)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-blue-50">
        <CardContent className="pt-6">
          <div className="space-y-2">
            <h3 className="font-semibold text-blue-900">Important Notes:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-blue-800">
              <li>All fees are subject to change without prior notice</li>
              <li>Payment plans are available for eligible students</li>
              <li>
                Late payment fees may apply for payments after the due date
              </li>
              <li>Refund policies vary by fee type and timing</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FeesStructure;
