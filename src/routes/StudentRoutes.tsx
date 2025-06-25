import React from "react";
import { Route } from "react-router-dom";
import ProtectedRoute from "@/components/ProtectedRoute";
import SidebarLayout from "@/components/layout/SidebarLayout";

// Student Dashboard
import StudentDashboard from "@/pages/dashboards/StudentDashboard";

// Student Academic Pages
import Courses from "@/pages/student/Courses";
import Exams from "@/pages/student/Exams";
import Results from "@/pages/student/Results";
import FailedExams from "@/pages/student/FailedExams";
import Timetable from "@/pages/student/Timetable";
import Assignments from "@/pages/student/Assignments";

// Student Fees Pages
import FeesStatement from "@/pages/student/FeesStatement";
import Receipts from "@/pages/students/Receipts";
import FeesStructure from "@/pages/students/FeesStructure";
import PayFees from "@/pages/students/PayFees";

// Student Library Pages
import LibraryPage from "@/pages/students/LibraryPage";
import BorrowedBooks from "@/pages/students/BorrowedBooks";
import LibraryPenalties from "@/pages/students/LibraryPenalties";

// Student Accommodation Pages
import HostelBooking from "@/pages/accommodation/HostelBooking";
import HostelClearance from "@/pages/accommodation/HostelClearance";

// Student Other Pages
import NewsPage from "@/pages/news/NewsPage";
import EventsPage from "@/pages/events/EventsPage";

export const StudentRoutes = [
  // Dashboard
  <Route
    key="student-dashboard"
    path="/dashboard/student"
    element={
      <ProtectedRoute roles={["student"]}>
        <SidebarLayout>
          <StudentDashboard />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,

  // Academic Routes
  <Route
    key="student-courses"
    path="/academics/courses"
    element={
      <ProtectedRoute roles={["student"]}>
        <SidebarLayout>
          <Courses />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="student-exams"
    path="/academics/exams"
    element={
      <ProtectedRoute roles={["student"]}>
        <SidebarLayout>
          <Exams />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="student-results"
    path="/academics/results"
    element={
      <ProtectedRoute roles={["student"]}>
        <SidebarLayout>
          <Results />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="student-failed-exams"
    path="/academics/failed"
    element={
      <ProtectedRoute roles={["student"]}>
        <SidebarLayout>
          <FailedExams />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="student-timetable"
    path="/academics/timetable"
    element={
      <ProtectedRoute roles={["student"]}>
        <SidebarLayout>
          <Timetable />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="student-assignments"
    path="/academics/assignments"
    element={
      <ProtectedRoute roles={["student"]}>
        <SidebarLayout>
          <Assignments />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,

  // Fees Routes
  <Route
    key="student-fees-statement"
    path="/fees-statement"
    element={
      <ProtectedRoute roles={["student"]}>
        <SidebarLayout>
          <FeesStatement />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="student-receipts"
    path="/receipts"
    element={
      <ProtectedRoute roles={["student"]}>
        <SidebarLayout>
          <Receipts />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="student-fees-structure"
    path="/fees-structure"
    element={
      <ProtectedRoute roles={["student"]}>
        <SidebarLayout>
          <FeesStructure />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="student-pay-fees"
    path="/pay-fees"
    element={
      <ProtectedRoute roles={["student"]}>
        <SidebarLayout>
          <PayFees />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,

  // Library Routes
  <Route
    key="student-library"
    path="/library"
    element={
      <ProtectedRoute roles={["student"]}>
        <SidebarLayout>
          <LibraryPage />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="student-borrowed-books"
    path="/library/borrowed"
    element={
      <ProtectedRoute roles={["student"]}>
        <SidebarLayout>
          <BorrowedBooks />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="student-library-penalties"
    path="/library/penalties"
    element={
      <ProtectedRoute roles={["student"]}>
        <SidebarLayout>
          <LibraryPenalties />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,

  // Accommodation Routes
  <Route
    key="student-hostel-booking"
    path="/student/hostel/booking"
    element={
      <ProtectedRoute roles={["student"]}>
        <SidebarLayout>
          <HostelBooking />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="student-hostel-clearance"
    path="/student/hostel/clearance"
    element={
      <ProtectedRoute roles={["student"]}>
        <SidebarLayout>
          <HostelClearance />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,

  // Other Routes
  <Route
    key="student-news"
    path="/news"
    element={
      <ProtectedRoute roles={["student"]}>
        <SidebarLayout>
          <NewsPage />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="student-news-announcements"
    path="/news/announcements"
    element={
      <ProtectedRoute roles={["student"]}>
        <SidebarLayout>
          <NewsPage type="announcements" />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="student-events"
    path="/events"
    element={
      <ProtectedRoute roles={["student"]}>
        <SidebarLayout>
          <EventsPage />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="student-events-past"
    path="/events/past"
    element={
      <ProtectedRoute roles={["student"]}>
        <SidebarLayout>
          <EventsPage type="past" />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
];
