import React, { useState } from "react";
import SidebarLayout from "@/components/layout/SidebarLayout";

// Mock data for results
const mockResults = {
  Y1S1: [
    {
      courseCode: "CSC101",
      courseName: "Introduction to Computer Science",
      date: "6/10/2025",
      time: "09:00 AM",
      duration: "3 hours",
      venue: "Main Hall A",
      status: "Upcoming",
    },
    {
      courseCode: "MAT201",
      courseName: "Advanced Calculus",
      date: "6/12/2025",
      time: "11:00 AM",
      duration: "2 hours",
      venue: "Science Block Room 5",
      status: "Upcoming",
    },
    {
      courseCode: "ENG102",
      courseName: "Academic Writing",
      date: "6/15/2025",
      time: "02:00 PM",
      duration: "1.5 hours",
      venue: "Arts Building Hall 2",
      status: "Upcoming",
    },
    {
      courseCode: "PHY104",
      courseName: "Fundamentals of Physics",
      date: "6/5/2025",
      time: "10:00 AM",
      duration: "3 hours",
      venue: "Science Block Room 10",
      status: "Upcoming",
    },
  ],
  Y1S2: [],
  Y2S1: [],
};

type StageKey = keyof typeof mockResults;
type Result = {
  courseCode: string;
  courseName: string;
  date: string;
  time: string;
  duration: string;
  venue: string;
  status: string;
};

const yearSemOptions = [
  { value: "Y1S1", label: "Year 1, Semester 1" },
  { value: "Y1S2", label: "Year 1, Semester 2" },
  { value: "Y2S1", label: "Year 2, Semester 1" },
];

const ProvisionalResultsPage = () => {
  const [selectedStage, setSelectedStage] = useState<StageKey>(
    yearSemOptions[0].value as StageKey
  );
  const [results, setResults] = useState<Result[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleViewResults = () => {
    setResults(mockResults[selectedStage] || []);
    setShowResults(true);
  };

  return (
    <SidebarLayout>
      <div className="p-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Provisional Results</h1>
        <div className="mb-6 bg-blue-500 p-4 rounded">
          <label className="block text-white font-semibold mb-2">
            Choose Year & Semester
          </label>
          <select
            className="border rounded px-3 py-2 w-64"
            value={selectedStage}
            onChange={(e) => setSelectedStage(e.target.value as StageKey)}
          >
            {yearSemOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <button
            className="ml-4 bg-green-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleViewResults}
          >
            View Results
          </button>
        </div>
        {showResults && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">
              Results for{" "}
              {yearSemOptions.find((opt) => opt.value === selectedStage)?.label}
            </h2>
            {results.length > 0 ? (
              <table className="min-w-full border border-gray-300">
                <thead>
                  <tr>
                    <th className="border px-4 py-2">Course Code</th>
                    <th className="border px-4 py-2">Course Name</th>
                    <th className="border px-4 py-2">Date</th>
                    <th className="border px-4 py-2">Time</th>
                    <th className="border px-4 py-2">Duration</th>
                    <th className="border px-4 py-2">Venue</th>
                    <th className="border px-4 py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((res, idx) => (
                    <tr key={idx}>
                      <td className="border px-4 py-2">{res.courseCode}</td>
                      <td className="border px-4 py-2">{res.courseName}</td>
                      <td className="border px-4 py-2">{res.date}</td>
                      <td className="border px-4 py-2">{res.time}</td>
                      <td className="border px-4 py-2">{res.duration}</td>
                      <td className="border px-4 py-2">{res.venue}</td>
                      <td className="border px-4 py-2">{res.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No results found for this stage.</p>
            )}
          </div>
        )}
      </div>
    </SidebarLayout>
  );
};

export default ProvisionalResultsPage;
