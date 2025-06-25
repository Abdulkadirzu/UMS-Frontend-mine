import React from "react";
import {
  FileText,
  Plus,
  Calendar,
  Users,
  CheckCircle,
  Clock,
} from "lucide-react";

const AssignmentsPage: React.FC = () => {
  const assignments = [
    {
      id: 1,
      title: "Python Programming Basics",
      subject: "Introduction to Programming",
      code: "CS101",
      dueDate: "2024-10-15",
      dueTime: "11:59 PM",
      totalStudents: 45,
      submissions: 38,
      status: "Active",
      type: "Programming",
      description:
        "Implement basic Python programs covering variables, loops, and functions.",
    },
    {
      id: 2,
      title: "Data Structures Implementation",
      subject: "Data Structures",
      code: "CS201",
      dueDate: "2024-10-20",
      dueTime: "11:59 PM",
      totalStudents: 38,
      submissions: 25,
      status: "Active",
      type: "Programming",
      description:
        "Implement and test various data structures including linked lists and trees.",
    },
  ];

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <FileText className="w-8 h-8 text-blue-600" />
          <h1 className="text-2xl font-bold">Assignments</h1>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Plus className="w-5 h-5" />
          Create New Assignment
        </button>
      </div>

      <div className="grid gap-6">
        {assignments.map((assignment) => (
          <div
            key={assignment.id}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold">{assignment.title}</h2>
                <p className="text-gray-500">
                  {assignment.subject} ({assignment.code})
                </p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  assignment.status === "Active"
                    ? "bg-green-100 text-green-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {assignment.status}
              </span>
            </div>

            <p className="text-gray-600 mb-4">{assignment.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-500">Due Date & Time</p>
                  <p className="font-medium">
                    {assignment.dueDate} at {assignment.dueTime}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-500">Submissions</p>
                  <p className="font-medium">
                    {assignment.submissions} / {assignment.totalStudents}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-500">Type</p>
                  <p className="font-medium">{assignment.type}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-500">Time Remaining</p>
                  <p className="font-medium">3 days left</p>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button className="px-4 py-2 text-blue-600 hover:text-blue-700">
                View Submissions
              </button>
              <button className="px-4 py-2 text-blue-600 hover:text-blue-700">
                Edit
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Grade Submissions
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssignmentsPage;
