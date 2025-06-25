import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Plus,
  Search,
  Filter,
  FileText,
  Calendar,
  Clock,
  Users,
} from "lucide-react";

const OnlineExamsPage: React.FC = () => {
  // Mock data for online exams
  const onlineExams = [
    {
      id: 1,
      title: "Introduction to Programming Final Exam",
      course: "CS101",
      date: "2024-03-25",
      time: "10:00 AM",
      duration: "2 hours",
      totalMarks: 100,
      questionCount: 50,
      participants: 45,
      status: "Scheduled",
      platform: "ExamSoft",
    },
    {
      id: 2,
      title: "Database Systems Midterm",
      course: "CS201",
      date: "2024-03-26",
      time: "2:00 PM",
      duration: "1.5 hours",
      totalMarks: 50,
      questionCount: 25,
      participants: 38,
      status: "Draft",
      platform: "ExamSoft",
    },
    {
      id: 3,
      title: "Web Development Final",
      course: "CS301",
      date: "2024-03-27",
      time: "11:30 AM",
      duration: "3 hours",
      totalMarks: 150,
      questionCount: 75,
      participants: 52,
      status: "Scheduled",
      platform: "ExamSoft",
    },
  ];

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Online Exams</h1>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Create New Exam
        </Button>
      </div>

      {/* Search and Filter Bar */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search exams..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
      </div>

      {/* Exams Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {onlineExams.map((exam) => (
          <Card key={exam.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">{exam.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Course:</span>
                  <span className="font-medium">{exam.course}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Platform:</span>
                  <span className="font-medium">{exam.platform}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Date:</span>
                  <span className="font-medium">{exam.date}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Time:</span>
                  <span className="font-medium">{exam.time}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Duration:</span>
                  <span className="font-medium">{exam.duration}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Total Marks:</span>
                  <span className="font-medium">{exam.totalMarks}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Questions:</span>
                  <span className="font-medium">{exam.questionCount}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Participants:</span>
                  <span className="font-medium">{exam.participants}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Status:</span>
                  <span
                    className={`font-medium ${
                      exam.status === "Completed"
                        ? "text-green-600"
                        : exam.status === "Scheduled"
                        ? "text-blue-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {exam.status}
                  </span>
                </div>
                <div className="pt-4 flex gap-2">
                  <Button variant="outline" className="flex-1">
                    Edit
                  </Button>
                  <Button variant="outline" className="flex-1">
                    View Results
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OnlineExamsPage;
