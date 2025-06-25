import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Results = () => {
  // Mock data for results
  const results = [
    {
      id: 1,
      semester: "Semester 1, 2024",
      courses: [
        {
          code: "PHY101",
          name: "Introduction to Physics",
          grade: "A",
          score: 85,
        },
        {
          code: "MATH201",
          name: "Advanced Mathematics",
          grade: "B+",
          score: 78,
        },
        { code: "CS101", name: "Computer Science", grade: "A-", score: 82 },
      ],
    },
    {
      id: 2,
      semester: "Semester 2, 2023",
      courses: [
        { code: "ENG101", name: "English Composition", grade: "A", score: 88 },
        { code: "HIST101", name: "World History", grade: "B", score: 75 },
        { code: "CHEM101", name: "General Chemistry", grade: "A-", score: 83 },
      ],
    },
  ];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Academic Results</h1>
        <p className="text-gray-500 mt-1">View your academic performance</p>
      </div>

      <div className="space-y-6">
        {results.map((semester) => (
          <Card key={semester.id}>
            <CardHeader>
              <CardTitle>{semester.semester}</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Course Code</TableHead>
                    <TableHead>Course Name</TableHead>
                    <TableHead>Grade</TableHead>
                    <TableHead>Score</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {semester.courses.map((course) => (
                    <TableRow key={course.code}>
                      <TableCell>{course.code}</TableCell>
                      <TableCell>{course.name}</TableCell>
                      <TableCell>{course.grade}</TableCell>
                      <TableCell>{course.score}%</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Results;
