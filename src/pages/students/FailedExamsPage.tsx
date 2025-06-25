import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, FileText, Calendar } from "lucide-react";

const FailedExamsPage = () => {
  // Mock data for failed exams
  const failedExams = [
    {
      id: 1,
      course: "Introduction to Physics",
      code: "PHY101",
      examDate: "2024-03-15",
      score: 45,
      passingScore: 50,
      retakeDate: "2024-04-15",
    },
    {
      id: 2,
      course: "Advanced Mathematics",
      code: "MATH201",
      examDate: "2024-03-20",
      score: 48,
      passingScore: 50,
      retakeDate: "2024-04-20",
    },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Failed Exams</h1>
          <p className="text-gray-500 mt-1">
            View and manage your failed examinations
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {failedExams.map((exam) => (
          <Card key={exam.id} className="border-red-100">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold">{exam.course}</h3>
                  <p className="text-sm text-gray-500">{exam.code}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" className="text-red-600">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Failed
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <FileText className="h-4 w-4 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">Score</p>
                      <p className="font-medium">
                        {exam.score}/{exam.passingScore}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">Exam Date</p>
                      <p className="font-medium">{exam.examDate}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-sm text-red-600">
                    Retake scheduled for: {exam.retakeDate}
                  </p>
                </div>
                <Button className="w-full">Register for Retake</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FailedExamsPage;
