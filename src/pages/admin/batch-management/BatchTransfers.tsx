import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Check, X } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { useState } from "react";

// Mock data for transfer requests
const initialTransferRequests = [
  {
    id: 1,
    studentName: "John Doe",
    studentId: "STU001",
    fromBatch: "CS101-2024-Batch1",
    toBatch: "CS101-2024-Batch2",
    reason: "Schedule conflict with other courses",
    status: "Pending",
    requestDate: "2024-03-15",
  },
  {
    id: 2,
    studentName: "Jane Smith",
    studentId: "STU002",
    fromBatch: "MATH101-2024-Batch1",
    toBatch: "MATH101-2024-Batch2",
    reason: "Personal circumstances",
    status: "Pending",
    requestDate: "2024-03-14",
  },
];

interface TransferRequest {
  id: number;
  studentName: string;
  studentId: string;
  fromBatch: string;
  toBatch: string;
  reason: string;
  status: string;
  requestDate: string;
}

const BatchTransfers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [transferRequests, setTransferRequests] = useState<TransferRequest[]>(
    initialTransferRequests
  );

  const filteredRequests = transferRequests.filter(
    (request) =>
      request.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.studentId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.fromBatch.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.toBatch.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleApprove = (requestId: number) => {
    setTransferRequests(
      transferRequests.map((request) =>
        request.id === requestId ? { ...request, status: "Approved" } : request
      )
    );
  };

  const handleReject = (requestId: number) => {
    setTransferRequests(
      transferRequests.map((request) =>
        request.id === requestId ? { ...request, status: "Rejected" } : request
      )
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Batch Transfer Requests</h1>
          <p className="text-gray-500 mt-1">
            Manage student requests for batch transfers
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Transfer Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search requests..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student Name</TableHead>
                <TableHead>Student ID</TableHead>
                <TableHead>From Batch</TableHead>
                <TableHead>To Batch</TableHead>
                <TableHead>Reason</TableHead>
                <TableHead>Request Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredRequests.map((request) => (
                <TableRow key={request.id}>
                  <TableCell>{request.studentName}</TableCell>
                  <TableCell>{request.studentId}</TableCell>
                  <TableCell>{request.fromBatch}</TableCell>
                  <TableCell>{request.toBatch}</TableCell>
                  <TableCell>{request.reason}</TableCell>
                  <TableCell>{request.requestDate}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        request.status === "Pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : request.status === "Approved"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {request.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    {request.status === "Pending" && (
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-green-500 hover:text-green-600 hover:bg-green-50"
                          onClick={() => handleApprove(request.id)}
                        >
                          <Check className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-500 hover:text-red-600 hover:bg-red-50"
                          onClick={() => handleReject(request.id)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </TableCell>
                </TableRow>
              ))}
              {filteredRequests.length === 0 && (
                <TableRow>
                  <TableCell colSpan={8} className="text-center py-4">
                    No transfer requests found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default BatchTransfers;
