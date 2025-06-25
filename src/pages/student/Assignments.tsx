import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, Upload } from "lucide-react";

const Assignments = () => {
  // Mock data for assignments
  const assignments = [
    {
      id: 1,
      course: "Introduction to Physics",
      title: "Lab Report 1",
      dueDate: "June 10, 2024",
      status: "Pending",
      description: "Write a detailed report on the pendulum experiment",
      submissionType: "File Upload",
    },
    {
      id: 2,
      course: "Advanced Mathematics",
      title: "Problem Set 3",
      dueDate: "June 12, 2024",
      status: "Submitted",
      description: "Complete problems 1-10 from Chapter 5",
      submissionType: "File Upload",
    },
    {
      id: 3,
      course: "Computer Science",
      title: "Programming Assignment 2",
      dueDate: "June 15, 2024",
      status: "Pending",
      description:
        "Implement a binary search tree with the following operations...",
      submissionType: "File Upload",
    },
  ];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Assignments</h1>
        <p className="text-gray-500 mt-1">
          View and manage your course assignments
        </p>
      </div>

      <div className="grid gap-6">
        {assignments.map((assignment) => (
          <Card key={assignment.id}>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>{assignment.title}</CardTitle>
                  <p className="text-sm text-gray-500 mt-1">
                    {assignment.course}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      assignment.status === "Submitted"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {assignment.status}
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-600">{assignment.description}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>Due: {assignment.dueDate}</span>
                  </div>
                  <div className="flex items-center">
                    <FileText className="h-4 w-4 mr-2" />
                    <span>{assignment.submissionType}</span>
                  </div>
                </div>
                {assignment.status === "Pending" && (
                  <div className="flex justify-end">
                    <Button className="flex items-center">
                      <Upload className="h-4 w-4 mr-2" />
                      Submit Assignment
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Assignments;
