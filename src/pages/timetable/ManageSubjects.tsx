import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Book, Edit, Trash2 } from "lucide-react";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ManageSubjects = () => {
  const subjects = [
    {
      name: "Agricultural Economics",
      code: "AGE 201",
      type: "Core",
    },
    {
      name: "Agriculture Microbiology",
      code: "AMB201",
      type: "Core",
    },
    {
      name: "Farm Machinery & Power",
      code: "FMP201",
      type: "Core",
    },
    {
      name: "Organic Chemistry",
      code: "OCH102",
      type: "Core",
    },
    {
      name: "Animal Husbandry",
      code: "ANH 102",
      type: "Core",
    },
    {
      name: "Plant Physiology",
      code: "PPHY201",
      type: "Core",
    },
    {
      name: "Principles of Horticulture",
      code: "HORT 201",
      type: "Core",
    },
    {
      name: "Soil Chemistry",
      code: "SCH201",
      type: "Core",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Manage Subjects</h1>
          <p className="text-sm text-gray-500 mt-1">
            Configure and manage subjects for courses and batches
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Course Selection</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Course</Label>
                <Select defaultValue="animal-science">
                  <SelectTrigger>
                    <SelectValue placeholder="Select course" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="animal-science">
                      Animal Science Year 2
                    </SelectItem>
                    <SelectItem value="agriculture">
                      Agriculture Year 2
                    </SelectItem>
                    <SelectItem value="horticulture">
                      Horticulture Year 2
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Batch</Label>
                <Select defaultValue="ans-2">
                  <SelectTrigger>
                    <SelectValue placeholder="Select batch" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ans-2">
                      ANS-2 - Semester 4 2024-2025
                    </SelectItem>
                    <SelectItem value="ans-1">
                      ANS-1 - Semester 3 2024-2025
                    </SelectItem>
                    <SelectItem value="agr-2">
                      AGR-2 - Semester 4 2024-2025
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Subject Management</CardTitle>
            <Dialog>
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
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="subject-name">Subject Name</Label>
                    <Input id="subject-name" placeholder="Enter subject name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject-code">Subject Code</Label>
                    <Input id="subject-code" placeholder="Enter subject code" />
                  </div>
                  <div className="space-y-2">
                    <Label>Subject Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="core">Core</SelectItem>
                        <SelectItem value="elective">Elective</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="w-full">Add Subject</Button>
                </div>
              </DialogContent>
            </Dialog>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Subject Type</Label>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Subjects</SelectItem>
                    <SelectItem value="core">Core Subjects</SelectItem>
                    <SelectItem value="elective">Elective Subjects</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="border rounded-lg">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Subject Name</TableHead>
                      <TableHead>Code</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {subjects.map((subject) => (
                      <TableRow key={subject.code}>
                        <TableCell>{subject.name}</TableCell>
                        <TableCell>{subject.code}</TableCell>
                        <TableCell>
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                            {subject.type}
                          </span>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end space-x-2">
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-red-600 hover:text-red-700"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ManageSubjects;
