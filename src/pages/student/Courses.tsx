import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { courses, students } from "@/utils/mockData";
import { useAuth } from "@/contexts/AuthContext";

const Courses = () => {
  const { user } = useAuth();

  // Get student profile
  const student = students.find((s) => s.id === user?.id) || students[0];

  // Get student's courses
  const studentCourses = courses.filter((c) =>
    student.enrolledCourses?.includes(c.code)
  );

  // Get course progress data
  const coursesData = studentCourses.map((course) => {
    // Mock data for progress
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
      <div className="mb-6">
        <h1 className="text-3xl font-bold">My Courses</h1>
        <p className="text-gray-500 mt-1">
          View and manage your enrolled courses
        </p>
      </div>

      <div className="grid gap-6">
        {coursesData.map((course) => (
          <Card key={course.id}>
            <CardHeader>
              <CardTitle>{course.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">
                      Course Code: {course.code}
                    </p>
                    <p className="text-sm text-gray-500">
                      Instructor: {course.instructor}
                    </p>
                  </div>
                  <div className="w-48">
                    <p className="text-sm mb-2">Course Progress</p>
                    <Progress value={course.progress} className="w-full" />
                    <p className="text-sm text-right mt-1">
                      {course.progress}%
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-4 border-t">
                  <div>
                    <p className="text-sm">
                      Assignments: {course.completed}/{course.assignments}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm">Next Class: {course.schedule}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Courses;
