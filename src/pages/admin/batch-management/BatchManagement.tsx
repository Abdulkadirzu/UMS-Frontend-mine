import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Pencil, Trash2, Check, X } from "lucide-react";
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
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

// Mock data for courses
const courses = [
  {
    id: 1,
    name: "Computer Science",
    code: "CS101",
    department: "Computer Science",
  },
  {
    id: 2,
    name: "Mathematics",
    code: "MATH101",
    department: "Mathematics",
  },
  {
    id: 3,
    name: "Physics",
    code: "PHY101",
    department: "Physics",
  },
];

// Mock data for batches
const initialBatches = [
  {
    id: 1,
    courseId: 1,
    name: "CS101-2024-Batch1",
    academicYear: "2024",
    startDate: "2024-01-01",
    endDate: "2024-06-30",
    status: "Active",
  },
  {
    id: 2,
    courseId: 1,
    name: "CS101-2023-Batch1",
    academicYear: "2023",
    startDate: "2023-01-01",
    endDate: "2023-06-30",
    status: "Completed",
  },
  {
    id: 3,
    courseId: 2,
    name: "MATH101-2024-Batch1",
    academicYear: "2024",
    startDate: "2024-01-01",
    endDate: "2024-06-30",
    status: "Active",
  },
];

// Mock data for academic years
const academicYears = [
  { id: 1, year: "2024" },
  { id: 2, year: "2023" },
  { id: 3, year: "2022" },
];

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

interface Batch {
  id: number;
  courseId: number;
  name: string;
  academicYear: string;
  startDate: string;
  endDate: string;
  status: string;
}

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

const BatchManagement = () => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<
    (typeof courses)[0] | null
  >(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [batches, setBatches] = useState<Batch[]>(initialBatches);
  const [selectedBatch, setSelectedBatch] = useState<Batch | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    academicYear: "",
    startDate: "",
    endDate: "",
  });
  const [nameError, setNameError] = useState("");
  const [showTransferRequests, setShowTransferRequests] = useState(false);
  const [transferRequests, setTransferRequests] = useState<TransferRequest[]>(
    initialTransferRequests
  );

  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const courseBatches = selectedCourse
    ? batches.filter((batch) => batch.courseId === selectedCourse.id)
    : [];

  const validateBatchName = (name: string) => {
    const year = formData.academicYear;
    if (!name.includes(year)) {
      setNameError(`Batch name must include the academic year (${year})`);
      return false;
    }
    if (!name.toLowerCase().includes("semester")) {
      setNameError("Batch name must include 'Semester'");
      return false;
    }
    setNameError("");
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateBatchName(formData.name)) {
      return;
    }
    if (selectedBatch) {
      // Edit existing batch
      setBatches(
        batches.map((batch) =>
          batch.id === selectedBatch.id ? { ...batch, ...formData } : batch
        )
      );
      setIsEditDialogOpen(false);
    } else {
      // Create new batch
      const newBatch: Batch = {
        id: Math.max(...batches.map((b) => b.id)) + 1,
        courseId: selectedCourse!.id,
        ...formData,
        status: "Active",
      };
      setBatches([...batches, newBatch]);
      setIsAddDialogOpen(false);
    }
    resetForm();
  };

  const handleDelete = (batchId: number) => {
    if (window.confirm("Are you sure you want to delete this batch?")) {
      setBatches(batches.filter((batch) => batch.id !== batchId));
    }
  };

  const handleEdit = (batch: Batch) => {
    setSelectedBatch(batch);
    setFormData({
      name: batch.name,
      academicYear: batch.academicYear,
      startDate: batch.startDate,
      endDate: batch.endDate,
    });
    setIsEditDialogOpen(true);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      academicYear: "",
      startDate: "",
      endDate: "",
    });
    setSelectedBatch(null);
    setNameError("");
  };

  const handleApproveTransfer = (requestId: number) => {
    setTransferRequests(
      transferRequests.map((request) =>
        request.id === requestId ? { ...request, status: "Approved" } : request
      )
    );
  };

  const handleRejectTransfer = (requestId: number) => {
    setTransferRequests(
      transferRequests.map((request) =>
        request.id === requestId ? { ...request, status: "Rejected" } : request
      )
    );
  };

  const filteredTransferRequests = transferRequests.filter(
    (request) =>
      request.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.studentId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.fromBatch.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.toBatch.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Batch Management</h1>
          <p className="text-gray-500 mt-1">
            Manage course batches and schedules
          </p>
        </div>
        <Button
          variant="outline"
          className="bg-blue-500 hover:bg-blue-600 text-white"
          onClick={() => setShowTransferRequests(!showTransferRequests)}
        >
          {showTransferRequests ? "Show Batches" : "Batch Transfers Request"}
        </Button>
      </div>

      {!showTransferRequests ? (
        <>
          <Card>
            <CardHeader>
              <CardTitle>Courses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 mb-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search courses..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Course Name</TableHead>
                    <TableHead>Code</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredCourses.map((course) => (
                    <TableRow
                      key={course.id}
                      className={
                        selectedCourse?.id === course.id ? "bg-gray-50" : ""
                      }
                    >
                      <TableCell>{course.name}</TableCell>
                      <TableCell>{course.code}</TableCell>
                      <TableCell>{course.department}</TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setSelectedCourse(course)}
                        >
                          View Batches
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="bg-blue-500 hover:bg-blue-600 text-white"
                          onClick={() => {
                            setSelectedCourse(course);
                            setIsAddDialogOpen(true);
                          }}
                        >
                          Create Batch
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {selectedCourse && (
            <Card>
              <CardHeader>
                <CardTitle>Batches for {selectedCourse.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Batch Name</TableHead>
                      <TableHead>Academic Year</TableHead>
                      <TableHead>Start Date</TableHead>
                      <TableHead>End Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {courseBatches.map((batch) => (
                      <TableRow key={batch.id}>
                        <TableCell>{batch.name}</TableCell>
                        <TableCell>{batch.academicYear}</TableCell>
                        <TableCell>{batch.startDate}</TableCell>
                        <TableCell>{batch.endDate}</TableCell>
                        <TableCell>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              batch.status === "Active"
                                ? "bg-green-100 text-green-800"
                                : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {batch.status}
                          </span>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleEdit(batch)}
                            >
                              <Pencil className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-red-500 hover:text-red-600 hover:bg-red-50"
                              onClick={() => handleDelete(batch.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                    {courseBatches.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center py-4">
                          No batches found for this course
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          )}
        </>
      ) : (
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
                {filteredTransferRequests.map((request) => (
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
                            onClick={() => handleApproveTransfer(request.id)}
                          >
                            <Check className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-red-500 hover:text-red-600 hover:bg-red-50"
                            onClick={() => handleRejectTransfer(request.id)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
                {filteredTransferRequests.length === 0 && (
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
      )}

      {/* Create Batch Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Create New Batch for {selectedCourse?.name}
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Batch Name</label>
              <Input
                type="text"
                placeholder="e.g., 2024 Semester One"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  validateBatchName(e.target.value);
                }}
                required
                className={nameError ? "border-red-500" : ""}
              />
              {nameError && (
                <p className="text-sm text-red-500 mt-1">{nameError}</p>
              )}
              <p className="text-sm text-gray-500">
                Format: [Year] Semester [One/Two]
              </p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Academic Year</label>
              <select
                className="w-full p-2 border rounded-md"
                required
                value={formData.academicYear}
                onChange={(e) =>
                  setFormData({ ...formData, academicYear: e.target.value })
                }
              >
                <option value="">Select Academic Year</option>
                {academicYears.map((year) => (
                  <option key={year.id} value={year.year}>
                    {year.year}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Start Date</label>
              <Input
                type="date"
                required
                value={formData.startDate}
                onChange={(e) =>
                  setFormData({ ...formData, startDate: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">End Date</label>
              <Input
                type="date"
                required
                value={formData.endDate}
                onChange={(e) =>
                  setFormData({ ...formData, endDate: e.target.value })
                }
              />
            </div>

            <div className="flex justify-end gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setIsAddDialogOpen(false);
                  resetForm();
                }}
              >
                Cancel
              </Button>
              <Button type="submit" className="bg-green-500 hover:bg-green-600">
                Create Batch
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Edit Batch Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Batch</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Batch Name</label>
              <Input
                type="text"
                placeholder="e.g., 2024 Semester One"
                required
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  validateBatchName(e.target.value);
                }}
                className={nameError ? "border-red-500" : ""}
              />
              {nameError && (
                <p className="text-sm text-red-500 mt-1">{nameError}</p>
              )}
              <p className="text-sm text-gray-500">
                Format: [Year] Semester [One/Two]
              </p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Academic Year</label>
              <select
                className="w-full p-2 border rounded-md"
                required
                value={formData.academicYear}
                onChange={(e) =>
                  setFormData({ ...formData, academicYear: e.target.value })
                }
              >
                <option value="">Select Academic Year</option>
                {academicYears.map((year) => (
                  <option key={year.id} value={year.year}>
                    {year.year}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Start Date</label>
              <Input
                type="date"
                required
                value={formData.startDate}
                onChange={(e) =>
                  setFormData({ ...formData, startDate: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">End Date</label>
              <Input
                type="date"
                required
                value={formData.endDate}
                onChange={(e) =>
                  setFormData({ ...formData, endDate: e.target.value })
                }
              />
            </div>

            <div className="flex justify-end gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setIsEditDialogOpen(false);
                  resetForm();
                }}
              >
                Cancel
              </Button>
              <Button type="submit" className="bg-blue-500 hover:bg-blue-600">
                Save Changes
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BatchManagement;
