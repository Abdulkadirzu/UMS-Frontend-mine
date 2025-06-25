import React, { useState } from "react";
import {
  FileText,
  Plus,
  Calendar,
  Clock,
  Users,
  Edit,
  Trash2,
  Save,
  X,
  Eye,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

interface Question {
  id: number;
  text: string;
  type: "multiple-choice" | "true-false" | "short-answer";
  options?: string[];
  correctAnswer?: string;
  points: number;
}

interface CAT {
  id: number;
  title: string;
  subject: string;
  code: string;
  date: string;
  time: string;
  duration: number;
  totalStudents: number;
  status: "scheduled" | "active" | "completed";
  questions: Question[];
}

const OnlineCATsPage: React.FC = () => {
  const [isCreatingCAT, setIsCreatingCAT] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [newQuestion, setNewQuestion] = useState<Partial<Question>>({
    type: "multiple-choice",
    points: 5,
  });

  const cats: CAT[] = [
    {
      id: 1,
      title: "Introduction to Programming CAT 1",
      subject: "Programming Fundamentals",
      code: "CS101",
      date: "2024-10-20",
      time: "10:00 AM",
      duration: 60,
      totalStudents: 45,
      status: "scheduled",
      questions: [
        {
          id: 1,
          text: "What is a variable in programming?",
          type: "multiple-choice",
          options: [
            "A container for storing data",
            "A type of loop",
            "A function",
            "A comment",
          ],
          correctAnswer: "A container for storing data",
          points: 5,
        },
      ],
    },
    {
      id: 2,
      title: "Data Structures CAT 1",
      subject: "Data Structures",
      code: "CS201",
      date: "2024-10-25",
      time: "2:00 PM",
      duration: 45,
      totalStudents: 38,
      status: "scheduled",
      questions: [],
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
          points: newQuestion.points || 5,
        },
      ]);
      setNewQuestion({ type: "multiple-choice", points: 5 });
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
          <h1 className="text-2xl font-bold">Online CATs Management</h1>
        </div>
        <button
          onClick={() => setIsCreatingCAT(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <Plus className="w-5 h-5" />
          Create New CAT
        </button>
      </div>

      {isCreatingCAT && (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Create New CAT</h2>
            <button
              onClick={() => setIsCreatingCAT(false)}
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
                  placeholder="CAT Title"
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

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date
                </label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Time
                </label>
                <input
                  type="time"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Duration (minutes)
                </label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  min="15"
                  max="180"
                />
              </div>
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
                        <option value="true-false">True/False</option>
                        <option value="short-answer">Short Answer</option>
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
                onClick={() => setIsCreatingCAT(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-700"
              >
                Cancel
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <Save className="w-5 h-5" />
                Save CAT
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Existing CATs List */}
      <div className="grid gap-6">
        {cats.map((cat) => (
          <div key={cat.id} className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold">{cat.title}</h2>
                <p className="text-gray-500">
                  {cat.subject} ({cat.code})
                </p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  cat.status === "scheduled"
                    ? "bg-blue-100 text-blue-800"
                    : cat.status === "active"
                    ? "bg-green-100 text-green-800"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {cat.status.charAt(0).toUpperCase() + cat.status.slice(1)}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-500">Date & Time</p>
                  <p className="font-medium">
                    {cat.date} at {cat.time}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-500">Duration</p>
                  <p className="font-medium">{cat.duration} minutes</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-500">Total Students</p>
                  <p className="font-medium">{cat.totalStudents}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:text-blue-700">
                <Eye className="w-5 h-5" />
                Preview
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:text-blue-700">
                <Edit className="w-5 h-5" />
                Edit
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <CheckCircle className="w-5 h-5" />
                Activate
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnlineCATsPage;
