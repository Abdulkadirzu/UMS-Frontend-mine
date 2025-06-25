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

const BalanceSheet = () => {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Balance Sheet</h1>
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Assets Section */}
        <Card>
          <CardHeader>
            <CardTitle>Assets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Current Assets</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Account</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Cash and Cash Equivalents</TableCell>
                      <TableCell className="text-right">$250,000.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Accounts Receivable</TableCell>
                      <TableCell className="text-right">$75,000.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Prepaid Expenses</TableCell>
                      <TableCell className="text-right">$15,000.00</TableCell>
                    </TableRow>
                    <TableRow className="font-semibold">
                      <TableCell>Total Current Assets</TableCell>
                      <TableCell className="text-right">$340,000.00</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Fixed Assets</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Account</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Buildings</TableCell>
                      <TableCell className="text-right">
                        $1,500,000.00
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Equipment</TableCell>
                      <TableCell className="text-right">$300,000.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Less: Accumulated Depreciation</TableCell>
                      <TableCell className="text-right">
                        ($200,000.00)
                      </TableCell>
                    </TableRow>
                    <TableRow className="font-semibold">
                      <TableCell>Total Fixed Assets</TableCell>
                      <TableCell className="text-right">
                        $1,600,000.00
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              <div className="pt-4 border-t">
                <Table>
                  <TableBody>
                    <TableRow className="font-bold text-lg">
                      <TableCell>Total Assets</TableCell>
                      <TableCell className="text-right">
                        $1,940,000.00
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Liabilities and Equity Section */}
        <Card>
          <CardHeader>
            <CardTitle>Liabilities & Equity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Current Liabilities</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Account</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Accounts Payable</TableCell>
                      <TableCell className="text-right">$45,000.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Accrued Expenses</TableCell>
                      <TableCell className="text-right">$30,000.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Deferred Revenue</TableCell>
                      <TableCell className="text-right">$25,000.00</TableCell>
                    </TableRow>
                    <TableRow className="font-semibold">
                      <TableCell>Total Current Liabilities</TableCell>
                      <TableCell className="text-right">$100,000.00</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Long-term Liabilities</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Account</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Long-term Loans</TableCell>
                      <TableCell className="text-right">$800,000.00</TableCell>
                    </TableRow>
                    <TableRow className="font-semibold">
                      <TableCell>Total Long-term Liabilities</TableCell>
                      <TableCell className="text-right">$800,000.00</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Equity</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Account</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Retained Earnings</TableCell>
                      <TableCell className="text-right">$940,000.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Current Year Earnings</TableCell>
                      <TableCell className="text-right">$100,000.00</TableCell>
                    </TableRow>
                    <TableRow className="font-semibold">
                      <TableCell>Total Equity</TableCell>
                      <TableCell className="text-right">
                        $1,040,000.00
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              <div className="pt-4 border-t">
                <Table>
                  <TableBody>
                    <TableRow className="font-bold text-lg">
                      <TableCell>Total Liabilities & Equity</TableCell>
                      <TableCell className="text-right">
                        $1,940,000.00
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BalanceSheet;
