import React, { useState } from "react";
import {
  FileText,
  Plus,
  Calendar,
  Users,
  Clock,
  CheckCircle,
  AlertCircle,
  Edit,
  Trash2,
  Save,
  X,
} from "lucide-react";

interface Question {
  id: number;
  text: string;
  type: "multiple-choice" | "essay" | "programming";
  options?: string[];
  correctAnswer?: string;
  points: number;
}

const AssignmentManagement: React.FC = () => {
  const [isCreatingAssignment, setIsCreatingAssignment] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [newQuestion, setNewQuestion] = useState<Partial<Question>>({
    type: "multiple-choice",
    points: 10,
  });

  const assignments = [
    {
      id: 1,
      title: "Python Programming Basics",
      subject: "Introduction to Programming",
      code: "CS101",
      dueDate: "2024-10-15",
      dueTime: "11:59 PM",
      totalStudents: 45,
      submissions: 38,
      status: "Active",
      type: "Programming",
      description:
        "Implement basic Python programs covering variables, loops, and functions.",
      submissionsList: [
        {
          id: 1,
          student: "John Smith",
          submittedAt: "2024-10-14 15:30",
          status: "Submitted",
          grade: null,
        },
        {
          id: 2,
          student: "Emma Johnson",
          submittedAt: "2024-10-14 16:45",
          status: "Graded",
          grade: "A",
        },
        {
          id: 3,
          student: "Michael Brown",
          submittedAt: "2024-10-14 17:20",
          status: "Late",
          grade: null,
        },
      ],
    },
    {
      id: 2,
      title: "Data Structures Implementation",
      subject: "Data Structures",
      code: "CS201",
      dueDate: "2024-10-20",
      dueTime: "11:59 PM",
      totalStudents: 38,
      submissions: 25,
      status: "Active",
      type: "Programming",
      description:
        "Implement and test various data structures including linked lists and trees.",
      submissionsList: [
        {
          id: 1,
          student: "Sarah Wilson",
          submittedAt: "2024-10-19 14:15",
          status: "Submitted",
          grade: null,
        },
        {
          id: 2,
          student: "David Lee",
          submittedAt: "2024-10-19 15:30",
          status: "Graded",
          grade: "B+",
        },
      ],
    },
  ];

  const addQuestion = () => {
    if (newQuestion.text && newQuestion.type) {
      setQuestions([
        ...questions,
        {
          id: questions.length + 1,
          text: newQuestion.text,
          type: newQuestion.type as Question["type"],
          options: newQuestion.options,
          correctAnswer: newQuestion.correctAnswer,
          points: newQuestion.points || 10,
        },
      ]);
      setNewQuestion({ type: "multiple-choice", points: 10 });
    }
  };

  const removeQuestion = (id: number) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <FileText className="w-8 h-8 text-blue-600" />
          <h1 className="text-2xl font-bold">Assignment Management</h1>
        </div>
        <button
          onClick={() => setIsCreatingAssignment(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <Plus className="w-5 h-5" />
          Create New Assignment
        </button>
      </div>

      {isCreatingAssignment && (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Create New Assignment</h2>
            <button
              onClick={() => setIsCreatingAssignment(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Assignment Title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Subject Code"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                rows={3}
                placeholder="Assignment Description"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Due Date
                </label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Due Time
                </label>
                <input
                  type="time"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Assignment Type
              </label>
              <select className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500">
                <option value="regular">Regular Assignment</option>
                <option value="online-exam">Online Exam</option>
                <option value="quiz">Quiz</option>
              </select>
            </div>

            {/* Questions Section */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold mb-4">Questions</h3>

              {questions.map((question) => (
                <div
                  key={question.id}
                  className="bg-gray-50 p-4 rounded-lg mb-4"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <p className="font-medium">{question.text}</p>
                      <p className="text-sm text-gray-500">
                        Type: {question.type} | Points: {question.points}
                      </p>
                    </div>
                    <button
                      onClick={() => removeQuestion(question.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}

              <div className="bg-white border rounded-lg p-4">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Question Text
                    </label>
                    <textarea
                      value={newQuestion.text || ""}
                      onChange={(e) =>
                        setNewQuestion({ ...newQuestion, text: e.target.value })
                      }
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      rows={2}
                      placeholder="Enter your question"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Question Type
                      </label>
                      <select
                        value={newQuestion.type}
                        onChange={(e) =>
                          setNewQuestion({
                            ...newQuestion,
                            type: e.target.value as Question["type"],
                          })
                        }
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="multiple-choice">Multiple Choice</option>
                        <option value="essay">Essay</option>
                        <option value="programming">Programming</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Points
                      </label>
                      <input
                        type="number"
                        value={newQuestion.points}
                        onChange={(e) =>
                          setNewQuestion({
                            ...newQuestion,
                            points: parseInt(e.target.value),
                          })
                        }
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        min="1"
                      />
                    </div>
                  </div>

                  {newQuestion.type === "multiple-choice" && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Options
                      </label>
                      <div className="space-y-2">
                        {["A", "B", "C", "D"].map((option) => (
                          <div key={option} className="flex items-center gap-2">
                            <input
                              type="text"
                              className="flex-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                              placeholder={`Option ${option}`}
                            />
                            <input
                              type="radio"
                              name="correct-answer"
                              className="w-4 h-4 text-blue-600"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <button
                    onClick={addQuestion}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    <Plus className="w-5 h-5" />
                    Add Question
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsCreatingAssignment(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-700"
              >
                Cancel
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <Save className="w-5 h-5" />
                Save Assignment
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid gap-6">
        {assignments.map((assignment) => (
          <div
            key={assignment.id}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold">{assignment.title}</h2>
                <p className="text-gray-500">
                  {assignment.subject} ({assignment.code})
                </p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  assignment.status === "Active"
                    ? "bg-green-100 text-green-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {assignment.status}
              </span>
            </div>

            <p className="text-gray-600 mb-4">{assignment.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-500">Due Date & Time</p>
                  <p className="font-medium">
                    {assignment.dueDate} at {assignment.dueTime}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-500">Submissions</p>
                  <p className="font-medium">
                    {assignment.submissions} / {assignment.totalStudents}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-500">Type</p>
                  <p className="font-medium">{assignment.type}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-500">Time Remaining</p>
                  <p className="font-medium">3 days left</p>
                </div>
              </div>
            </div>

            {/* Submissions List */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4">Submissions</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                        Student
                      </th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                        Submitted At
                      </th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                        Status
                      </th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                        Grade
                      </th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {assignment.submissionsList.map((submission) => (
                      <tr key={submission.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">
                          {submission.student}
                        </td>
                        <td className="px-4 py-3 text-sm">
                          {submission.submittedAt}
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              submission.status === "Graded"
                                ? "bg-green-100 text-green-800"
                                : submission.status === "Late"
                                ? "bg-red-100 text-red-800"
                                : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            {submission.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm">
                          {submission.grade || "-"}
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex gap-2">
                            <button className="text-blue-600 hover:text-blue-700 text-sm">
                              View
                            </button>
                            <button className="text-blue-600 hover:text-blue-700 text-sm">
                              Grade
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button className="px-4 py-2 text-blue-600 hover:text-blue-700">
                Edit Assignment
              </button>
              <button className="px-4 py-2 text-blue-600 hover:text-blue-700">
                Download All Submissions
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Publish Grades
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssignmentManagement;
