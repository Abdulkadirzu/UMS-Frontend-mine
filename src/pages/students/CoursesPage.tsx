import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, MessageSquare } from "lucide-react";
import { courses } from "@/utils/mockData";
import { useAuth } from "@/contexts/AuthContext";

const CoursesPage = () => {
  const { user } = useAuth();

  // Get student's courses
  const studentCourses = courses.filter((c) =>
    c.enrolledStudents?.includes(user?.id || "")
  );

  // Mock data for course progress
  const coursesData = studentCourses.map((course) => {
    const progress = Math.floor(Math.random() * 100);
    const assignments = Math.floor(Math.random() * 10) + 5;
    const completed = Math.floor(Math.random() * assignments);
    return {
      ...course,
      progress,
      assignments,
      completed,
    };
  });

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Courses & Subjects</h1>
          <p className="text-gray-500 mt-1">
            View and manage your enrolled courses
          </p>
        </div>
        <Button variant="outline" className="flex items-center">
          <BookOpen className="h-4 w-4 mr-2" />
          Register New Course
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {coursesData.map((course) => (
          <Card key={course.id}>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold">{course.name}</h3>
                  <p className="text-sm text-gray-500">{course.code}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <MessageSquare className="h-4 w-4" />
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    <span>
                      {course.completed}/{course.assignments} Assignments
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>Next class: 10:00 AM</span>
                  </div>
                </div>
                <Progress value={course.progress} className="h-2" />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{course.progress}% Complete</span>
                  <span>
                    {course.completed}/{course.assignments} Tasks
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
