import React, { useState } from "react";
import SidebarLayout from "@/components/layout/SidebarLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Plus,
  FileText,
  Calendar,
  Users,
  MoreVertical,
  Edit,
  Trash,
  Eye,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Badge } from "@/components/ui/badge";
import {
  Dialog as DetailsDialog,
  DialogContent as DetailsDialogContent,
  DialogHeader as DetailsDialogHeader,
  DialogTitle as DetailsDialogTitle,
} from "@/components/ui/dialog";

const formSchema = z.object({
  planName: z.string().min(2, "Plan name must be at least 2 characters"),
  course: z.string().min(1, "Please select a course"),
  term: z.string().min(1, "Please select a term"),
  examType: z.string().min(1, "Please select an exam type"),
});

const dummyExamPlans = [
  {
    id: 1,
    name: "Computer Science Final Exams 2024",
    course: "Computer Science",
    term: "Term 2",
    examType: "Final",
  },
  {
    id: 2,
    name: "Engineering Midterm Assessment",
    course: "Engineering",
    term: "Term 1",
    examType: "Midterm",
  },
  {
    id: 3,
    name: "Business Studies Practical",
    course: "Business",
    term: "Term 3",
    examType: "Practical",
  },
  {
    id: 4,
    name: "Computer Science Midterm 2024",
    course: "Computer Science",
    term: "Term 1",
    examType: "Midterm",
  },
  {
    id: 5,
    name: "Engineering Final Exams",
    course: "Engineering",
    term: "Term 2",
    examType: "Final",
  },
];

const dummyExamDetails = [
  {
    planId: 1,
    term: "Term 1",
    exams: [
      { name: "Assignment 1", mode: "Subject Exams", scoring: 20 },
      { name: "MID Exam", mode: "Subject Exams", scoring: 30 },
      { name: "Assignment 2", mode: "Subject Exams", scoring: 20 },
      { name: "Final Exam", mode: "Subject Exams", scoring: 30 },
    ],
  },
  {
    planId: 2,
    term: "Term 1",
    exams: [
      { name: "Assignment 1", mode: "Subject Exams", scoring: 25 },
      { name: "MID Exam", mode: "Subject Exams", scoring: 25 },
      { name: "Final Exam", mode: "Subject Exams", scoring: 50 },
    ],
  },
  {
    planId: 3,
    term: "Term 3",
    exams: [
      { name: "Practical 1", mode: "Subject Exams", scoring: 40 },
      { name: "Final Exam", mode: "Subject Exams", scoring: 60 },
    ],
  },
  {
    planId: 4,
    term: "Term 1",
    exams: [
      { name: "Assignment 1", mode: "Subject Exams", scoring: 20 },
      { name: "MID Exam", mode: "Subject Exams", scoring: 30 },
      { name: "Final Exam", mode: "Subject Exams", scoring: 50 },
    ],
  },
  {
    planId: 5,
    term: "Term 2",
    exams: [
      { name: "Assignment 1", mode: "Subject Exams", scoring: 40 },
      { name: "Final Exam", mode: "Subject Exams", scoring: 60 },
    ],
  },
];

const ExamsManagement: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState<number | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      planName: "",
      course: "",
      term: "",
      examType: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setOpen(false);
    form.reset();
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "upcoming":
        return "bg-blue-100 text-blue-800";
      case "completed":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleShowDetails = (planId: number) => {
    setSelectedPlanId(planId);
    setDetailsOpen(true);
  };

  const selectedPlan = dummyExamPlans.find(
    (plan) => plan.id === selectedPlanId
  );
  const selectedPlanDetails = dummyExamDetails.find(
    (d) => d.planId === selectedPlanId
  );

  const totalScoring =
    selectedPlanDetails?.exams.reduce((sum, exam) => sum + exam.scoring, 0) ||
    0;

  return (
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Exams Management</h1>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4" />
                Add Exam Plan
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Create New Exam Plan</DialogTitle>
              </DialogHeader>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="planName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Plan Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter plan name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="course"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Course</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a course" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="computer-science">
                              Computer Science
                            </SelectItem>
                            <SelectItem value="engineering">
                              Engineering
                            </SelectItem>
                            <SelectItem value="business">Business</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="term"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Term</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a term" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="term1">Term 1</SelectItem>
                            <SelectItem value="term2">Term 2</SelectItem>
                            <SelectItem value="term3">Term 3</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="examType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Exam Type</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select exam type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="midterm">Midterm</SelectItem>
                            <SelectItem value="final">Final</SelectItem>
                            <SelectItem value="practical">Practical</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex justify-end space-x-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      Create Plan
                    </Button>
                  </div>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Upcoming Exams
              </CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">
                Scheduled for this month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Exams</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45</div>
              <p className="text-xs text-muted-foreground">
                Across all courses
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Students Enrolled
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">250</div>
              <p className="text-xs text-muted-foreground">
                Eligible for exams
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Exams</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-md border">
                <div className="relative w-full overflow-auto">
                  <table className="w-full caption-bottom text-sm">
                    <thead className="[&_tr]:border-b">
                      <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                          Plan Name
                        </th>
                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                          Course
                        </th>
                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                          Term
                        </th>
                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                          Type
                        </th>
                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="[&_tr:last-child]:border-0">
                      {dummyExamPlans.map((plan) => (
                        <tr
                          key={plan.id}
                          className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                        >
                          <td className="p-4 align-middle font-medium">
                            {plan.name}
                          </td>
                          <td className="p-4 align-middle">{plan.course}</td>
                          <td className="p-4 align-middle">{plan.term}</td>
                          <td className="p-4 align-middle">{plan.examType}</td>
                          <td className="p-4 align-middle">
                            <div className="flex items-center gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                className="flex items-center gap-1"
                                onClick={() => handleShowDetails(plan.id)}
                              >
                                <Eye className="h-4 w-4" />
                                Show Details
                              </Button>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    className="h-8 w-8 p-0"
                                  >
                                    <MoreVertical className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem>
                                    <Edit className="mr-2 h-4 w-4" />
                                    Edit
                                  </DropdownMenuItem>
                                  <DropdownMenuItem className="text-red-600">
                                    <Trash className="mr-2 h-4 w-4" />
                                    Delete
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Details Modal */}
        <DetailsDialog open={detailsOpen} onOpenChange={setDetailsOpen}>
          <DetailsDialogContent className="max-w-2xl">
            <DetailsDialogHeader>
              <div className="flex items-center justify-between">
                <DetailsDialogTitle>
                  {selectedPlan ? selectedPlan.name : "Exam Plan Details"}
                </DetailsDialogTitle>
                <Button
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  + Add Exam
                </Button>
              </div>
            </DetailsDialogHeader>
            <div className="mb-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                <div>
                  <span className="font-semibold">Course:</span>{" "}
                  {selectedPlan?.course}
                </div>
                <div>
                  <span className="font-semibold">Term:</span>{" "}
                  {selectedPlan?.term}
                </div>
                <div>
                  <span className="font-semibold">Type:</span>{" "}
                  {selectedPlan?.examType}
                </div>
              </div>
            </div>
            <div className="rounded-md border">
              <div className="relative w-full overflow-auto">
                <table className="w-full caption-bottom text-sm">
                  <thead className="[&_tr]:border-b">
                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                        Exams
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                        Exam Mode
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                        Scoring
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="[&_tr:last-child]:border-0">
                    {selectedPlanDetails?.exams.map((exam, idx) => (
                      <tr
                        key={idx}
                        className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                      >
                        <td className="p-4 align-middle font-medium">
                          {exam.name}
                        </td>
                        <td className="p-4 align-middle">{exam.mode}</td>
                        <td className="p-4 align-middle">{exam.scoring}</td>
                        <td className="p-4 align-middle">
                          <Button variant="link" size="sm">
                            Edit exam
                          </Button>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-8 w-8 p-0">
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>Edit exam</DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600">
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </td>
                      </tr>
                    ))}
                    {/* Totals row */}
                    <tr className="bg-gray-50 font-semibold">
                      <td className="p-4 align-middle">
                        Total <span className="font-bold">Marks</span>
                      </td>
                      <td className="p-4 align-middle">Final Term</td>
                      <td className="p-4 align-middle">{totalScoring}</td>
                      <td className="p-4 align-middle">
                        <Button variant="link" size="sm">
                          Edit exam
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </DetailsDialogContent>
        </DetailsDialog>
      </div>
  );
};

export default ExamsManagement;
