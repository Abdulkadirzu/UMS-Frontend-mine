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
import { Search, Link } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Subject {
  id: string;
  name: string;
  code: string;
  batchesAssigned: number;
  allocationStatus:
    | "Not allocated"
    | "Partially allocated"
    | "Completely allocated";
  batches: {
    name: string;
    status: "Not Allocated" | "Allocated";
  }[];
}

const LinkBatches: React.FC = () => {
  const subjects: Subject[] = [
    {
      id: "1",
      name: "English Fundamentals 1",
      code: "FYP0101",
      batchesAssigned: 0,
      allocationStatus: "Not allocated",
      batches: [
        {
          name: "Semester 2 2024-2025 F-T",
          status: "Not Allocated",
        },
        {
          name: "Semester 2 2024-2025 P-T",
          status: "Not Allocated",
        },
      ],
    },
    {
      id: "2",
      name: "Arabic Language",
      code: "FYP0102",
      batchesAssigned: 0,
      allocationStatus: "Not allocated",
      batches: [
        {
          name: "Semester 2 2024-2025 F-T",
          status: "Not Allocated",
        },
        {
          name: "Semester 2 2024-2025 P-T",
          status: "Not Allocated",
        },
      ],
    },
    {
      id: "3",
      name: "English Fundamentals 2",
      code: "FYP0201",
      batchesAssigned: 2,
      allocationStatus: "Completely allocated",
      batches: [
        {
          name: "Semester 2 2024-2025 F-T",
          status: "Allocated",
        },
        {
          name: "Semester 2 2024-2025 P-T",
          status: "Allocated",
        },
      ],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Not allocated":
        return "bg-gray-100 text-gray-800";
      case "Partially allocated":
        return "bg-yellow-100 text-yellow-800";
      case "Completely allocated":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

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
              <SelectItem value="accounting">Accounting Year 1</SelectItem>
              <SelectItem value="agriculture">Agriculture Year 1</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Subject Name</TableHead>
              <TableHead>Code</TableHead>
              <TableHead>Batches Assigned</TableHead>
              <TableHead>Allocation Status</TableHead>
              <TableHead>Batches</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {subjects.map((subject) => (
              <TableRow key={subject.id}>
                <TableCell>{subject.name}</TableCell>
                <TableCell>{subject.code}</TableCell>
                <TableCell>{subject.batchesAssigned}</TableCell>
                <TableCell>
                  <Badge className={getStatusColor(subject.allocationStatus)}>
                    {subject.allocationStatus}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="space-y-2">
                    {subject.batches.map((batch, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between"
                      >
                        <span>{batch.name}</span>
                        <Badge
                          variant="outline"
                          className={
                            batch.status === "Allocated"
                              ? "text-green-600"
                              : "text-gray-600"
                          }
                        >
                          {batch.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm">
                    <Link className="mr-2 h-4 w-4" />
                    Assign
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default LinkBatches;
