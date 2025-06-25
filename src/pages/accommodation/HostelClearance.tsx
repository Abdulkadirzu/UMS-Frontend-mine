import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const HostelClearance = () => {
  // Dummy data for clearance requirements
  const clearanceRequirements = [
    {
      id: 1,
      requirement: "Room Inspection",
      status: "Pending",
      deadline: "2024-05-15",
    },
    {
      id: 2,
      requirement: "Key Return",
      status: "Completed",
      deadline: "2024-05-15",
    },
    {
      id: 3,
      requirement: "Damage Assessment",
      status: "Pending",
      deadline: "2024-05-15",
    },
    {
      id: 4,
      requirement: "Cleaning Verification",
      status: "Pending",
      deadline: "2024-05-15",
    },
    {
      id: 5,
      requirement: "Property Return",
      status: "Completed",
      deadline: "2024-05-15",
    },
  ];

  // Dummy data for current booking
  const currentBooking = {
    block: "Block A",
    roomNumber: "101",
    checkInDate: "2024-01-15",
    checkOutDate: "2024-05-15",
    status: "Active",
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Hostel Clearance</h1>

      {/* Current Booking Status */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Current Booking Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 border rounded-lg">
              <p className="text-sm text-gray-500">Block</p>
              <p className="text-lg font-semibold">{currentBooking.block}</p>
            </div>
            <div className="p-4 border rounded-lg">
              <p className="text-sm text-gray-500">Room Number</p>
              <p className="text-lg font-semibold">
                {currentBooking.roomNumber}
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <p className="text-sm text-gray-500">Check-in Date</p>
              <p className="text-lg font-semibold">
                {currentBooking.checkInDate}
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <p className="text-sm text-gray-500">Check-out Date</p>
              <p className="text-lg font-semibold">
                {currentBooking.checkOutDate}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Clearance Requirements */}
      <Card>
        <CardHeader>
          <CardTitle>Clearance Requirements</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Requirement</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Deadline</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {clearanceRequirements.map((req) => (
                <TableRow key={req.id}>
                  <TableCell>{req.requirement}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        req.status === "Completed" ? "success" : "warning"
                      }
                      className={
                        req.status === "Completed"
                          ? "bg-green-500"
                          : "bg-yellow-500"
                      }
                    >
                      {req.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{req.deadline}</TableCell>
                  <TableCell>
                    {req.status === "Pending" && (
                      <Button
                        variant="outline"
                        className="bg-blue-500 hover:bg-blue-600 text-white"
                      >
                        Complete
                      </Button>
                    )}
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

export default HostelClearance;
