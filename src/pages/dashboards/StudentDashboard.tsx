import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  LineChart,
  Line,
  Legend,
} from "recharts";
import {
  Calendar,
  Settings,
  Pencil,
  ShoppingBag,
  DollarSign,
} from "lucide-react";
import { students } from "@/utils/mockData";
import { useAuth } from "@/contexts/AuthContext";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";

const StudentDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  // Get student profile
  const student = students.find((s) => s.id === user?.id) || students[0];

  // Mock data for grade distribution
  const gradeData = [
    { grade: "A", count: 2 },
    { grade: "B", count: 3 },
    { grade: "C", count: 1 },
    { grade: "D", count: 0 },
    { grade: "F", count: 0 },
  ];

  // Mock data for performance trend
  const performanceTrend = [
    { week: "Week 1", average: 85 },
    { week: "Week 2", average: 88 },
    { week: "Week 3", average: 82 },
    { week: "Week 4", average: 90 },
    { week: "Week 5", average: 87 },
    { week: "Week 6", average: 92 },
  ];

  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Welcome, {student.name}</h1>
          <p className="text-gray-500 mt-1">
            Here's your learning overview for today
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            Schedule
          </Button>
          <Button variant="outline" className="flex items-center">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>

      {/* Academic Tabs */}
      <Tabs defaultValue="courses" className="mb-6">
        <TabsList className="grid w-full grid-cols-7">
          <TabsTrigger
            value="courses"
            onClick={() => navigate("/academics/courses")}
          >
            Courses & Subjects
          </TabsTrigger>
          <TabsTrigger
            value="exams"
            onClick={() => navigate("/academics/exams")}
          >
            Exams
          </TabsTrigger>
          <TabsTrigger
            value="results"
            onClick={() => navigate("/academics/results")}
          >
            Provisional Results
          </TabsTrigger>
          <TabsTrigger
            value="failed"
            onClick={() => navigate("/academics/failed")}
          >
            Failed Exams
          </TabsTrigger>
          <TabsTrigger
            value="timetable"
            onClick={() => navigate("/academics/timetable")}
          >
            Timetable
          </TabsTrigger>
          <TabsTrigger
            value="assignments"
            onClick={() => navigate("/academics/assignments")}
          >
            Assignments
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Cards like the image */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Registered Units Card */}
        <Card className="bg-[#1E3A8A] text-white">
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-lg font-medium">Registered Units</p>
              <h3 className="text-4xl font-bold mt-2">0</h3>
            </div>
            <Pencil className="h-10 w-10 opacity-75" />
          </CardContent>
        </Card>

        {/* Attempted Units Card */}
        <Card className="bg-[#C5221F] text-white">
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-lg font-medium">Attempted Units</p>
              <h3 className="text-4xl font-bold mt-2">67</h3>
            </div>
            <ShoppingBag className="h-10 w-10 opacity-75" />
          </CardContent>
        </Card>

        {/* Fee Payment Card */}
        <Card className="bg-[#1E3A8A] text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Fee Payment</CardTitle>
            <DollarSign className="h-6 w-6" />
          </CardHeader>
          <CardContent className="pt-0">
            <div className="bg-[#C5221F] p-4 rounded-md">
              <p className="text-sm font-medium">
                Total Billed = Ksh.167,816.00
              </p>
              <p className="text-sm font-medium">Total Paid = Ksh.168,460.00</p>
              <p className="text-sm font-medium">Fee Balance = Ksh.-644.00</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance and Grade Distribution Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <Card>
          <CardHeader className="pb-0">
            <CardTitle>Performance Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={performanceTrend}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="average"
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
            <CardTitle>Grade Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={gradeData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="grade" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="count" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudentDashboard;
