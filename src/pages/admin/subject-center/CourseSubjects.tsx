import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Search, ArrowUpDown, Edit, Trash2 } from "lucide-react";

interface Subject {
  id: string;
  name: string;
  code: string;
  type: "Subject" | "Elective Group";
  group?: string;
}

const CourseSubjects: React.FC = () => {
  const subjects: Subject[] = [
    {
      id: "1",
      name: "Zoology",
      code: "ZOO101",
      type: "Subject",
    },
    {
      id: "2",
      name: "Botany",
      code: "BOT101",
      type: "Subject",
    },
    {
      id: "3",
      name: "Arabic",
      code: "ARAB101",
      type: "Subject",
    },
    {
      id: "4",
      name: "Calculus",
      code: "MATH101",
      type: "Subject",
    },
    {
      id: "5",
      name: "Chemistry",
      code: "OCH101",
      type: "Subject",
    },
    {
      id: "6",
      name: "Agricultural Physics",
      code: "PHY101",
      type: "Subject",
    },
    {
      id: "7",
      name: "English 1",
      code: "ENG101",
      type: "Subject",
    },
    {
      id: "8",
      name: "Computer Application",
      code: "CA101",
      type: "Subject",
    },
    {
      id: "9",
      name: "Introduction to Agriculture",
      code: "INAG101",
      type: "Subject",
    },
    {
      id: "10",
      name: "Science",
      code: "S001",
      type: "Subject",
    },
    {
      id: "11",
      name: "Principles of Agro-Economics",
      code: "AGE201",
      type: "Subject",
    },
    {
      id: "12",
      name: "Elective Group 1",
      code: "EG1",
      type: "Elective Group",
      group: "Elective Group 1",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Input
            placeholder="Search subjects..."
            className="w-[300px]"
            icon={<Search className="h-4 w-4" />}
          />
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Course" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="agriculture">Agriculture Year 1</SelectItem>
              <SelectItem value="accounting">Accounting Year 1</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <ArrowUpDown className="mr-2 h-4 w-4" />
            Reorder
          </Button>
          <Button variant="outline">Import subjects</Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Subject
          </Button>
        </div>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Subject Name</TableHead>
              <TableHead>Code</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Group</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {subjects.map((subject) => (
              <TableRow key={subject.id}>
                <TableCell>{subject.name}</TableCell>
                <TableCell>{subject.code}</TableCell>
                <TableCell>{subject.type}</TableCell>
                <TableCell>{subject.group || "-"}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end space-x-2">
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
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

export default CourseSubjects;
