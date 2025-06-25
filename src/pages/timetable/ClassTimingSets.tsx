import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Clock, ArrowRight, ArrowLeft } from "lucide-react";
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

const ClassTimingSets = () => {
  const timingSets = [
    {
      name: "Morning Section",
      startTime: "08:00 AM",
      endTime: "02:00 PM",
      duration: "45 min",
      breakDuration: "15 min",
      assignedBatches: [
        "ANS-2 - Semester 4 2024-2025",
        "AGR-2 - Semester 4 2024-2025",
      ],
    },
    {
      name: "Afternoon Section",
      startTime: "02:00 PM",
      endTime: "08:00 PM",
      duration: "45 min",
      breakDuration: "15 min",
      assignedBatches: [
        "CIS-2 - Semester 4 2024-2025",
        "MED-2 - Semester 4 2024-2025",
      ],
    },
  ];

  const availableBatches = [
    "ACC-2 - Semester 4 2024-2025",
    "ACC - Semester 2 2024-2025 F-T",
    "ACC - Semester 2 2024-2025 P-T",
    "AGR-1 - Semester 2 2024-2025",
    "AGR-2 - Semester 4 2024-2025",
    "ANS-2 - Semester 4 2024-2025",
    "CIS-2 - Semester 4 2024-2025",
    "MED-2 - Semester 4 2024-2025",
    // ... add more batches as needed
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Class Timing Sets
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage class timing sets and batch assignments
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Timing Set
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Timing Set</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="timing-set-name">Timing Set Name</Label>
                <Input
                  id="timing-set-name"
                  placeholder="Enter timing set name"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="start-time">Start Time</Label>
                  <Input type="time" id="start-time" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="end-time">End Time</Label>
                  <Input type="time" id="end-time" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="duration">Class Duration</Label>
                  <Input id="duration" placeholder="e.g., 45 min" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="break-duration">Break Duration</Label>
                  <Input id="break-duration" placeholder="e.g., 15 min" />
                </div>
              </div>
              <Button className="w-full">Add Timing Set</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Timing Sets</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Timing</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Break</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {timingSets.map((set) => (
                  <TableRow key={set.name}>
                    <TableCell>{set.name}</TableCell>
                    <TableCell>
                      {set.startTime} - {set.endTime}
                    </TableCell>
                    <TableCell>{set.duration}</TableCell>
                    <TableCell>{set.breakDuration}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Batch Assignment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Select Timing Set</Label>
                <Select defaultValue="afternoon">
                  <SelectTrigger>
                    <SelectValue placeholder="Select timing set" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Morning Section</SelectItem>
                    <SelectItem value="afternoon">Afternoon Section</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Assigned Batches</Label>
                  <div className="border rounded-md p-2 h-[300px] overflow-y-auto">
                    {timingSets[1].assignedBatches.map((batch) => (
                      <div
                        key={batch}
                        className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md"
                      >
                        <span className="text-sm">{batch}</span>
                        <Button variant="ghost" size="sm">
                          <ArrowLeft className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Available Batches</Label>
                  <div className="border rounded-md p-2 h-[300px] overflow-y-auto">
                    {availableBatches.map((batch) => (
                      <div
                        key={batch}
                        className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md"
                      >
                        <span className="text-sm">{batch}</span>
                        <Button variant="ghost" size="sm">
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ClassTimingSets;
