import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Search, Filter } from "lucide-react";

const OnlineCATsPage: React.FC = () => {
  // Mock data for online CATs
  const onlineCATs = [
    {
      id: 1,
      title: "Introduction to Programming CAT 1",
      course: "CS101",
      duration: "1 hour",
      totalMarks: 30,
      status: "Scheduled",
      date: "2024-03-20",
      time: "10:00 AM",
    },
    {
      id: 2,
      title: "Database Systems CAT 2",
      course: "CS201",
      duration: "45 minutes",
      totalMarks: 25,
      status: "Completed",
      date: "2024-03-15",
      time: "2:00 PM",
    },
    {
      id: 3,
      title: "Web Development CAT 1",
      course: "CS301",
      duration: "1 hour 30 minutes",
      totalMarks: 40,
      status: "Draft",
      date: "2024-03-25",
      time: "11:30 AM",
    },
  ];

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Online CATs</h1>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Create New CAT
        </Button>
      </div>

      {/* Search and Filter Bar */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search CATs..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
      </div>

      {/* CATs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {onlineCATs.map((cat) => (
          <Card key={cat.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">{cat.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Course:</span>
                  <span className="font-medium">{cat.course}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Duration:</span>
                  <span className="font-medium">{cat.duration}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Total Marks:</span>
                  <span className="font-medium">{cat.totalMarks}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Date:</span>
                  <span className="font-medium">{cat.date}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Time:</span>
                  <span className="font-medium">{cat.time}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Status:</span>
                  <span
                    className={`font-medium ${
                      cat.status === "Completed"
                        ? "text-green-600"
                        : cat.status === "Scheduled"
                        ? "text-blue-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {cat.status}
                  </span>
                </div>
                <div className="pt-4 flex gap-2">
                  <Button variant="outline" className="flex-1">
                    Edit
                  </Button>
                  <Button variant="outline" className="flex-1">
                    View Results
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OnlineCATsPage;
