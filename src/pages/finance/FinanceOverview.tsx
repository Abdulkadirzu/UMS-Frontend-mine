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
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  CreditCard,
  FileText,
  Users,
} from "lucide-react";

const FinanceOverview: React.FC = () => {
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Finance Overview</h2>
        <div className="flex space-x-4">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Revenue</p>
              <h3 className="text-2xl font-bold mt-1">$125,000</h3>
              <p className="text-green-600 text-sm mt-1 flex items-center">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                +12.5% from last month
              </p>
            </div>
            <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Pending Payments</p>
              <h3 className="text-2xl font-bold mt-1">$15,000</h3>
              <p className="text-red-600 text-sm mt-1 flex items-center">
                <ArrowDownRight className="h-4 w-4 mr-1" />
                +5.2% from last month
              </p>
            </div>
            <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
              <CreditCard className="h-6 w-6 text-red-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Expenses</p>
              <h3 className="text-2xl font-bold mt-1">$85,000</h3>
              <p className="text-green-600 text-sm mt-1 flex items-center">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                +8.3% from last month
              </p>
            </div>
            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Active Students</p>
              <h3 className="text-2xl font-bold mt-1">1,250</h3>
              <p className="text-green-600 text-sm mt-1 flex items-center">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                +3.1% from last month
              </p>
            </div>
            <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <Card>
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>2024-03-15</TableCell>
                  <TableCell>Tuition Payment - John Doe</TableCell>
                  <TableCell className="text-green-600">+$5,000</TableCell>
                  <TableCell>
                    <span className="text-green-600">Completed</span>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2024-03-14</TableCell>
                  <TableCell>Library Fine - Jane Smith</TableCell>
                  <TableCell className="text-green-600">+$25</TableCell>
                  <TableCell>
                    <span className="text-green-600">Completed</span>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2024-03-13</TableCell>
                  <TableCell>Staff Salary - March</TableCell>
                  <TableCell className="text-red-600">-$45,000</TableCell>
                  <TableCell>
                    <span className="text-yellow-600">Pending</span>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Upcoming Payments</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>2024-03-20</TableCell>
                  <TableCell>Utility Bills</TableCell>
                  <TableCell className="text-red-600">-$2,500</TableCell>
                  <TableCell>
                    <span className="text-yellow-600">Pending</span>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2024-03-25</TableCell>
                  <TableCell>Maintenance</TableCell>
                  <TableCell className="text-red-600">-$1,200</TableCell>
                  <TableCell>
                    <span className="text-yellow-600">Pending</span>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2024-03-30</TableCell>
                  <TableCell>Software Licenses</TableCell>
                  <TableCell className="text-red-600">-$3,000</TableCell>
                  <TableCell>
                    <span className="text-yellow-600">Pending</span>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FinanceOverview;
