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

const TrialBalance = () => {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Trial Balance</h1>
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
          <CardTitle>Trial Balance Report</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Account</TableHead>
                <TableHead className="text-right">Debit</TableHead>
                <TableHead className="text-right">Credit</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* Assets */}
              <TableRow className="font-semibold bg-gray-50">
                <TableCell>Assets</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="pl-6">
                  Cash and Cash Equivalents
                </TableCell>
                <TableCell className="text-right">$250,000.00</TableCell>
                <TableCell className="text-right"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="pl-6">Accounts Receivable</TableCell>
                <TableCell className="text-right">$75,000.00</TableCell>
                <TableCell className="text-right"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="pl-6">Prepaid Expenses</TableCell>
                <TableCell className="text-right">$15,000.00</TableCell>
                <TableCell className="text-right"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="pl-6">Buildings</TableCell>
                <TableCell className="text-right">$1,500,000.00</TableCell>
                <TableCell className="text-right"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="pl-6">Equipment</TableCell>
                <TableCell className="text-right">$300,000.00</TableCell>
                <TableCell className="text-right"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="pl-6">Accumulated Depreciation</TableCell>
                <TableCell className="text-right"></TableCell>
                <TableCell className="text-right">$200,000.00</TableCell>
              </TableRow>

              {/* Liabilities */}
              <TableRow className="font-semibold bg-gray-50">
                <TableCell>Liabilities</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="pl-6">Accounts Payable</TableCell>
                <TableCell className="text-right"></TableCell>
                <TableCell className="text-right">$45,000.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="pl-6">Accrued Expenses</TableCell>
                <TableCell className="text-right"></TableCell>
                <TableCell className="text-right">$30,000.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="pl-6">Deferred Revenue</TableCell>
                <TableCell className="text-right"></TableCell>
                <TableCell className="text-right">$25,000.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="pl-6">Long-term Loans</TableCell>
                <TableCell className="text-right"></TableCell>
                <TableCell className="text-right">$800,000.00</TableCell>
              </TableRow>

              {/* Equity */}
              <TableRow className="font-semibold bg-gray-50">
                <TableCell>Equity</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="pl-6">Retained Earnings</TableCell>
                <TableCell className="text-right"></TableCell>
                <TableCell className="text-right">$940,000.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="pl-6">Current Year Earnings</TableCell>
                <TableCell className="text-right"></TableCell>
                <TableCell className="text-right">$100,000.00</TableCell>
              </TableRow>

              {/* Revenue */}
              <TableRow className="font-semibold bg-gray-50">
                <TableCell>Revenue</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="pl-6">Tuition Fees</TableCell>
                <TableCell className="text-right"></TableCell>
                <TableCell className="text-right">$1,200,000.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="pl-6">Registration Fees</TableCell>
                <TableCell className="text-right"></TableCell>
                <TableCell className="text-right">$100,000.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="pl-6">Other Income</TableCell>
                <TableCell className="text-right"></TableCell>
                <TableCell className="text-right">$50,000.00</TableCell>
              </TableRow>

              {/* Expenses */}
              <TableRow className="font-semibold bg-gray-50">
                <TableCell>Expenses</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="pl-6">Salaries and Wages</TableCell>
                <TableCell className="text-right">$600,000.00</TableCell>
                <TableCell className="text-right"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="pl-6">Utilities</TableCell>
                <TableCell className="text-right">$50,000.00</TableCell>
                <TableCell className="text-right"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="pl-6">Maintenance</TableCell>
                <TableCell className="text-right">$30,000.00</TableCell>
                <TableCell className="text-right"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="pl-6">Supplies</TableCell>
                <TableCell className="text-right">$20,000.00</TableCell>
                <TableCell className="text-right"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="pl-6">Depreciation</TableCell>
                <TableCell className="text-right">$40,000.00</TableCell>
                <TableCell className="text-right"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="pl-6">Other Expenses</TableCell>
                <TableCell className="text-right">$60,000.00</TableCell>
                <TableCell className="text-right"></TableCell>
              </TableRow>

              {/* Totals */}
              <TableRow className="font-bold text-lg border-t-2">
                <TableCell>Total</TableCell>
                <TableCell className="text-right">$2,940,000.00</TableCell>
                <TableCell className="text-right">$2,940,000.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default TrialBalance;
