import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { FileText, Clock } from "lucide-react";

const ExamsPage = () => {
  // Mock exam data
  const exams = [
    {
      id: 1,
      courseCode: "CSC101",
      courseName: "Introduction to Computer Science",
      examDate: "2025-06-10",
      startTime: "09:00 AM",
      duration: "3 hours",
      venue: "Main Hall A",
      status: "upcoming",
    },
    {
      id: 2,
      courseCode: "MAT201",
      courseName: "Advanced Calculus",
      examDate: "2025-06-12",
      startTime: "11:00 AM",
      duration: "2 hours",
      venue: "Science Block Room 5",
      status: "upcoming",
    },
    {
      id: 3,
      courseCode: "ENG102",
      courseName: "Academic Writing",
      examDate: "2025-06-15",
      startTime: "02:00 PM",
      duration: "1.5 hours",
      venue: "Arts Building Hall 2",
      status: "upcoming",
    },
    {
      id: 4,
      courseCode: "PHY104",
      courseName: "Fundamentals of Physics",
      examDate: "2025-06-05",
      startTime: "10:00 AM",
      duration: "3 hours",
      venue: "Science Block Room 10",
      status: "completed",
    },
    {
      id: 5,
      courseCode: "CHEM103",
      courseName: "General Chemistry",
      examDate: "2025-06-03",
      startTime: "09:00 AM",
      duration: "2 hours",
      venue: "Main Hall B",
      status: "completed",
    },
  ];

  const currentDate = new Date();

  // Group exams by status
  const upcomingExams = exams.filter(
    (exam) => new Date(exam.examDate) >= currentDate
  );
  const completedExams = exams.filter(
    (exam) => new Date(exam.examDate) < currentDate
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Examination Schedule</h1>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center">
            <FileText className="mr-2 h-5 w-5" />
            Upcoming Examinations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Course Code</TableHead>
                <TableHead>Course Name</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Venue</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {upcomingExams.map((exam) => (
                <TableRow key={exam.id}>
                  <TableCell className="font-medium">
                    {exam.courseCode}
                  </TableCell>
                  <TableCell>{exam.courseName}</TableCell>
                  <TableCell>
                    {new Date(exam.examDate).toLocaleDateString()}
                  </TableCell>
                  <TableCell>{exam.startTime}</TableCell>
                  <TableCell>{exam.duration}</TableCell>
                  <TableCell>{exam.venue}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className="bg-blue-100 text-blue-800 border-blue-200"
                    >
                      Upcoming
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
              {upcomingExams.length === 0 && (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-4">
                    No upcoming exams
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Clock className="mr-2 h-5 w-5" />
            Past Examinations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Course Code</TableHead>
                <TableHead>Course Name</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Venue</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {completedExams.map((exam) => (
                <TableRow key={exam.id}>
                  <TableCell className="font-medium">
                    {exam.courseCode}
                  </TableCell>
                  <TableCell>{exam.courseName}</TableCell>
                  <TableCell>
                    {new Date(exam.examDate).toLocaleDateString()}
                  </TableCell>
                  <TableCell>{exam.startTime}</TableCell>
                  <TableCell>{exam.duration}</TableCell>
                  <TableCell>{exam.venue}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className="bg-gray-100 text-gray-800 border-gray-200"
                    >
                      Completed
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
              {completedExams.length === 0 && (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-4">
                    No completed exams
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExamsPage;
