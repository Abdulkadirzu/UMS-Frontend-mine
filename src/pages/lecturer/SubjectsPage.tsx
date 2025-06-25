import React from "react";
import { BookOpen, Upload, FileText, GraduationCap, Plus } from "lucide-react";

const SubjectsPage: React.FC = () => {
  const subjects = [
    {
      id: 1,
      code: "CS101",
      name: "Introduction to Programming",
      course: "Computer Science",
      materials: [
        {
          id: 1,
          title: "Python Basics",
          type: "Lecture Notes",
          date: "2024-10-01",
        },
        {
          id: 2,
          title: "Control Structures",
          type: "Slides",
          date: "2024-10-05",
        },
      ],
      assignments: [
        {
          id: 1,
          title: "Basic Python Programs",
          dueDate: "2024-10-15",
          submissions: 38,
        },
      ],
      exams: [
        {
          id: 1,
          title: "Midterm Exam",
          date: "2024-11-01",
          duration: "2 hours",
        },
      ],
    },
    {
      id: 2,
      code: "CS201",
      name: "Data Structures",
      course: "Computer Science",
      materials: [
        {
          id: 1,
          title: "Arrays and Lists",
          type: "Lecture Notes",
          date: "2024-10-02",
        },
      ],
      assignments: [
        {
          id: 1,
          title: "Linked List Implementation",
          dueDate: "2024-10-20",
          submissions: 25,
        },
      ],
      exams: [],
    },
  ];

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <BookOpen className="w-8 h-8 text-blue-600" />
          <h1 className="text-2xl font-bold">Subjects</h1>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Plus className="w-5 h-5" />
          Add New Subject
        </button>
      </div>

      <div className="grid gap-6">
        {subjects.map((subject) => (
          <div key={subject.id} className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold">{subject.name}</h2>
                <p className="text-gray-500">
                  Code: {subject.code} | Course: {subject.course}
                </p>
              </div>
            </div>

            {/* Learning Materials Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  Learning Materials
                </h3>
                <button className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700">
                  <Upload className="w-4 h-4" />
                  Upload Material
                </button>
              </div>
              <div className="grid gap-2">
                {subject.materials.map((material) => (
                  <div
                    key={material.id}
                    className="flex justify-between items-center bg-gray-50 p-3 rounded"
                  >
                    <div>
                      <p className="font-medium">{material.title}</p>
                      <p className="text-sm text-gray-500">
                        {material.type} • {material.date}
                      </p>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700">
                      Download
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Assignments Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  Assignments
                </h3>
                <button className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700">
                  <Plus className="w-4 h-4" />
                  Create Assignment
                </button>
              </div>
              <div className="grid gap-2">
                {subject.assignments.map((assignment) => (
                  <div
                    key={assignment.id}
                    className="flex justify-between items-center bg-gray-50 p-3 rounded"
                  >
                    <div>
                      <p className="font-medium">{assignment.title}</p>
                      <p className="text-sm text-gray-500">
                        Due: {assignment.dueDate} • {assignment.submissions}{" "}
                        submissions
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button className="text-blue-600 hover:text-blue-700">
                        View
                      </button>
                      <button className="text-blue-600 hover:text-blue-700">
                        Edit
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Exams Section */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-blue-600" />
                  Exams
                </h3>
                <button className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700">
                  <Plus className="w-4 h-4" />
                  Create Exam
                </button>
              </div>
              <div className="grid gap-2">
                {subject.exams.length > 0 ? (
                  subject.exams.map((exam) => (
                    <div
                      key={exam.id}
                      className="flex justify-between items-center bg-gray-50 p-3 rounded"
                    >
                      <div>
                        <p className="font-medium">{exam.title}</p>
                        <p className="text-sm text-gray-500">
                          Date: {exam.date} • Duration: {exam.duration}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <button className="text-blue-600 hover:text-blue-700">
                          View
                        </button>
                        <button className="text-blue-600 hover:text-blue-700">
                          Edit
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-center py-2">
                    No exams scheduled
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectsPage;
