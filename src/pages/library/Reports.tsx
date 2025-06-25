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
} from "lucide-react";

const Reports: React.FC = () => {
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Library Reports</h2>
        <div className="flex space-x-4">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export All
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Popular Books</h3>
            <Button variant="ghost" size="sm">
              <Download className="h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Introduction to Physics</span>
              <span className="text-blue-600">45 loans</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Advanced Mathematics</span>
              <span className="text-blue-600">38 loans</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Chemistry Basics</span>
              <span className="text-blue-600">32 loans</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Overdue Books</h3>
            <Button variant="ghost" size="sm">
              <Download className="h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Biology 101</span>
              <span className="text-red-600">5 days overdue</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Computer Science</span>
              <span className="text-red-600">3 days overdue</span>
            </div>
            <div className="flex items-center justify-between">
              <span>English Literature</span>
              <span className="text-red-600">2 days overdue</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Fine Collection</h3>
            <Button variant="ghost" size="sm">
              <Download className="h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>This Month</span>
              <span className="text-green-600">$250.00</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Last Month</span>
              <span className="text-green-600">$180.00</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Total Outstanding</span>
              <span className="text-yellow-600">$75.00</span>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Monthly Statistics</h3>
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
                <TableHead>Books Loaned</TableHead>
                <TableHead>Books Returned</TableHead>
                <TableHead>Fines Collected</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>March 2024</TableCell>
                <TableCell>150</TableCell>
                <TableCell>145</TableCell>
                <TableCell>$250.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>February 2024</TableCell>
                <TableCell>135</TableCell>
                <TableCell>130</TableCell>
                <TableCell>$180.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>January 2024</TableCell>
                <TableCell>120</TableCell>
                <TableCell>118</TableCell>
                <TableCell>$150.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Category Distribution</h3>
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
                <TableHead>Total Books</TableHead>
                <TableHead>Available</TableHead>
                <TableHead>Loaned</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Textbooks</TableCell>
                <TableCell>500</TableCell>
                <TableCell>350</TableCell>
                <TableCell>150</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Fiction</TableCell>
                <TableCell>300</TableCell>
                <TableCell>250</TableCell>
                <TableCell>50</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Reference</TableCell>
                <TableCell>200</TableCell>
                <TableCell>180</TableCell>
                <TableCell>20</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
};

export default Reports;
