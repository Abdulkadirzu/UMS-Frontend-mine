import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Building, MapPin, Calendar } from "lucide-react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";

const weekdays = [
  { id: "monday", label: "Monday" },
  { id: "tuesday", label: "Tuesday" },
  { id: "wednesday", label: "Wednesday" },
  { id: "thursday", label: "Thursday" },
  { id: "friday", label: "Friday" },
  { id: "saturday", label: "Saturday" },
  { id: "sunday", label: "Sunday" },
];

const ClassRoomAllocation = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">
          Classroom Allocation
        </h1>
      </div>

      <Tabs defaultValue="buildings" className="space-y-4">
        <TabsList>
          <TabsTrigger value="buildings">Manage Buildings</TabsTrigger>
          <TabsTrigger value="allocation">Allocate Classroom</TabsTrigger>
        </TabsList>

        <TabsContent value="buildings" className="space-y-4">
          <div className="flex justify-end">
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Building
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Building</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="building-name">Building Name</Label>
                    <Input
                      id="building-name"
                      placeholder="Enter building name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="floors">Number of Floors</Label>
                    <Input
                      id="floors"
                      type="number"
                      placeholder="Enter number of floors"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      placeholder="Enter building location"
                    />
                  </div>
                  <Button className="w-full">Add Building</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Buildings List</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Building Name</TableHead>
                    <TableHead>Floors</TableHead>
                    <TableHead>Total Rooms</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Building A</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>15</TableCell>
                    <TableCell>North Campus</TableCell>
                    <TableCell>
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                        Active
                      </span>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Building B</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>10</TableCell>
                    <TableCell>South Campus</TableCell>
                    <TableCell>
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                        Active
                      </span>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="allocation" className="space-y-4">
          <div className="flex justify-end">
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <MapPin className="mr-2 h-4 w-4" />
                  Allocate Classroom
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Allocate Classroom</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="building">Select Building</Label>
                      <select className="w-full p-2 border rounded-md">
                        <option>Building A</option>
                        <option>Building B</option>
                        <option>Building C</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="floor">Select Floor</Label>
                      <select className="w-full p-2 border rounded-md">
                        <option>Ground Floor</option>
                        <option>1st Floor</option>
                        <option>2nd Floor</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="room">Select Room</Label>
                      <select className="w-full p-2 border rounded-md">
                        <option>Room 101</option>
                        <option>Room 102</option>
                        <option>Room 103</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="class">Select Class</Label>
                      <select className="w-full p-2 border rounded-md">
                        <option>Class A</option>
                        <option>Class B</option>
                        <option>Class C</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Select Weekdays</Label>
                    <div className="grid grid-cols-4 gap-2 p-4 border rounded-md">
                      {weekdays.map((day) => (
                        <div
                          key={day.id}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox id={day.id} />
                          <Label htmlFor={day.id} className="text-sm">
                            {day.label}
                          </Label>
                        </div>
                      ))}
                    </div>
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

                  <Button className="w-full">Allocate</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Current Allocations</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Building</TableHead>
                    <TableHead>Floor</TableHead>
                    <TableHead>Room</TableHead>
                    <TableHead>Class</TableHead>
                    <TableHead>Weekdays</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Building A</TableCell>
                    <TableCell>1st Floor</TableCell>
                    <TableCell>101</TableCell>
                    <TableCell>Class A</TableCell>
                    <TableCell>Mon, Wed, Fri</TableCell>
                    <TableCell>09:00 - 10:30</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Building B</TableCell>
                    <TableCell>Ground Floor</TableCell>
                    <TableCell>G01</TableCell>
                    <TableCell>Class B</TableCell>
                    <TableCell>Tue, Thu</TableCell>
                    <TableCell>13:00 - 14:30</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ClassRoomAllocation;
