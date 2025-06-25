import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Users, BookOpen, GraduationCap, Bell } from "lucide-react";
import { students, staff, courses } from "@/utils/mockData";
import { useAuth } from "@/contexts/AuthContext";
import SidebarLayout from "@/components/layout/SidebarLayout";

// Mock data for charts and stats

// Helper to generate data for enrollment trends (example)
const generateEnrollmentData = (startDate: string, numMonths: number) => {
  const data = [];
  const start = new Date(startDate);
  for (let i = 0; i < numMonths; i++) {
    const date = new Date(start.getFullYear(), start.getMonth() + i, 1);
    data.push({
      month: date.toLocaleString("default", {
        month: "short",
        year: "2-digit",
      }),
      students: Math.floor(Math.random() * 100) + 200, // Random student count
    });
  }
  return data;
};

// Mock recent payments (example)
const recentPayments = [
  { id: 1, date: "2024-05-30", amount: 15000 },
  { id: 2, date: "2024-05-28", amount: 20000 },
  { id: 3, date: "2024-05-25", amount: 10000 },
];

const AdminDashboard = () => {
  const { user } = useAuth();

  // Determine display name for header
  const admin = staff.find((s) => s.id === user?.id);
  const displayName = admin?.name || user?.name || "Admin";

  // Mock statistics
  const totalStudents = students.length;
  const totalStaff = staff.length;
  const totalCourses = courses.length;
  // Placeholder for pending tasks
  const pendingTasks = 5;

  // Generate mock enrollment data for the chart
  const enrollmentData = generateEnrollmentData("2023-01-01", 12);

  // Mock data for staff distribution by department
  const staffDistribution = staff.reduce((acc, curr) => {
    acc[curr.department] = (acc[curr.department] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const staffData = Object.keys(staffDistribution).map((key) => ({
    department: key,
    count: staffDistribution[key],
  }));

  return (
    <SidebarLayout>
      <div className="space-y-6">
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Welcome, {displayName}</h1>
            <p className="text-gray-500 mt-1">
              Overview of the university's key metrics
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500">Total Students</p>
                  <h3 className="text-2xl font-bold mt-1">{totalStudents}</h3>
                </div>
                <div className="p-2 bg-blue-100 rounded-full">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div className="flex items-center mt-4">
                <p className="text-sm text-gray-500">Current enrollment</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500">Total Staff</p>
                  <h3 className="text-2xl font-bold mt-1">{totalStaff}</h3>
                </div>
                <div className="p-2 bg-green-100 rounded-full">
                  <GraduationCap className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <div className="flex items-center mt-4">
                <p className="text-sm text-gray-500">Active members</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500">Total Courses</p>
                  <h3 className="text-2xl font-bold mt-1">{totalCourses}</h3>
                </div>
                <div className="p-2 bg-purple-100 rounded-full">
                  <BookOpen className="h-6 w-6 text-purple-600" />
                </div>
              </div>
              <div className="flex items-center mt-4">
                <p className="text-sm text-gray-500">Offered this semester</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500">Pending Tasks</p>
                  <h3 className="text-2xl font-bold mt-1">{pendingTasks}</h3>
                </div>
                <div className="p-2 bg-orange-100 rounded-full">
                  <Bell className="h-6 w-6 text-orange-600" />
                </div>
              </div>
              <div className="flex items-center mt-4">
                <p className="text-sm text-gray-500">Admin actions</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader className="pb-0">
              <CardTitle>Enrollment Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={enrollmentData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
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
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-0">
              <CardTitle>Staff Distribution by Department</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={staffData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="department" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#82ca9d" name="Staff Count" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Payments and Upcoming Events */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="pb-2 flex flex-row items-center justify-between">
              <CardTitle className="text-xl">Recent Payments</CardTitle>
              <Button variant="ghost" size="sm">
                View All
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentPayments.map((payment) => (
                  <div
                    key={payment.id}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <p className="text-sm font-medium">
                        Payment #{payment.id}
                      </p>
                      <p className="text-xs text-gray-500">{payment.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">${payment.amount}</p>
                      <p className="text-xs text-green-600">Completed</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2 flex flex-row items-center justify-between">
              <CardTitle className="text-xl">Upcoming Events</CardTitle>
              <Button variant="ghost" size="sm">
                View All
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Mock upcoming events - replace with actual data fetching */}
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm font-medium">Semester Exams Start</p>
                  <p className="text-xs text-gray-500">July 15, 2025</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm font-medium">
                    Project Submission Deadline
                  </p>
                  <p className="text-xs text-gray-500">July 20, 2025</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </SidebarLayout>
  );
};

export default AdminDashboard;
