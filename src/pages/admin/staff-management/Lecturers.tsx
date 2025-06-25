import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, Edit2, Trash2 } from "lucide-react";
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
import { useState } from "react";

interface Lecturer {
  id: number;
  name: string;
  email: string;
  phone: string;
  department: string;
  specialization: string;
  status: "Active" | "Inactive";
  courses: string[];
}

const Lecturers = () => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [lecturers, setLecturers] = useState<Lecturer[]>([
    {
      id: 1,
      name: "Dr. John Smith",
      email: "john.smith@university.edu",
      phone: "+1234567890",
      department: "Computer Science",
      specialization: "Artificial Intelligence",
      status: "Active",
      courses: ["CS101", "CS201", "CS301"],
    },
    // Add more mock lecturers as needed
  ]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    specialization: "",
  });

  const departments = [
    "Computer Science",
    "Mathematics",
    "Physics",
    "Engineering",
    "Business",
  ];

  const specializations = [
    "Artificial Intelligence",
    "Machine Learning",
    "Data Science",
    "Software Engineering",
    "Computer Networks",
    "Database Systems",
    "Operating Systems",
    "Computer Graphics",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newLecturer: Lecturer = {
      id: Math.max(...lecturers.map((l) => l.id)) + 1,
      ...formData,
      status: "Active",
      courses: [],
    };
    setLecturers([...lecturers, newLecturer]);
    setIsAddDialogOpen(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      department: "",
      specialization: "",
    });
  };

  const filteredLecturers = lecturers.filter(
    (lecturer) =>
      lecturer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lecturer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lecturer.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lecturer.specialization.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Lecturer Management</h1>
          <p className="text-gray-500 mt-1">Manage university lecturers</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-blue-500 hover:bg-blue-600">
              <Plus className="mr-2 h-4 w-4" />
              Add Lecturer
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Lecturer</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 py-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Full Name</label>
                <Input
                  placeholder="Enter full name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input
                  type="email"
                  placeholder="Enter email address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Phone Number</label>
                <Input
                  type="tel"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Department</label>
                <Select
                  value={formData.department}
                  onValueChange={(value) =>
                    setFormData({ ...formData, department: value })
                  }
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    {departments.map((dept) => (
                      <SelectItem key={dept} value={dept}>
                        {dept}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Specialization</label>
                <Select
                  value={formData.specialization}
                  onValueChange={(value) =>
                    setFormData({ ...formData, specialization: value })
                  }
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select specialization" />
                  </SelectTrigger>
                  <SelectContent>
                    {specializations.map((spec) => (
                      <SelectItem key={spec} value={spec}>
                        {spec}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex justify-end gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsAddDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" className="bg-blue-500 hover:bg-blue-600">
                  Create Lecturer
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Lecturer List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search lecturers..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Specialization</TableHead>
                <TableHead>Courses</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredLecturers.map((lecturer) => (
                <TableRow key={lecturer.id}>
                  <TableCell className="font-medium">{lecturer.name}</TableCell>
                  <TableCell>{lecturer.email}</TableCell>
                  <TableCell>{lecturer.phone}</TableCell>
                  <TableCell>{lecturer.department}</TableCell>
                  <TableCell>{lecturer.specialization}</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {lecturer.courses.map((course) => (
                        <span
                          key={course}
                          className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        lecturer.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {lecturer.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon">
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-red-500 hover:text-red-600 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Lecturers;
