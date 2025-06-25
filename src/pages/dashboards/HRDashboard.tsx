import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  Calendar,
  FileText,
  Search,
  Settings,
  TrendingUp,
  Clock,
  AlertCircle,
} from "lucide-react";

const HRDashboard = () => {
  // Mock data for statistics
  const stats = [
    {
      title: "Total Employees",
      value: "156",
      icon: Users,
      change: "+12%",
      trend: "up",
    },
    {
      title: "Leave Requests",
      value: "8",
      icon: Calendar,
      change: "-3%",
      trend: "down",
    },
    {
      title: "Payroll Processed",
      value: "98%",
      icon: FileText,
      change: "+5%",
      trend: "up",
    },
    {
      title: "Active Recruitments",
      value: "5",
      icon: TrendingUp,
      change: "+2",
      trend: "up",
    },
  ];

  // Mock data for recent activities
  const recentActivities = [
    {
      id: 1,
      type: "leave",
      employee: "John Doe",
      action: "requested leave",
      time: "2 hours ago",
      status: "pending",
    },
    {
      id: 2,
      type: "payroll",
      employee: "Jane Smith",
      action: "salary processed",
      time: "4 hours ago",
      status: "completed",
    },
    {
      id: 3,
      type: "recruitment",
      employee: "New Position",
      action: "job posted",
      time: "1 day ago",
      status: "active",
    },
  ];

  // Quick actions
  const quickActions = [
    {
      title: "Employee Management",
      icon: Users,
      link: "/hr/employee-management",
    },
    {
      title: "Leave Management",
      icon: Calendar,
      link: "/hr/leave-management",
    },
    {
      title: "Payroll & Payslip",
      icon: FileText,
      link: "/hr/payroll-payslip",
    },
    {
      title: "Employee Search",
      icon: Search,
      link: "/hr/employee-search",
    },
    {
      title: "HR Settings",
      icon: Settings,
      link: "/hr/settings",
    },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">HR Dashboard</h1>
        <Button>Generate Report</Button>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    {stat.title}
                  </p>
                  <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                  <p
                    className={`text-sm mt-1 ${
                      stat.trend === "up" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {stat.change}
                  </p>
                </div>
                <div className="p-3 bg-blue-50 rounded-full">
                  <stat.icon className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full justify-start"
                  asChild
                >
                  <a href={action.link}>
                    <action.icon className="mr-2 h-4 w-4" />
                    {action.title}
                  </a>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-blue-50 rounded-full">
                      {activity.type === "leave" ? (
                        <Calendar className="h-4 w-4 text-blue-600" />
                      ) : activity.type === "payroll" ? (
                        <FileText className="h-4 w-4 text-blue-600" />
                      ) : (
                        <TrendingUp className="h-4 w-4 text-blue-600" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium">{activity.employee}</p>
                      <p className="text-sm text-gray-500">{activity.action}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-500">
                      <Clock className="h-4 w-4 inline mr-1" />
                      {activity.time}
                    </span>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        activity.status === "completed"
                          ? "bg-green-100 text-green-800"
                          : activity.status === "pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {activity.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HRDashboard;
