import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const AddCourse = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          onClick={() => navigate("/course-management")}
          className="gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Courses
        </Button>
        <h1 className="text-3xl font-bold">Add New Course</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Course Information</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Course Code</label>
                <Input placeholder="e.g., CS101" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Course Name</label>
                <Input
                  placeholder="e.g., Introduction to Computer Science"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Category</label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="computer-science">
                      Computer Science
                    </SelectItem>
                    <SelectItem value="mathematics">Mathematics</SelectItem>
                    <SelectItem value="physics">Physics</SelectItem>
                    <SelectItem value="engineering">Engineering</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Credits</label>
                <Input
                  type="number"
                  min="1"
                  max="6"
                  placeholder="e.g., 3"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Description</label>
              <Textarea
                placeholder="Enter course description..."
                className="min-h-[100px]"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Prerequisites</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select prerequisites" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  <SelectItem value="cs101">CS101</SelectItem>
                  <SelectItem value="math101">MATH101</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex justify-end gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate("/course-management")}
              >
                Cancel
              </Button>
              <Button type="submit">Create Course</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddCourse;
