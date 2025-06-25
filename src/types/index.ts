// Define all the types used in the application

// User roles
export type Role =
  | "student"
  | "lecturer"
  | "admin"
  | "superadmin"
  | "finance"
  | "librarian"
  | "support"
  | "hr"
  | "department";

// User
export interface User {
  id: string | number;
  name: string;
  email: string;
  role: Role;
  avatar?: string;
  twoFactorEnabled?: boolean;
  location?: {
    type: "Point";
    coordinates: [number, number];
  };
}

// Student
export interface Student {
  id: number;
  name: string;
  rollNumber: string;
  email: string;
  phone: string;
  class: string;
  program: string;
  status: "Active" | "Inactive";
  feesPaid: number;
  feesTotal: number;
  enrollmentYear?: string;
  graduationYear?: string;
  gpa?: string;
  creditsCompleted?: number;
  totalCredits?: number;
  dob?: string;
  gender?: string;
  nationality?: string;
  idNumber?: string;
  address?: string;
  emergencyContact?: {
    name: string;
    relationship: string;
    phone: string;
    email: string;
  };
  advisor?: {
    name: string;
    department: string;
    email: string;
    officeHours: string;
  };
  enrolledCourses?: string[];
}

// Lecturer
export interface Lecturer {
  id: number;
  name: string;
  email: string;
  employeeId: string;
  department: string;
  specialization: string;
  status: "Active" | "Inactive";
  assignedCourses?: string[];
}

// Course
export interface Course {
  id: number;
  code: string;
  name: string;
  instructor: string;
  schedule: string;
  credits: number;
  department: string;
  description: string;
  prerequisites: string[];
  capacity: number;
  enrolled: number;
}

// Attendance
export interface Attendance {
  id: number;
  studentId: number;
  courseId: number;
  date: string;
  status: "present" | "absent" | "late";
}

// Grade
export interface Grade {
  id: number;
  studentId: number;
  courseId: number;
  assignment: string;
  score: number;
  maxScore: number;
  date: string;
  comments?: string;
}

// Exam
export interface Exam {
  id: number;
  courseCode: string;
  courseName: string;
  examDate: string;
  startTime: string;
  duration: string;
  venue: string;
  status: "upcoming" | "completed";
}

// Book
export interface Book {
  id: number;
  title: string;
  author: string;
  isbn: string;
  category: string;
  totalCopies: number;
  availableCopies: number;
}

// BookLoan
export interface BookLoan {
  id: number;
  bookId: number;
  studentId: number;
  dueDate: string;
  returned: boolean;
  status: "Borrowed" | "Returned" | "Overdue";
}

// Payment
export interface Payment {
  id: number;
  studentId: number;
  amount: number;
  date: string;
  method: string;
  paymentDate: string;
  reference: string;
  paymentMethod: string;
  status: "Completed" | "Pending" | "Failed";
}
