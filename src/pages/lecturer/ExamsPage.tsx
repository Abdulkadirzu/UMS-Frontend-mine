import React from "react";
import { GraduationCap, Plus, Calendar, Clock, Users } from "lucide-react";

const ExamsPage: React.FC = () => {
  const exams = [
    {
      id: 1,
      title: "Midterm Examination",
      subject: "Introduction to Programming",
      code: "CS101",
      date: "2024-11-15",
      time: "09:00 AM",
      duration: "2 hours",
      totalStudents: 45,
      status: "Scheduled",
      type: "Written",
      venue: "Room 101",
    },
    {
      id: 2,
      title: "Final Practical Exam",
      subject: "Data Structures",
      code: "CS201",
      date: "2024-12-10",
      time: "02:00 PM",
      duration: "3 hours",
      totalStudents: 38,
      status: "Scheduled",
      type: "Practical",
      venue: "Lab 3",
    },
  ];

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <GraduationCap className="w-8 h-8 text-blue-600" />
          <h1 className="text-2xl font-bold">Exams</h1>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Plus className="w-5 h-5" />
          Create New Exam
        </button>
      </div>

      <div className="grid gap-6">
        {exams.map((exam) => (
          <div key={exam.id} className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold">{exam.title}</h2>
                <p className="text-gray-500">
                  {exam.subject} ({exam.code})
                </p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  exam.status === "Scheduled"
                    ? "bg-green-100 text-green-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {exam.status}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-500">Date</p>
                  <p className="font-medium">{exam.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-500">Time & Duration</p>
                  <p className="font-medium">
                    {exam.time} ({exam.duration})
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-500">Total Students</p>
                  <p className="font-medium">{exam.totalStudents}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-500">Type & Venue</p>
                  <p className="font-medium">
                    {exam.type} • {exam.venue}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button className="px-4 py-2 text-blue-600 hover:text-blue-700">
                View Details
              </button>
              <button className="px-4 py-2 text-blue-600 hover:text-blue-700">
                Edit
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Manage Results
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExamsPage;
