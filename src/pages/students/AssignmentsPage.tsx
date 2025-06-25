import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  ClipboardList,
  Clock,
  Upload,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { courses, students } from "@/utils/mockData";
import { useAuth } from "@/contexts/AuthContext";
import { Badge } from "@/components/ui/badge";

const AssignmentsPage = () => {
  const { user } = useAuth();

  // Get student's courses
  const student = students.find((s) => s.email === user?.email);
  const studentCourses = courses.filter((c) =>
    student?.enrolledCourses?.includes(c.code)
  );

  // Sample assignments data
  const assignmentsData = [
    {
      id: 1,
      courseCode: "CS101",
      courseName: "Introduction to Programming",
      assignments: [
        {
          id: 1,
          title: "Basic Python Programming",
          description: "Create a simple calculator program using Python",
          dueDate: "2024-03-25",
          status: "pending",
          type: "Programming",
          weight: 15,
          instructions:
            "Implement a calculator that can perform basic arithmetic operations",
        },
        {
          id: 2,
          title: "Data Structures Quiz",
          description: "Multiple choice quiz on arrays and linked lists",
          dueDate: "2024-03-20",
          status: "completed",
          type: "Quiz",
          weight: 10,
          score: 85,
        },
        {
          id: 3,
          title: "Object-Oriented Programming Project",
          description: "Design a simple banking system using OOP concepts",
          dueDate: "2024-04-01",
          status: "pending",
          type: "Project",
          weight: 25,
          instructions: "Create classes for Account, Customer, and Transaction",
        },
      ],
    },
    {
      id: 2,
      courseCode: "MATH203",
      courseName: "Advanced Calculus",
      assignments: [
        {
          id: 1,
          title: "Integration Techniques",
          description: "Practice problems on various integration methods",
          dueDate: "2024-03-22",
          status: "completed",
          type: "Problem Set",
          weight: 20,
          score: 92,
        },
        {
          id: 2,
          title: "Series and Sequences",
          description: "Analysis of infinite series and convergence",
          dueDate: "2024-03-28",
          status: "pending",
          type: "Problem Set",
          weight: 20,
          instructions: "Solve problems on Taylor series and power series",
        },
      ],
    },
    {
      id: 3,
      courseCode: "PHY101",
      courseName: "Physics Fundamentals",
      assignments: [
        {
          id: 1,
          title: "Lab Report: Motion Analysis",
          description:
            "Write a report on the motion experiment conducted in lab",
          dueDate: "2024-03-18",
          status: "completed",
          type: "Lab Report",
          weight: 15,
          score: 88,
        },
        {
          id: 2,
          title: "Wave Properties Project",
          description: "Research and presentation on wave properties",
          dueDate: "2024-04-05",
          status: "pending",
          type: "Project",
          weight: 25,
          instructions:
            "Create a presentation on wave properties and their applications",
        },
      ],
    },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Assignments</h1>
          <p className="text-gray-500 mt-1">
            View and manage your course assignments
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {assignmentsData.map((course) => (
          <Card key={course.id}>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold">{course.courseName}</h3>
                  <p className="text-sm text-gray-500">{course.courseCode}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">
                    {
                      course.assignments.filter((a) => a.status === "completed")
                        .length
                    }
                    /{course.assignments.length} Completed
                  </span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Progress
                  value={
                    (course.assignments.filter((a) => a.status === "completed")
                      .length /
                      course.assignments.length) *
                    100
                  }
                  className="h-2"
                />
                <div className="space-y-4">
                  {course.assignments.map((assignment) => (
                    <div
                      key={assignment.id}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
                        <ClipboardList className="h-5 w-5 text-gray-500" />
                        <div>
                          <div className="flex items-center space-x-2">
                            <h4 className="font-medium">{assignment.title}</h4>
                            <Badge variant="outline" className="text-xs">
                              {assignment.type}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {assignment.weight}%
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">
                            {assignment.description}
                          </p>
                          <div className="flex items-center space-x-2 text-sm text-gray-500 mt-2">
                            <Clock className="h-4 w-4" />
                            <span>Due: {assignment.dueDate}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        {assignment.status === "completed" ? (
                          <div className="flex items-center space-x-2 text-green-600">
                            <CheckCircle2 className="h-5 w-5" />
                            <span>Score: {assignment.score}%</span>
                          </div>
                        ) : (
                          <div className="flex items-center space-x-4">
                            {new Date(assignment.dueDate) < new Date() ? (
                              <div className="flex items-center space-x-2 text-red-600">
                                <AlertCircle className="h-5 w-5" />
                                <span>Overdue</span>
                              </div>
                            ) : null}
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex items-center"
                            >
                              <Upload className="h-4 w-4 mr-2" />
                              Submit
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AssignmentsPage;
