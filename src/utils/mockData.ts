// Mock data for the application

import { Student, Lecturer, Course, Attendance, Grade, User } from "../types";

// Students
export const students: Student[] = [
  {
    id: 1,
    name: "John Doe",
    rollNumber: "STU001",
    email: "john.doe@example.com",
    phone: "+254 712 345 678",
    class: "Year 3",
    program: "Computer Science",
    status: "Active",
    feesPaid: 35000,
    feesTotal: 50000,
    enrollmentYear: "2022",
    graduationYear: "2026",
    gpa: "3.75",
    creditsCompleted: 48,
    totalCredits: 120,
    dob: "15 May 2000",
    gender: "Male",
    nationality: "Kenyan",
    idNumber: "12345678",
    address: "University Housing, Block B",
    emergencyContact: {
      name: "Jane Doe",
      relationship: "Parent",
      phone: "+254 723 456 789",
      email: "jane.doe@example.com",
    },
    advisor: {
      name: "Dr. Jane Smith",
      department: "Computer Science",
      email: "j.smith@university.edu",
      officeHours: "Mon, Wed: 10am-12pm",
    },
    enrolledCourses: ["CS101", "MATH203", "PHY101"],
  },
  {
    id: 2,
    name: "Jane Smith",
    rollNumber: "STU002",
    email: "jane.smith@example.com",
    phone: "+254 723 567 890",
    class: "Year 2",
    program: "Business Administration",
    status: "Active",
    feesPaid: 25000,
    feesTotal: 45000,
    enrollmentYear: "2023",
    graduationYear: "2027",
    gpa: "3.9",
    creditsCompleted: 32,
    totalCredits: 120,
    enrolledCourses: ["BUS101", "ECON201"],
  },
  {
    id: 3,
    name: "Mike Johnson",
    rollNumber: "STU003",
    email: "mike.j@example.com",
    phone: "+254 734 678 901",
    class: "Year 4",
    program: "Mechanical Engineering",
    status: "Inactive",
    feesPaid: 15000,
    feesTotal: 55000,
    enrollmentYear: "2021",
    graduationYear: "2025",
    gpa: "3.2",
    creditsCompleted: 78,
    totalCredits: 140,
    enrolledCourses: ["ME301", "ME302"],
  },
  {
    id: 4,
    name: "Sarah Williams",
    rollNumber: "STU004",
    email: "sarah.w@example.com",
    phone: "+254 745 789 012",
    class: "Year 1",
    program: "Medicine",
    status: "Active",
    feesPaid: 60000,
    feesTotal: 80000,
    enrollmentYear: "2024",
    graduationYear: "2030",
    gpa: "4.0",
    creditsCompleted: 16,
    totalCredits: 180,
    enrolledCourses: ["MED101"],
  },
  {
    id: 5,
    name: "David Brown",
    rollNumber: "STU005",
    email: "david.b@example.com",
    phone: "+254 756 890 123",
    class: "Year 3",
    program: "Law",
    status: "Active",
    feesPaid: 40000,
    feesTotal: 60000,
    enrollmentYear: "2022",
    graduationYear: "2026",
    gpa: "3.5",
    creditsCompleted: 60,
    totalCredits: 140,
    enrolledCourses: ["LAW201", "LAW202"],
  },
];

// Lecturers
export const lecturers: Lecturer[] = [
  {
    id: 1,
    name: "Dr. Robert Chen",
    email: "r.chen@example.com",
    employeeId: "LEC001",
    department: "Computer Science",
    specialization: "Machine Learning",
    status: "Active",
  },
  {
    id: 2,
    name: "Prof. Amanda Garcia",
    email: "a.garcia@example.com",
    employeeId: "LEC002",
    department: "Business",
    specialization: "Marketing",
    status: "Active",
  },
  {
    id: 3,
    name: "Dr. James Wilson",
    email: "j.wilson@example.com",
    employeeId: "LEC003",
    department: "Engineering",
    specialization: "Structural Engineering",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Prof. Emily Taylor",
    email: "e.taylor@example.com",
    employeeId: "LEC004",
    department: "Medicine",
    specialization: "Cardiology",
    status: "Active",
  },
  {
    id: 5,
    name: "Dr. Michael Lee",
    email: "m.lee@example.com",
    employeeId: "LEC005",
    department: "Law",
    specialization: "Criminal Law",
    status: "Active",
  },
];

// Alias lecturers as staff for compatibility
export const staff = lecturers;

// Mock users (can be students, staff, or admins)
export const users: User[] = [
  { id: "1", name: "Admin User", role: "admin", email: "admin@example.com" },
  {
    id: "2",
    name: "Lecturer User",
    role: "lecturer",
    email: "lecturer@example.com",
  },
  {
    id: "3",
    name: "Student User",
    role: "student",
    email: "student@example.com",
  },
  {
    id: "4",
    name: "Librarian User",
    role: "librarian",
    email: "librarian@example.com",
  },
  {
    id: "5",
    name: "Department User",
    role: "department",
    email: "department@example.com",
  },
];

// Mock programs
export const programs = [
  { id: 1, name: "Computer Science", duration: 4 },
  { id: 2, name: "Business Administration", duration: 4 },
  { id: 3, name: "Mechanical Engineering", duration: 5 },
];

// Mock books
export const books = [
  {
    id: 1,
    title: "Introduction to Algorithms",
    author: "Cormen",
    isbn: "9780262033848",
    category: "Computer Science",
    totalCopies: 5,
    availableCopies: 3,
  },
  {
    id: 2,
    title: "Marketing 101",
    author: "Kotler",
    isbn: "9780132102926",
    category: "Business",
    totalCopies: 3,
    availableCopies: 1,
  },
];

// Mock book loans
export const bookLoans = [
  {
    id: 1,
    bookId: 1,
    studentId: 1,
    dueDate: "2025-06-01",
    returned: false,
    status: "Borrowed",
  },
  {
    id: 2,
    bookId: 2,
    studentId: 2,
    dueDate: "2025-06-10",
    returned: true,
    status: "Returned",
  },
];

// Mock payments
export const payments = [
  {
    id: 1,
    studentId: 1,
    amount: 10000,
    date: "2025-05-01",
    method: "Mpesa",
    paymentDate: "2025-05-01",
    reference: "MPESA123",
    paymentMethod: "Mpesa",
    status: "Completed",
  },
  {
    id: 2,
    studentId: 2,
    amount: 15000,
    date: "2025-05-03",
    method: "Bank",
    paymentDate: "2025-05-03",
    reference: "BANK456",
    paymentMethod: "Bank",
    status: "Pending",
  },
];

// Mock invoices
export const invoices = [
  {
    id: 1,
    studentId: 1,
    amount: 20000,
    dueDate: "2025-06-15",
    status: "unpaid",
  },
  { id: 2, studentId: 2, amount: 25000, dueDate: "2025-06-20", status: "paid" },
];

// Courses
export const courses: Course[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Computer Science",
    instructor: "Dr. Robert Chen",
    schedule: "Mon, Wed 9:00 AM - 10:30 AM",
    credits: 3,
    department: "Computer Science",
    description: "An introductory course to computer science fundamentals",
    prerequisites: [],
    capacity: 30,
    enrolled: 25,
  },
  {
    id: 2,
    code: "MATH203",
    name: "Advanced Mathematics",
    instructor: "Prof. Amanda Garcia",
    schedule: "Tue, Thu 11:00 AM - 12:30 PM",
    credits: 4,
    department: "Mathematics",
    description: "Advanced mathematical concepts and applications",
    prerequisites: ["MATH101"],
    capacity: 25,
    enrolled: 20,
  },
  {
    id: 3,
    code: "PHY101",
    name: "Introduction to Physics",
    instructor: "Dr. James Wilson",
    schedule: "Mon, Wed 2:00 PM - 3:30 PM",
    credits: 4,
    department: "Physics",
    description: "Basic principles of physics and their applications",
    prerequisites: [],
    capacity: 35,
    enrolled: 30,
  },
  {
    id: 4,
    code: "BUS101",
    name: "Introduction to Business",
    instructor: "Prof. Emily Taylor",
    schedule: "Tue, Thu 9:00 AM - 10:30 AM",
    credits: 3,
    department: "Business",
    description: "Fundamentals of business and management",
    prerequisites: [],
    capacity: 40,
    enrolled: 35,
  },
  {
    id: 5,
    code: "ECON201",
    name: "Microeconomics",
    instructor: "Dr. Michael Lee",
    schedule: "Mon, Wed 11:00 AM - 12:30 PM",
    credits: 3,
    department: "Economics",
    description: "Study of individual economic behavior",
    prerequisites: ["ECON101"],
    capacity: 30,
    enrolled: 28,
  },
];

// Attendance records
export const attendance: Attendance[] = [
  {
    id: 1,
    studentId: 1,
    courseId: 1,
    date: "2025-05-15",
    status: "present",
  },
  {
    id: 2,
    studentId: 1,
    courseId: 1,
    date: "2025-05-17",
    status: "absent",
  },
  {
    id: 3,
    studentId: 1,
    courseId: 2,
    date: "2025-05-16",
    status: "present",
  },
  {
    id: 4,
    studentId: 2,
    courseId: 2,
    date: "2025-05-15",
    status: "present",
  },
  {
    id: 5,
    studentId: 3,
    courseId: 3,
    date: "2025-05-17",
    status: "late",
  },
];

// Grades
export const grades: Grade[] = [
  {
    id: 1,
    studentId: 1,
    courseId: 1,
    assignment: "Midterm Exam",
    score: 85,
    maxScore: 100,
    date: "2025-04-10",
    comments: "Good work, but could improve on algorithm efficiency.",
  },
  {
    id: 2,
    studentId: 1,
    courseId: 1,
    assignment: "Final Project",
    score: 92,
    maxScore: 100,
    date: "2025-05-15",
    comments: "Excellent implementation and documentation.",
  },
  {
    id: 3,
    studentId: 2,
    courseId: 2,
    assignment: "Case Study Analysis",
    score: 88,
    maxScore: 100,
    date: "2025-04-20",
    comments: "Good analysis, needs to improve citations.",
  },
  {
    id: 4,
    studentId: 3,
    courseId: 3,
    assignment: "Laboratory Report",
    score: 78,
    maxScore: 100,
    date: "2025-04-25",
    comments: "Calculations are accurate, but report needs better formatting.",
  },
  {
    id: 5,
    studentId: 4,
    courseId: 4,
    assignment: "Practical Examination",
    score: 95,
    maxScore: 100,
    date: "2025-05-05",
    comments: "Outstanding performance and clinical reasoning.",
  },
];

// Mock news data
export const news = [
  {
    id: 1,
    title: "Semester Exams Schedule Released",
    content:
      "The examination timetable for the current semester has been released. Please check the Exams section for your schedule.",
    date: "2024-06-01",
    tag: "Exams",
    image: null,
  },
  {
    id: 2,
    title: "Library Renovation Completed",
    content:
      "The university library renovation is now complete. Students are welcome to use the new study spaces and resources.",
    date: "2024-05-28",
    tag: "Library",
    image: null,
  },
  {
    id: 3,
    title: "HELB Application Deadline",
    content:
      "The deadline for HELB loan applications is June 10th. Ensure you submit your application on time.",
    date: "2024-05-25",
    tag: "Finance",
    image: null,
  },
];
