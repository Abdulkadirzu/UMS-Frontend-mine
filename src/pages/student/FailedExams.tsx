import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

const FailedExams = () => {
  // Mock data for failed exams
  const failedExams = [
    {
      id: 1,
      course: "Advanced Calculus",
      code: "MATH301",
      semester: "Semester 1, 2024",
      score: 45,
      retakeDate: "August 15, 2024",
      status: "Eligible for Retake",
    },
    {
      id: 2,
      course: "Organic Chemistry",
      code: "CHEM201",
      semester: "Semester 2, 2023",
      score: 38,
      retakeDate: "August 20, 2024",
      status: "Eligible for Retake",
    },
  ];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Failed Exams</h1>
        <p className="text-gray-500 mt-1">
          View and manage your failed examinations
        </p>
      </div>

      {failedExams.length === 0 ? (
        <Card>
          <CardContent className="p-6 text-center">
            <AlertTriangle className="h-12 w-12 mx-auto text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">No Failed Exams</h3>
            <p className="text-gray-500">Keep up the good work!</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6">
          {failedExams.map((exam) => (
            <Card key={exam.id}>
              <CardHeader>
                <CardTitle>{exam.course}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Course Code</p>
                      <p className="font-medium">{exam.code}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Semester</p>
                      <p className="font-medium">{exam.semester}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Score</p>
                      <p className="font-medium text-red-500">{exam.score}%</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Status</p>
                      <p className="font-medium text-green-500">
                        {exam.status}
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-gray-500 mb-2">Retake Date</p>
                    <p className="font-medium">{exam.retakeDate}</p>
                  </div>
                  <div className="flex justify-end">
                    <Button variant="outline">Register for Retake</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default FailedExams;
