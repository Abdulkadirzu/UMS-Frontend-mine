import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Search, Download, Calendar, Clock } from "lucide-react";
import TitleTable from "@/components/ui/title-table";

const ManageTimetables: React.FC = () => {
  const headers = [
    "Timetable Name",
    "Department",
    "Batch",
    "Academic Year",
    "Status",
    "Last Updated",
    "Actions",
  ];

  const data = [
    {
      name: "CS 2024 Semester 1",
      department: "Computer Science",
      batch: "2024 Batch",
      academicYear: "2024-2025",
      status: "Active",
      lastUpdated: "2024-03-15",
    },
    {
      name: "EE 2023 Semester 2",
      department: "Electrical Engineering",
      batch: "2023 Batch",
      academicYear: "2023-2024",
      status: "Draft",
      lastUpdated: "2024-03-14",
    },
    {
      name: "ME 2024 Semester 1",
      department: "Mechanical Engineering",
      batch: "2024 Batch",
      academicYear: "2024-2025",
      status: "Active",
      lastUpdated: "2024-03-13",
    },
  ];

  const renderRow = (item: any) => (
    <tr key={item.name}>
      <td className="px-6 py-4">{item.name}</td>
      <td className="px-6 py-4">{item.department}</td>
      <td className="px-6 py-4">{item.batch}</td>
      <td className="px-6 py-4">{item.academicYear}</td>
      <td className="px-6 py-4">
        <span
          className={`${
            item.status === "Active" ? "text-green-600" : "text-yellow-600"
          }`}
        >
          {item.status}
        </span>
      </td>
      <td className="px-6 py-4">{item.lastUpdated}</td>
      <td className="px-6 py-4">
        <div className="flex space-x-2">
          <Button variant="ghost" size="sm">
            <Calendar className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Clock className="h-4 w-4" />
          </Button>
        </div>
      </td>
    </tr>
  );

  const actions = (
    <>
      <Button>
        <Plus className="mr-2 h-4 w-4" />
        Create Timetable
      </Button>
      <Button variant="outline">
        <Download className="mr-2 h-4 w-4" />
        Export
      </Button>
    </>
  );

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-6">
        <div className="space-y-2">
          <Label>Search</Label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Search timetables..." className="pl-10" />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Department</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="All departments" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>
              <SelectItem value="cs">Computer Science</SelectItem>
              <SelectItem value="ee">Electrical Engineering</SelectItem>
              <SelectItem value="me">Mechanical Engineering</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Batch</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="All batches" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Batches</SelectItem>
              <SelectItem value="2024">2024 Batch</SelectItem>
              <SelectItem value="2023">2023 Batch</SelectItem>
              <SelectItem value="2022">2022 Batch</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Status</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="All status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <TitleTable
        title="Manage Timetables"
        description="Create and manage timetable allocations for different departments and batches"
        headers={headers}
        data={data}
        renderRow={renderRow}
        actions={actions}
      />
    </div>
  );
};

export default ManageTimetables;
