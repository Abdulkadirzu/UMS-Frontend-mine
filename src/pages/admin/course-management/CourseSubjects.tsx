import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, Edit2, Trash2, Upload } from "lucide-react";
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
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface Subject {
  id: number;
  title: string;
  code: string;
  unitOutline: string | null;
  learningMaterial: string | null;
}

const CourseSubjects = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [subjects, setSubjects] = useState<Subject[]>([
    {
      id: 1,
      title: "Introduction to Programming",
      code: "SUB101",
      unitOutline: null,
      learningMaterial: null,
    },
    // Add more mock subjects as needed
  ]);

  const [formData, setFormData] = useState({
    title: "",
    code: "",
    unitOutline: null as File | null,
    learningMaterial: null as File | null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newSubject: Subject = {
      id: Math.max(...subjects.map((s) => s.id)) + 1,
      title: formData.title,
      code: formData.code,
      unitOutline: formData.unitOutline
        ? URL.createObjectURL(formData.unitOutline)
        : null,
      learningMaterial: formData.learningMaterial
        ? URL.createObjectURL(formData.learningMaterial)
        : null,
    };
    setSubjects([...subjects, newSubject]);
    setIsAddDialogOpen(false);
    setFormData({
      title: "",
      code: "",
      unitOutline: null,
      learningMaterial: null,
    });
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "unitOutline" | "learningMaterial"
  ) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, [type]: e.target.files[0] });
    }
  };

  const filteredSubjects = subjects.filter(
    (subject) =>
      subject.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      subject.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
        <h1 className="text-3xl font-bold">Course Subjects</h1>
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Subject List</CardTitle>
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Subject
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Subject</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4 py-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Subject Title</label>
                    <Input
                      placeholder="Enter subject title"
                      value={formData.title}
                      onChange={(e) =>
                        setFormData({ ...formData, title: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Subject Code</label>
                    <Input
                      placeholder="Enter subject code"
                      value={formData.code}
                      onChange={(e) =>
                        setFormData({ ...formData, code: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Unit Outline</label>
                    <div className="flex items-center gap-2">
                      <Input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => handleFileChange(e, "unitOutline")}
                      />
                      {formData.unitOutline && (
                        <span className="text-sm text-gray-500">
                          {formData.unitOutline.name}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Learning Material
                    </label>
                    <div className="flex items-center gap-2">
                      <Input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) =>
                          handleFileChange(e, "learningMaterial")
                        }
                      />
                      {formData.learningMaterial && (
                        <span className="text-sm text-gray-500">
                          {formData.learningMaterial.name}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-end gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setIsAddDialogOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button type="submit">Create Subject</Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search subjects..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Subject Code</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Unit Outline</TableHead>
                <TableHead>Learning Material</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSubjects.map((subject) => (
                <TableRow key={subject.id}>
                  <TableCell className="font-medium">{subject.code}</TableCell>
                  <TableCell>{subject.title}</TableCell>
                  <TableCell>
                    {subject.unitOutline ? (
                      <Button variant="ghost" size="sm">
                        <Upload className="h-4 w-4 mr-2" />
                        View
                      </Button>
                    ) : (
                      <span className="text-gray-400">Not uploaded</span>
                    )}
                  </TableCell>
                  <TableCell>
                    {subject.learningMaterial ? (
                      <Button variant="ghost" size="sm">
                        <Upload className="h-4 w-4 mr-2" />
                        View
                      </Button>
                    ) : (
                      <span className="text-gray-400">Not uploaded</span>
                    )}
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

export default CourseSubjects;
