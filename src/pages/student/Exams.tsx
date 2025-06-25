import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";

const Exams = () => {
  // Mock data for upcoming exams
  const upcomingExams = [
    {
      id: 1,
      course: "Introduction to Physics",
      code: "PHY101",
      date: "June 15, 2024",
      time: "9:00 AM - 12:00 PM",
      venue: "Main Hall",
      type: "Final Examination",
    },
    {
      id: 2,
      course: "Advanced Mathematics",
      code: "MATH201",
      date: "June 17, 2024",
      time: "2:00 PM - 5:00 PM",
      venue: "Room 302",
      type: "Final Examination",
    },
    {
      id: 3,
      course: "Computer Science",
      code: "CS101",
      date: "June 20, 2024",
      time: "9:00 AM - 12:00 PM",
      venue: "Lab 101",
      type: "Final Examination",
    },
  ];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Upcoming Exams</h1>
        <p className="text-gray-500 mt-1">View your scheduled examinations</p>
      </div>

      <div className="grid gap-6">
        {upcomingExams.map((exam) => (
          <Card key={exam.id}>
            <CardHeader>
              <CardTitle>{exam.course}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">
                      Course Code: {exam.code}
                    </p>
                    <p className="text-sm text-gray-500">Type: {exam.type}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{exam.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{exam.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{exam.venue}</span>
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

export default Exams;
