import React from "react";
import { Card } from "@/components/ui/card";
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Download,
  FileText,
  BarChart,
  PieChart,
  LineChart,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

const Reports: React.FC = () => {
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Financial Reports</h2>
        <div className="flex space-x-4">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export All
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Total Revenue</h3>
            <Button variant="ghost" size="sm">
              <Download className="h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>This Month</span>
              <span className="text-green-600">$25,000.00</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Last Month</span>
              <span className="text-green-600">$22,500.00</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Year to Date</span>
              <span className="text-green-600">$150,000.00</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Outstanding Payments</h3>
            <Button variant="ghost" size="sm">
              <Download className="h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Current</span>
              <span className="text-yellow-600">$5,000.00</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Overdue</span>
              <span className="text-red-600">$2,500.00</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Total</span>
              <span className="text-red-600">$7,500.00</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Expenses</h3>
            <Button variant="ghost" size="sm">
              <Download className="h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>This Month</span>
              <span className="text-red-600">$15,000.00</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Last Month</span>
              <span className="text-red-600">$14,000.00</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Year to Date</span>
              <span className="text-red-600">$85,000.00</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Net Income</h3>
            <Button variant="ghost" size="sm">
              <Download className="h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>This Month</span>
              <span className="text-green-600">$10,000.00</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Last Month</span>
              <span className="text-green-600">$8,500.00</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Year to Date</span>
              <span className="text-green-600">$65,000.00</span>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Revenue by Category</h3>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm">
                <PieChart className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Category</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>% of Total</TableHead>
                <TableHead>Trend</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Tuition Fees</TableCell>
                <TableCell>$15,000.00</TableCell>
                <TableCell>60%</TableCell>
                <TableCell>
                  <TrendingUp className="h-4 w-4 text-green-600" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Library Fines</TableCell>
                <TableCell>$5,000.00</TableCell>
                <TableCell>20%</TableCell>
                <TableCell>
                  <TrendingUp className="h-4 w-4 text-green-600" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Other Fees</TableCell>
                <TableCell>$5,000.00</TableCell>
                <TableCell>20%</TableCell>
                <TableCell>
                  <TrendingDown className="h-4 w-4 text-red-600" />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Monthly Comparison</h3>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm">
                <BarChart className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Month</TableHead>
                <TableHead>Revenue</TableHead>
                <TableHead>Expenses</TableHead>
                <TableHead>Net Income</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>March 2024</TableCell>
                <TableCell>$25,000.00</TableCell>
                <TableCell>$15,000.00</TableCell>
                <TableCell className="text-green-600">$10,000.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>February 2024</TableCell>
                <TableCell>$22,500.00</TableCell>
                <TableCell>$14,000.00</TableCell>
                <TableCell className="text-green-600">$8,500.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>January 2024</TableCell>
                <TableCell>$20,000.00</TableCell>
                <TableCell>$13,000.00</TableCell>
                <TableCell className="text-green-600">$7,000.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
};

export default Reports;
