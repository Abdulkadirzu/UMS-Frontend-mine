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
import { Plus, Search, Download, Clock, Calendar } from "lucide-react";
import TitleTable from "@/components/ui/title-table";

const ManageClassTimingSets: React.FC = () => {
  const headers = [
    "Set Name",
    "Batch",
    "Periods",
    "Weekdays",
    "Created Date",
    "Actions",
  ];

  const data = [
    {
      name: "Morning Shift",
      batch: "2024 Batch",
      periods: 6,
      weekdays: "Mon-Fri",
      createdDate: "2024-03-15",
    },
    {
      name: "Afternoon Shift",
      batch: "2023 Batch",
      periods: 4,
      weekdays: "Mon-Fri",
      createdDate: "2024-03-14",
    },
    {
      name: "Evening Shift",
      batch: "2022 Batch",
      periods: 3,
      weekdays: "Mon-Thu",
      createdDate: "2024-03-13",
    },
  ];

  const renderRow = (item: any) => (
    <tr key={item.name}>
      <td className="px-6 py-4">{item.name}</td>
      <td className="px-6 py-4">{item.batch}</td>
      <td className="px-6 py-4">{item.periods}</td>
      <td className="px-6 py-4">{item.weekdays}</td>
      <td className="px-6 py-4">{item.createdDate}</td>
      <td className="px-6 py-4">
        <div className="flex space-x-2">
          <Button variant="ghost" size="sm">
            <Clock className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Calendar className="h-4 w-4" />
          </Button>
        </div>
      </td>
    </tr>
  );

  const actions = (
    <>
      <Button>
        <Plus className="mr-2 h-4 w-4" />
        Add Timing Set
      </Button>
      <Button variant="outline">
        <Download className="mr-2 h-4 w-4" />
        Export
      </Button>
    </>
  );

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-6">
        <div className="space-y-2">
          <Label>Search</Label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Search timing sets..." className="pl-10" />
          </div>
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
          <Label>Sort By</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Name (A-Z)" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name-asc">Name (A-Z)</SelectItem>
              <SelectItem value="name-desc">Name (Z-A)</SelectItem>
              <SelectItem value="periods">Number of Periods</SelectItem>
              <SelectItem value="date-added">Date Added</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <TitleTable
        title="Class Timing Sets"
        description="Manage class timing sets and periods for different batches"
        headers={headers}
        data={data}
        renderRow={renderRow}
        actions={actions}
      />
    </div>
  );
};

export default ManageClassTimingSets;
