import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Search } from "lucide-react";
import { courses as mockCourses } from "../../utils/mockData";
import { Course } from "../../types";
import { Checkbox } from "../../components/ui/checkbox";

const UnitRegistration = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedUnits, setSelectedUnits] = useState<string[]>([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");

  useEffect(() => {
    // Simulate fetching courses - replace with actual API call later
    setCourses(mockCourses);
    setLoading(false);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
  };

  const handleUnitSelection = (unitId: string) => {
    setSelectedUnits((prev) =>
      prev.includes(unitId)
        ? prev.filter((id) => id !== unitId)
        : [...prev, unitId]
    );
  };

  const handleRegistration = () => {
    // Implement registration logic
    console.log("Registering units:", selectedUnits);
  };

  return (
      <div className="container mx-auto py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Unit Registration</h1>
          <form onSubmit={handleSearch} className="flex gap-2">
            <Input
              type="search"
              placeholder="Search units..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-64"
            />
            <Button type="submit">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </form>
        </div>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Course</label>
                <select
                  className="w-full p-2 border rounded"
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                >
                  <option value="">Select Course</option>
                  {courses.map((course) => (
                    <option key={course.id} value={course.id}>
                      {course.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Year</label>
                <select
                  className="w-full p-2 border rounded"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                >
                  <option value="">Select Year</option>
                  <option value="1">Year 1</option>
                  <option value="2">Year 2</option>
                  <option value="3">Year 3</option>
                  <option value="4">Year 4</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Semester
                </label>
                <select
                  className="w-full p-2 border rounded"
                  value={selectedSemester}
                  onChange={(e) => setSelectedSemester(e.target.value)}
                >
                  <option value="">Select Semester</option>
                  <option value="1">Semester 1</option>
                  <option value="2">Semester 2</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Available Units</CardTitle>
            <CardDescription>
              Select the units you want to register for
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <p>Loading units...</p>
            ) : courses.length === 0 ? (
              <p>No units found.</p>
            ) : (
              <div className="space-y-4">
                {courses.map((course) => (
                  <div
                    key={course.id}
                    className="flex items-center space-x-4 p-4 border rounded"
                  >
                    <Checkbox
                      id={String(course.id)}
                      checked={selectedUnits.includes(String(course.id))}
                      onCheckedChange={() =>
                        handleUnitSelection(String(course.id))
                      }
                    />
                    <div className="flex-1">
                      <h3 className="font-medium">{course.name}</h3>
                      <p className="text-sm text-gray-600">{course.code}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <div className="mt-6 flex justify-end">
          <Button
            onClick={handleRegistration}
            disabled={selectedUnits.length === 0}
          >
            Register Selected Units
          </Button>
        </div>
      </div>
  );
};

export default UnitRegistration;
