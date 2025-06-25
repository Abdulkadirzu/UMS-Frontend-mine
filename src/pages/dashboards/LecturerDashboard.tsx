import React from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Users,
  FileText,
  Calendar,
  ClipboardList,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
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
  Clock,
  Edit,
  Eye,
  GraduationCap,
  MessageSquare,
  Bell,
} from "lucide-react";
import { staff, courses } from "@/utils/mockData";
import { useAuth } from "@/contexts/AuthContext";

const LecturerDashboard: React.FC = () => {
  const { user } = useAuth();

  // Get lecturer profile
  const lecturer = staff.find((s) => s.id === user?.id) || staff[0];

  // Get lecturer's courses
  const lecturerCourses = courses.filter(
    (c) => lecturer.assignedCourses && lecturer.assignedCourses.includes(c.code)
  );

  // Get student count for each course
  const coursesData = lecturerCourses.map((course) => {
    // Mock data for student count
    const studentCount = Math.floor(Math.random() * 30) + 20;
    return {
      ...course,
      students: studentCount,
    };
  });

  // Mock data for grade distribution
  const gradeData = [
    { grade: "A", count: 12 },
    { grade: "B", count: 18 },
    { grade: "C", count: 8 },
    { grade: "D", count: 5 },
    { grade: "F", count: 2 },
  ];

  // Mock data for student performance trend
  const performanceTrend = [
    { week: "Week 1", average: 75 },
    { week: "Week 2", average: 78 },
    { week: "Week 3", average: 82 },
    { week: "Week 4", average: 80 },
    { week: "Week 5", average: 85 },
    { week: "Week 6", average: 88 },
  ];

  // Mock upcoming classes
  const upcomingClasses = [
    {
      id: 1,
      course: lecturerCourses[0]?.name || "Introduction to Physics",
      time: "10:00 AM - 12:00 PM",
      room: "Room 101",
    },
    {
      id: 2,
      course: lecturerCourses[1]?.name || "Advanced Physics",
      time: "2:00 PM - 4:00 PM",
      room: "Lab 202",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">Total Courses</p>
                <h3 className="text-2xl font-bold mt-1">
                  {lecturerCourses.length}
                </h3>
              </div>
              <div className="p-2 bg-blue-100 rounded-full">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <div className="flex items-center mt-4">
              <p className="text-sm text-gray-500">Active this semester</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">Total Students</p>
                <h3 className="text-2xl font-bold mt-1">
                  {coursesData.reduce((acc, curr) => acc + curr.students, 0)}
                </h3>
              </div>
              <div className="p-2 bg-green-100 rounded-full">
                <Users className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <div className="flex items-center mt-4">
              <p className="text-sm text-gray-500">Across all courses</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">Average Grade</p>
                <h3 className="text-2xl font-bold mt-1">B+</h3>
              </div>
              <div className="p-2 bg-purple-100 rounded-full">
                <GraduationCap className="h-6 w-6 text-purple-600" />
              </div>
            </div>
            <div className="flex items-center mt-4">
              <p className="text-sm text-gray-500">Class average</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">Pending Tasks</p>
                <h3 className="text-2xl font-bold mt-1">5</h3>
              </div>
              <div className="p-2 bg-orange-100 rounded-full">
                <Bell className="h-6 w-6 text-orange-600" />
              </div>
            </div>
            <div className="flex items-center mt-4">
              <p className="text-sm text-gray-500">Grading & Reviews</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Course Progress */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-xl">Course Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {coursesData.map((course) => (
                <div key={course.id} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">{course.name}</h4>
                      <p className="text-sm text-gray-500">{course.code}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MessageSquare className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{course.students} Students</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>Next class: 10:00 AM</span>
                    </div>
                  </div>
                  <Progress value={75} className="h-2" />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>75% Complete</span>
                    <span>3/4 Modules</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Classes */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Today's Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingClasses.map((class_) => (
                <div key={class_.id} className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium">{class_.course}</h4>
                  <div className="flex items-center mt-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{class_.time}</span>
                  </div>
                  <div className="flex items-center mt-1 text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{class_.room}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Student Performance Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={performanceTrend}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="average"
                    name="Class Average"
                    stroke="#4F46E5"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Grade Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={gradeData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="grade" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" name="Students" fill="#4F46E5" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Manage Your Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link
            to="/dashboard/lecturer/courses"
            className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200"
          >
            <div className="flex items-center mb-2">
              <BookOpen className="h-5 w-5 text-blue-500 mr-2" />
              <h2 className="font-semibold">My Courses</h2>
            </div>
            <p className="text-gray-600">View and manage your courses</p>
          </Link>
          <Link
            to="/dashboard/lecturer/departments"
            className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200"
          >
            <div className="flex items-center mb-2">
              <Users className="h-5 w-5 text-blue-500 mr-2" />
              <h2 className="font-semibold">Departments</h2>
            </div>
            <p className="text-gray-600">Manage department information</p>
          </Link>
          <Link
            to="/dashboard/lecturer/subjects"
            className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200"
          >
            <div className="flex items-center mb-2">
              <BookOpen className="h-5 w-5 text-blue-500 mr-2" />
              <h2 className="font-semibold">Subjects</h2>
            </div>
            <p className="text-gray-600">Manage subject details</p>
          </Link>
          <Link
            to="/dashboard/lecturer/assignments"
            className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200"
          >
            <div className="flex items-center mb-2">
              <ClipboardList className="h-5 w-5 text-blue-500 mr-2" />
              <h2 className="font-semibold">Assignments</h2>
            </div>
            <p className="text-gray-600">Assign and view student assignments</p>
          </Link>
          <Link
            to="/dashboard/lecturer/exams"
            className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200"
          >
            <div className="flex items-center mb-2">
              <FileText className="h-5 w-5 text-blue-500 mr-2" />
              <h2 className="font-semibold">Exams</h2>
            </div>
            <p className="text-gray-600">Set and manage exams</p>
          </Link>
          <Link
            to="/dashboard/lecturer/timetable"
            className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200"
          >
            <div className="flex items-center mb-2">
              <Calendar className="h-5 w-5 text-blue-500 mr-2" />
              <h2 className="font-semibold">Timetable</h2>
            </div>
            <p className="text-gray-600">View and manage your schedule</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LecturerDashboard;
