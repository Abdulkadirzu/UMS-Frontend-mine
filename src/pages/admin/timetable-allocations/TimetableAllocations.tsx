import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Plus, Edit2, Trash2 } from "lucide-react";

interface Allocation {
  id: string;
  courseUnit: string;
  lecturer: string;
  department: string;
  semester: string;
  academicYear: string;
  status: "active" | "pending" | "completed";
}

// Mock data for dropdowns
const courseUnits = [
  "Introduction to Programming",
  "Database Management",
  "Web Development",
  "Data Structures",
  "Computer Networks",
  "Software Engineering",
  "Operating Systems",
  "Artificial Intelligence",
];

const lecturers = [
  "Dr. John Smith",
  "Prof. Sarah Johnson",
  "Dr. Michael Brown",
  "Prof. Emily Davis",
  "Dr. Robert Wilson",
  "Prof. Lisa Anderson",
];

const departments = [
  "Computer Science",
  "Information Technology",
  "Software Engineering",
  "Data Science",
  "Cybersecurity",
  "Computer Engineering",
];

const academicYears = ["2023/2024", "2024/2025", "2025/2026", "2026/2027"];

const TimetableAllocations = () => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [allocations, setAllocations] = useState<Allocation[]>([
    {
      id: "1",
      courseUnit: "Introduction to Programming",
      lecturer: "Dr. John Smith",
      department: "Computer Science",
      semester: "Semester 1",
      academicYear: "2024/2025",
      status: "active",
    },
    {
      id: "2",
      courseUnit: "Database Management",
      lecturer: "Prof. Sarah Johnson",
      department: "Information Technology",
      semester: "Semester 1",
      academicYear: "2024/2025",
      status: "active",
    },
  ]);

  const [formData, setFormData] = useState({
    courseUnit: "",
    lecturer: "",
    department: "",
    semester: "",
    academicYear: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newAllocation: Allocation = {
      id: Date.now().toString(),
      ...formData,
      status: "active",
    };
    setAllocations([...allocations, newAllocation]);
    setFormData({
      courseUnit: "",
      lecturer: "",
      department: "",
      semester: "",
      academicYear: "",
    });
    setIsAddDialogOpen(false);
  };

  const filteredAllocations = allocations.filter(
    (allocation) =>
      allocation.courseUnit.toLowerCase().includes(searchQuery.toLowerCase()) ||
      allocation.lecturer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      allocation.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Timetable & Allocations</h1>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">
              <Plus className="h-4 w-4 mr-2" />
              Add New Allocation
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Allocation</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 w-full">
              <div className="space-y-2 w-full">
                <label className="text-sm font-medium">Course Unit</label>
                <Select
                  value={formData.courseUnit}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, courseUnit: value }))
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select course unit" />
                  </SelectTrigger>
                  <SelectContent className="w-full">
                    {courseUnits.map((unit) => (
                      <SelectItem key={unit} value={unit}>
                        {unit}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2 w-full">
                <label className="text-sm font-medium">Lecturer</label>
                <Select
                  value={formData.lecturer}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, lecturer: value }))
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select lecturer" />
                  </SelectTrigger>
                  <SelectContent className="w-full">
                    {lecturers.map((lecturer) => (
                      <SelectItem key={lecturer} value={lecturer}>
                        {lecturer}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2 w-full">
                <label className="text-sm font-medium">Department</label>
                <Select
                  value={formData.department}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, department: value }))
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent className="w-full">
                    {departments.map((dept) => (
                      <SelectItem key={dept} value={dept}>
                        {dept}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2 w-full">
                <label className="text-sm font-medium">Semester</label>
                <Select
                  value={formData.semester}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, semester: value }))
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select semester" />
                  </SelectTrigger>
                  <SelectContent className="w-full">
                    <SelectItem value="Semester 1">Semester 1</SelectItem>
                    <SelectItem value="Semester 2">Semester 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2 w-full">
                <label className="text-sm font-medium">Academic Year</label>
                <Select
                  value={formData.academicYear}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, academicYear: value }))
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select academic year" />
                  </SelectTrigger>
                  <SelectContent className="w-full">
                    {academicYears.map((year) => (
                      <SelectItem key={year} value={year}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600"
              >
                Add Allocation
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search allocations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Course Unit</TableHead>
              <TableHead>Lecturer</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Semester</TableHead>
              <TableHead>Academic Year</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAllocations.map((allocation) => (
              <TableRow key={allocation.id}>
                <TableCell>{allocation.courseUnit}</TableCell>
                <TableCell>{allocation.lecturer}</TableCell>
                <TableCell>{allocation.department}</TableCell>
                <TableCell>{allocation.semester}</TableCell>
                <TableCell>{allocation.academicYear}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      allocation.status === "active"
                        ? "bg-green-100 text-green-800"
                        : allocation.status === "pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {allocation.status}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-blue-500 hover:text-blue-600"
                    >
                      <Edit2 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-red-500 hover:text-red-600"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default TimetableAllocations;
