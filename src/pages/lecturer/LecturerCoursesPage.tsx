import React from "react";
import { BookOpen, GraduationCap } from "lucide-react";

const LecturerCoursesPage: React.FC = () => {
  const courses = [
    {
      id: 1,
      code: "CS101",
      name: "Introduction to Programming",
      semester: "Fall 2024",
      students: 45,
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
      subjects: [
        "SQL",
        "Database Design",
        "Normalization",
        "Transactions",
        "Indexing",
      ],
    },
  ];

  return (
    <div className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <BookOpen className="w-8 h-8 text-blue-600" />
        <h1 className="text-2xl font-bold">My Courses</h1>
      </div>

      <div className="grid gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow-lg p-6">
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

            <div className="mt-4">
              <h3 className="font-medium mb-2 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-blue-600" />
                Subjects Covered
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {course.subjects.map((subject, index) => (
                  <div key={index} className="bg-gray-50 p-2 rounded text-sm">
                    {subject}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LecturerCoursesPage;
