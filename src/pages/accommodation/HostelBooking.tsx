import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const HostelBooking = () => {
  // Dummy data for available rooms
  const availableRooms = [
    {
      id: 1,
      block: "Block A",
      roomNumber: "101",
      type: "Single",
      capacity: 1,
      available: 1,
      price: 5000,
    },
    {
      id: 2,
      block: "Block A",
      roomNumber: "102",
      type: "Double",
      capacity: 2,
      available: 2,
      price: 4000,
    },
    {
      id: 3,
      block: "Block B",
      roomNumber: "201",
      type: "Single",
      capacity: 1,
      available: 1,
      price: 5000,
    },
    {
      id: 4,
      block: "Block B",
      roomNumber: "202",
      type: "Triple",
      capacity: 3,
      available: 2,
      price: 3500,
    },
    {
      id: 5,
      block: "Block C",
      roomNumber: "301",
      type: "Double",
      capacity: 2,
      available: 1,
      price: 4000,
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Hostel Booking</h1>

      {/* Booking Form */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Book a Room</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="block">Block</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Block" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="block-a">Block A</SelectItem>
                    <SelectItem value="block-b">Block B</SelectItem>
                    <SelectItem value="block-c">Block C</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="roomType">Room Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Room Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="single">Single</SelectItem>
                    <SelectItem value="double">Double</SelectItem>
                    <SelectItem value="triple">Triple</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="semester">Semester</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Semester" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sem1">Semester 1</SelectItem>
                    <SelectItem value="sem2">Semester 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="academicYear">Academic Year</Label>
                <Input type="text" id="academicYear" placeholder="2023/2024" />
              </div>
            </div>

            <Button className="bg-blue-500 hover:bg-blue-600 text-white">
              Search Available Rooms
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Available Rooms Table */}
      <Card>
        <CardHeader>
          <CardTitle>Available Rooms</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Block</TableHead>
                <TableHead>Room Number</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Capacity</TableHead>
                <TableHead>Available</TableHead>
                <TableHead>Price (per semester)</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {availableRooms.map((room) => (
                <TableRow key={room.id}>
                  <TableCell>{room.block}</TableCell>
                  <TableCell>{room.roomNumber}</TableCell>
                  <TableCell>{room.type}</TableCell>
                  <TableCell>{room.capacity}</TableCell>
                  <TableCell>{room.available}</TableCell>
                  <TableCell>${room.price}</TableCell>
                  <TableCell>
                    <Button
                      variant="outline"
                      className="bg-blue-500 hover:bg-blue-600 text-white"
                    >
                      Book Now
                    </Button>
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

export default HostelBooking;
