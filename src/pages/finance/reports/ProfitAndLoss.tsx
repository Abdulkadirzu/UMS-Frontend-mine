import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ProfitAndLoss = () => {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Profit and Loss Statement</h1>
        <div className="flex gap-4">
          <Select defaultValue="2024">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
            </SelectContent>
          </Select>
          <Button>Export PDF</Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Income Statement</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Revenue Section */}
            <div>
              <h3 className="font-semibold mb-2">Revenue</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Account</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Tuition Fees</TableCell>
                    <TableCell className="text-right">$1,200,000.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Registration Fees</TableCell>
                    <TableCell className="text-right">$100,000.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Other Income</TableCell>
                    <TableCell className="text-right">$50,000.00</TableCell>
                  </TableRow>
                  <TableRow className="font-semibold">
                    <TableCell>Total Revenue</TableCell>
                    <TableCell className="text-right">$1,350,000.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            {/* Expenses Section */}
            <div>
              <h3 className="font-semibold mb-2">Expenses</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Account</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Salaries and Wages</TableCell>
                    <TableCell className="text-right">$600,000.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Utilities</TableCell>
                    <TableCell className="text-right">$50,000.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Maintenance</TableCell>
                    <TableCell className="text-right">$30,000.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Supplies</TableCell>
                    <TableCell className="text-right">$20,000.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Depreciation</TableCell>
                    <TableCell className="text-right">$40,000.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Other Expenses</TableCell>
                    <TableCell className="text-right">$60,000.00</TableCell>
                  </TableRow>
                  <TableRow className="font-semibold">
                    <TableCell>Total Expenses</TableCell>
                    <TableCell className="text-right">$800,000.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            {/* Net Income Section */}
            <div className="pt-4 border-t">
              <Table>
                <TableBody>
                  <TableRow className="font-bold text-lg">
                    <TableCell>Net Income</TableCell>
                    <TableCell className="text-right">$550,000.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfitAndLoss;
