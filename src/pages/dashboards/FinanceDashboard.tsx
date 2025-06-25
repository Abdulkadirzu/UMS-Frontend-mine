import SidebarLayout from "@/components/layout/SidebarLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  CreditCard,
  Users,
  FileText,
} from "lucide-react";
import { students, payments, invoices } from "@/utils/mockData";

// Sample financial data
const monthlyRevenue = [
  { month: "Jan", revenue: 42000 },
  { month: "Feb", revenue: 38000 },
  { month: "Mar", revenue: 45000 },
  { month: "Apr", revenue: 56000 },
  { month: "May", revenue: 48000 },
  { month: "Jun", revenue: 52000 },
  { month: "Jul", revenue: 58000 },
];

const expenseData = [
  { category: "Salaries", amount: 35000 },
  { category: "Facilities", amount: 15000 },
  { category: "Equipment", amount: 8000 },
  { category: "Utilities", amount: 5000 },
  { category: "Miscellaneous", amount: 3000 },
];

const paymentMethodsData = [
  { name: "Card", value: 45 },
  { name: "PayPal", value: 30 },
  { name: "M-Pesa", value: 20 },
  { name: "Cash", value: 5 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const FinanceDashboard = () => {
  // Calculate total revenue
  const totalRevenue = payments.reduce(
    (acc, payment) => acc + payment.amount,
    0
  );

  // Calculate pending payments (from invoices with pending status)
  const pendingPayments = invoices
    .filter((invoice) => invoice.status === "Pending")
    .reduce((acc, invoice) => acc + invoice.amount, 0);

  // Calculate total invoices amount
  const totalInvoicedAmount = invoices.reduce(
    (acc, invoice) => acc + invoice.amount,
    0
  );

  // Calculate paid percentage
  const paidPercentage = (totalRevenue / totalInvoicedAmount) * 100;

  return (
    <SidebarLayout>
      <div>
        <h1 className="text-2xl font-bold mb-6">Finance Dashboard</h1>

        {/* Financial Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500">Total Revenue</p>
                  <h3 className="text-2xl font-bold">
                    ${totalRevenue.toLocaleString()}
                  </h3>
                </div>
                <div className="p-2 bg-green-100 rounded-full">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <div className="flex items-center mt-4">
                <ArrowUpRight className="h-4 w-4 text-green-600 mr-1" />
                <p className="text-xs text-green-600">+8% from last month</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500">Pending Payments</p>
                  <h3 className="text-2xl font-bold">
                    ${pendingPayments.toLocaleString()}
                  </h3>
                </div>
                <div className="p-2 bg-yellow-100 rounded-full">
                  <CreditCard className="h-6 w-6 text-yellow-600" />
                </div>
              </div>
              <div className="flex items-center mt-4">
                <ArrowDownRight className="h-4 w-4 text-yellow-600 mr-1" />
                <p className="text-xs text-yellow-600">Needs attention</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500">Students with Dues</p>
                  <h3 className="text-2xl font-bold">
                    {
                      invoices.filter(
                        (i) => i.status === "Pending" || i.status === "Overdue"
                      ).length
                    }
                  </h3>
                </div>
                <div className="p-2 bg-red-100 rounded-full">
                  <Users className="h-6 w-6 text-red-600" />
                </div>
              </div>
              <div className="flex items-center mt-4">
                <ArrowUpRight className="h-4 w-4 text-red-600 mr-1" />
                <p className="text-xs text-red-600">+2 since last week</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500">Payment Completion</p>
                  <h3 className="text-2xl font-bold">
                    {Math.round(paidPercentage)}%
                  </h3>
                </div>
                <div className="p-2 bg-blue-100 rounded-full">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div className="flex items-center mt-4">
                <ArrowUpRight className="h-4 w-4 text-blue-600 mr-1" />
                <p className="text-xs text-blue-600">On track</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Revenue Chart */}
        <Card className="mb-6">
          <CardHeader className="pb-0">
            <CardTitle>Monthly Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={monthlyRevenue}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`$${value}`, "Revenue"]} />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    name="Revenue"
                    stroke="#4F46E5"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader className="pb-0">
              <CardTitle>Expenses Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={expenseData}
                    layout="vertical"
                    margin={{ top: 20, right: 30, left: 70, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="category" type="category" />
                    <Tooltip formatter={(value) => [`$${value}`, "Amount"]} />
                    <Legend />
                    <Bar dataKey="amount" name="Amount" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-0">
              <CardTitle>Payment Methods</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={paymentMethodsData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) =>
                        `${name}: ${(percent * 100).toFixed(0)}%`
                      }
                    >
                      {paymentMethodsData.map((_, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Payments */}
        <Card>
          <CardHeader className="pb-2 flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Recent Payments</CardTitle>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </CardHeader>
          <CardContent>
            <div className="overflow-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Reference
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Student
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Method
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {payments.map((payment) => {
                    const student = students.find(
                      (s) => s.id === payment.studentId
                    );
                    return (
                      <tr key={payment.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {payment.paymentDate}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {payment.reference}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {student?.name || "Unknown"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          ${payment.amount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {payment.paymentMethod}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              payment.status === "Completed"
                                ? "bg-green-100 text-green-800"
                                : payment.status === "Pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {payment.status}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </SidebarLayout>
  );
};

export default FinanceDashboard;
