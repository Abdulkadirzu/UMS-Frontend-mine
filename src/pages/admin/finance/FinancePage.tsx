import React from "react";
import SidebarLayout from "@/components/layout/SidebarLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, FileText, Users } from "lucide-react";

const FinancePage: React.FC = () => {
  return (
    <SidebarLayout>
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Finance Dashboard
          </h1>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Add Transaction
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Revenue
              </CardTitle>
              <DollarSign className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$120,000</div>
              <p className="text-xs text-muted-foreground">This year</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Pending Invoices
              </CardTitle>
              <FileText className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15</div>
              <p className="text-xs text-muted-foreground">Awaiting payment</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Students
              </CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,200</div>
              <p className="text-xs text-muted-foreground">
                With active accounts
              </p>
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left">Date</th>
                    <th className="px-4 py-2 text-left">Description</th>
                    <th className="px-4 py-2 text-left">Amount</th>
                    <th className="px-4 py-2 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2">2024-05-01</td>
                    <td className="px-4 py-2">Tuition Payment</td>
                    <td className="px-4 py-2">$2,000</td>
                    <td className="px-4 py-2 text-green-600">Completed</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">2024-05-03</td>
                    <td className="px-4 py-2">Library Fine</td>
                    <td className="px-4 py-2">$50</td>
                    <td className="px-4 py-2 text-yellow-600">Pending</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">2024-05-05</td>
                    <td className="px-4 py-2">Hostel Fee</td>
                    <td className="px-4 py-2">$500</td>
                    <td className="px-4 py-2 text-green-600">Completed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </SidebarLayout>
  );
};

export default FinancePage;
