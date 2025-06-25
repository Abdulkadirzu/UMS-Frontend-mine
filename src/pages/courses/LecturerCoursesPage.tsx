import React, { useState } from "react";
import {
  BookOpen,
  GraduationCap,
  Search,
  Users,
  Calendar,
  FileText,
  MessageSquare,
  ChevronRight,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useAuth } from "@/contexts/AuthContext";

const LecturerCoursesPage: React.FC = () => {
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");

  const courses = [
    {
      id: 1,
      code: "CS101",
      name: "Introduction to Programming",
      semester: "Fall 2024",
      students: 45,
      progress: 75,
      assignments: 8,
      completedAssignments: 6,
      subjects: [
        "Python Basics",
        "Control Structures",
        "Functions",
        "Object-Oriented Programming",
      ],
    },
    {
      id: 2,
      code: "CS201",
      name: "Data Structures",
      semester: "Spring 2024",
      students: 38,
      progress: 60,
      assignments: 10,
      completedAssignments: 6,
      subjects: [
        "Arrays",
        "Linked Lists",
        "Stacks",
        "Queues",
        "Trees",
        "Graphs",
      ],
    },
    {
      id: 3,
      code: "CS301",
      name: "Database Systems",
      semester: "Fall 2024",
      students: 42,
      progress: 85,
      assignments: 12,
      completedAssignments: 10,
      subjects: [
        "SQL",
        "Database Design",
        "Normalization",
        "Transactions",
        "Indexing",
      ],
    },
  ];

  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <BookOpen className="w-8 h-8 text-blue-600" />
          <h1 className="text-2xl font-bold">My Courses</h1>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add New Course
        </Button>
      </div>

      {/* Search and Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Courses</p>
                <p className="text-2xl font-bold">{courses.length}</p>
              </div>
              <BookOpen className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Courses Grid */}
      <div className="grid gap-6">
        {filteredCourses.map((course) => (
          <Card key={course.id} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-semibold">{course.name}</h2>
                  <p className="text-gray-500">Code: {course.code}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{course.semester}</p>
                  <p className="text-sm text-gray-500">
                    {course.students} students
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500">Students</p>
                    <p className="font-medium">{course.students}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="text-sm text-gray-500">Progress</p>
                    <p className="font-medium">{course.progress}%</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-purple-600" />
                  <div>
                    <p className="text-sm text-gray-500">Assignments</p>
                    <p className="font-medium">
                      {course.completedAssignments}/{course.assignments}
                    </p>
                  </div>
                </div>
              </div>

              <Progress value={course.progress} className="h-2 mb-4" />

              <div className="mt-4">
                <h3 className="font-medium mb-2 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-blue-600" />
                  Subjects Covered
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
                  {course.subjects.map((subject, index) => (
                    <div key={index} className="bg-gray-50 p-2 rounded text-sm">
                      {subject}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-2 mt-4">
                <Button variant="outline" className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Messages
                </Button>
                <Button className="flex items-center gap-2">
                  View Details
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LecturerCoursesPage;
