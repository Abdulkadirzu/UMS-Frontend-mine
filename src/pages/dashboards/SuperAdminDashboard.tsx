import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
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
  Users,
  School,
  BookOpen,
  Library,
  FileText,
  Calendar,
  Settings,
  Bell,
  ArrowUpRight,
  Eye,
} from "lucide-react";
import { students, staff, courses, programs, invoices } from "@/utils/mockData";

// System overview data
const systemOverviewData = [
  { month: "Jan", students: 245, staff: 45 },
  { month: "Feb", students: 268, staff: 48 },
  { month: "Mar", students: 287, staff: 51 },
  { month: "Apr", students: 310, staff: 54 },
  { month: "May", students: 324, staff: 56 },
  { month: "Jun", students: 350, staff: 62 },
];

// Department breakdown
const departmentData = [
  { name: "Science", students: 135 },
  { name: "Arts", students: 118 },
  { name: "Commerce", students: 98 },
  { name: "Engineering", students: 86 },
  { name: "Medicine", students: 45 },
];

// Revenue by program
const revenueByProgramData = [
  { name: "Undergraduate", value: 65 },
  { name: "Masters", value: 25 },
  { name: "PhD", value: 10 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

// Recent activities
const recentActivities = [
  {
    id: 1,
    title: "New student registration",
    time: "10 minutes ago",
    type: "student",
  },
  {
    id: 2,
    title: "Invoice generated",
    time: "25 minutes ago",
    type: "finance",
  },
  { id: 3, title: "Course updated", time: "1 hour ago", type: "academic" },
  { id: 4, title: "Library book added", time: "2 hours ago", type: "library" },
  { id: 5, title: "Staff leave request", time: "3 hours ago", type: "staff" },
];

const SuperAdminDashboard = () => {
  // Get current year and semester
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const currentSemester =
    currentMonth >= 0 && currentMonth <= 5 ? "One" : "Two";

  // System health metrics
  const systemHealthMetrics = [
    { name: "Server Uptime", value: 99.8 },
    { name: "Database Performance", value: 92 },
    { name: "API Response Time", value: 97 },
    { name: "Storage Usage", value: 68 },
  ];

  return (
    <div>
      {/* Header with Year and Semester */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Super Admin Dashboard</h1>
        <div className="flex items-center gap-4">
          <div className="text-lg font-semibold text-gray-600">
            Academic Year: {currentYear}
          </div>
          <div className="text-lg font-semibold text-gray-600">
            Current Semester: {currentSemester}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Bell className="h-4 w-4 mr-1" />
            Notifications
          </Button>
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-1" />
            Settings
          </Button>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">Total Students</p>
                <h3 className="text-2xl font-bold">{students.length}</h3>
              </div>
              <div className="p-2 bg-blue-100 rounded-full">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <div className="flex items-center mt-4">
              <ArrowUpRight className="h-4 w-4 text-green-600 mr-1" />
              <p className="text-xs text-green-600">Active Students</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">Total Lecturers</p>
                <h3 className="text-2xl font-bold">
                  {staff.filter((s) => s.status === "Active").length}
                </h3>
              </div>
              <div className="p-2 bg-purple-100 rounded-full">
                <School className="h-6 w-6 text-purple-600" />
              </div>
            </div>
            <div className="flex items-center mt-4">
              <ArrowUpRight className="h-4 w-4 text-green-600 mr-1" />
              <p className="text-xs text-green-600">Active Lecturers</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">Total Staff</p>
                <h3 className="text-2xl font-bold">{staff.length}</h3>
              </div>
              <div className="p-2 bg-green-100 rounded-full">
                <Users className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <div className="flex items-center mt-4">
              <ArrowUpRight className="h-4 w-4 text-green-600 mr-1" />
              <p className="text-xs text-green-600">All Staff Members</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">Total Courses</p>
                <h3 className="text-2xl font-bold">{courses.length}</h3>
              </div>
              <div className="p-2 bg-red-100 rounded-full">
                <BookOpen className="h-6 w-6 text-red-600" />
              </div>
            </div>
            <div className="flex items-center mt-4">
              <ArrowUpRight className="h-4 w-4 text-green-600 mr-1" />
              <p className="text-xs text-green-600">Active Courses</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* System Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">Programs</p>
                <h3 className="text-2xl font-bold">{programs.length}</h3>
              </div>
              <div className="p-2 bg-purple-100 rounded-full">
                <School className="h-6 w-6 text-purple-600" />
              </div>
            </div>
            <div className="flex items-center mt-4">
              <ArrowUpRight className="h-4 w-4 text-green-600 mr-1" />
              <p className="text-xs text-green-600">+2 new programs</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">Revenue</p>
                <h3 className="text-2xl font-bold">
                  $
                  {invoices
                    .reduce(
                      (acc, invoice) =>
                        acc + (invoice.status === "Paid" ? invoice.amount : 0),
                      0
                    )
                    .toLocaleString()}
                </h3>
              </div>
              <div className="p-2 bg-red-100 rounded-full">
                <FileText className="h-6 w-6 text-red-600" />
              </div>
            </div>
            <div className="flex items-center mt-4">
              <ArrowUpRight className="h-4 w-4 text-green-600 mr-1" />
              <p className="text-xs text-green-600">+12% increase</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* System Growth Chart */}
      <Card className="mb-6">
        <CardHeader className="pb-0">
          <CardTitle>System Growth</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={systemOverviewData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="students"
                  name="Students"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="staff"
                  name="Staff"
                  stroke="#82ca9d"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Department and Revenue Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-0">
            <CardTitle>Department Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={departmentData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="students" name="Students" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-0">
            <CardTitle>Revenue by Program Level</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={revenueByProgramData}
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
                    {revenueByProgramData.map((_, index) => (
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

      {/* System Health and Recent Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">System Health</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {systemHealthMetrics.map((metric, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{metric.name}</span>
                    <span className="text-sm font-medium">{metric.value}%</span>
                  </div>
                  <Progress
                    value={metric.value}
                    className="h-2"
                    style={{
                      backgroundColor:
                        metric.value > 90
                          ? "#10B981"
                          : metric.value > 70
                          ? "#F59E0B"
                          : "#EF4444",
                    }}
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start">
                  <div
                    className={`p-2 rounded-full mr-3 ${
                      activity.type === "student"
                        ? "bg-blue-100"
                        : activity.type === "finance"
                        ? "bg-green-100"
                        : activity.type === "academic"
                        ? "bg-purple-100"
                        : activity.type === "library"
                        ? "bg-yellow-100"
                        : "bg-gray-100"
                    }`}
                  >
                    {activity.type === "student" ? (
                      <Users className="h-4 w-4 text-blue-600" />
                    ) : activity.type === "finance" ? (
                      <FileText className="h-4 w-4 text-green-600" />
                    ) : activity.type === "academic" ? (
                      <BookOpen className="h-4 w-4 text-purple-600" />
                    ) : activity.type === "library" ? (
                      <Library className="h-4 w-4 text-yellow-600" />
                    ) : (
                      <Bell className="h-4 w-4 text-gray-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.title}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                  <Button variant="ghost" size="sm" className="h-8 px-2">
                    <Eye className="h-3.5 w-3.5" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Access */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Quick Access</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <Button
              variant="outline"
              className="h-24 flex flex-col items-center justify-center"
            >
              <Users className="h-6 w-6 mb-2" />
              <span>User Management</span>
            </Button>
            <Button
              variant="outline"
              className="h-24 flex flex-col items-center justify-center"
            >
              <FileText className="h-6 w-6 mb-2" />
              <span>Financial Reports</span>
            </Button>
            <Button
              variant="outline"
              className="h-24 flex flex-col items-center justify-center"
            >
              <BookOpen className="h-6 w-6 mb-2" />
              <span>Academic Programs</span>
            </Button>
            <Button
              variant="outline"
              className="h-24 flex flex-col items-center justify-center"
            >
              <Calendar className="h-6 w-6 mb-2" />
              <span>Event Management</span>
            </Button>
            <Button
              variant="outline"
              className="h-24 flex flex-col items-center justify-center"
            >
              <Settings className="h-6 w-6 mb-2" />
              <span>System Settings</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SuperAdminDashboard;
