import React from "react";
import { useNavigate } from "react-router-dom";

const DepartmentDashboard: React.FC = () => {
  const navigate = useNavigate();

  const dashboardCards = [
    {
      title: "Students",
      count: 450,
      icon: "👥",
      path: "/department/students",
    },
    {
      title: "Lecturers",
      count: 25,
      icon: "👨‍🏫",
      path: "/department/lecturers",
    },
    {
      title: "Courses",
      count: 35,
      icon: "📚",
      path: "/department/courses",
    },
    {
      title: "Subjects",
      count: 120,
      icon: "📖",
      path: "/department/subjects",
    },
    {
      title: "Staff",
      count: 15,
      icon: "👨‍💼",
      path: "/department/staff",
    },
    {
      title: "Timetable",
      icon: "📅",
      path: "/department/timetable",
    },
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Department Dashboard
        </h1>
        <p className="text-gray-600 mt-2">
          Welcome to the Computer Science Department
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mb-8">
        {dashboardCards.map((card, index) => (
          <div
            key={index}
            onClick={() => navigate(card.path)}
            className="bg-white rounded-lg shadow p-4 cursor-pointer hover:shadow-md transition-shadow border"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-600">
                  {card.title}
                </h3>
                {card.count && (
                  <p className="text-xl font-semibold text-gray-900 mt-1">
                    {card.count}
                  </p>
                )}
              </div>
              <span className="text-2xl">{card.icon}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Recent Activities
        </h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <div>
              <p className="font-medium text-gray-800">
                New Student Registration
              </p>
              <p className="text-sm text-gray-600">
                5 new students registered today
              </p>
            </div>
            <span className="text-sm text-gray-500 ml-auto">2 hours ago</span>
          </div>
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div>
              <p className="font-medium text-gray-800">Course Update</p>
              <p className="text-sm text-gray-600">
                CS101 syllabus has been updated
              </p>
            </div>
            <span className="text-sm text-gray-500 ml-auto">5 hours ago</span>
          </div>
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <div>
              <p className="font-medium text-gray-800">
                New Lecturer Assignment
              </p>
              <p className="text-sm text-gray-600">
                Dr. Smith assigned to CS201
              </p>
            </div>
            <span className="text-sm text-gray-500 ml-auto">1 day ago</span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Quick Actions
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="p-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors border">
            Add New Student
          </button>
          <button className="p-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors border">
            Schedule Class
          </button>
          <button className="p-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors border">
            Generate Report
          </button>
          <button className="p-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors border">
            Update Timetable
          </button>
        </div>
      </div>
    </div>
  );
};

export default DepartmentDashboard;
