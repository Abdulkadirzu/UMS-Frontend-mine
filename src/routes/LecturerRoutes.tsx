import React from "react";
import { Route } from "react-router-dom";
import ProtectedRoute from "@/components/ProtectedRoute";
import SidebarLayout from "@/components/layout/SidebarLayout";

// Lecturer Dashboard
import LecturerDashboard from "@/pages/dashboards/LecturerDashboard";

// Lecturer Academic Pages
import LecturerCoursesPage from "@/pages/courses/LecturerCoursesPage";
import ExamsPage from "@/pages/students/ExamsPage";
import SubjectsPage from "@/pages/lecturer/SubjectsPage";
import DepartmentsPage from "@/pages/lecturer/DepartmentsPage";
import AssignmentManagement from "@/pages/lecturer/AssignmentManagement";
import OnlineCATsPage from "@/pages/academic/OnlineCATsPage";
import OnlineClassesPage from "@/pages/academic/OnlineClassesPage";
import OnlineExamsPage from "@/pages/academic/OnlineExamsPage";

// Lecturer Timetable Pages
import TeacherTimetable from "@/pages/timetable/TeacherTimetable";
import ViewTimetables from "@/pages/timetable/ViewTimetables";

export const LecturerRoutes = [
  // Dashboard
  <Route
    key="lecturer-dashboard"
    path="/dashboard/lecturer"
    element={
      <ProtectedRoute roles={["lecturer"]}>
        <SidebarLayout>
          <LecturerDashboard />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,

  // Academic Routes
  <Route
    key="lecturer-courses"
    path="/dashboard/lecturer/courses"
    element={
      <ProtectedRoute roles={["lecturer"]}>
        <SidebarLayout>
          <LecturerCoursesPage />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="lecturer-exams"
    path="/dashboard/lecturer/exams"
    element={
      <ProtectedRoute roles={["lecturer"]}>
        <SidebarLayout>
          <ExamsPage />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="lecturer-subjects"
    path="/dashboard/lecturer/subjects"
    element={
      <ProtectedRoute roles={["lecturer"]}>
        <SidebarLayout>
          <SubjectsPage />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="lecturer-departments"
    path="/dashboard/lecturer/departments"
    element={
      <ProtectedRoute roles={["lecturer"]}>
        <SidebarLayout>
          <DepartmentsPage />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="lecturer-assignments"
    path="/dashboard/lecturer/assignments"
    element={
      <ProtectedRoute roles={["lecturer"]}>
        <SidebarLayout>
          <AssignmentManagement />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="lecturer-online-cats"
    path="/dashboard/lecturer/online-cats"
    element={
      <ProtectedRoute roles={["lecturer"]}>
        <SidebarLayout>
          <OnlineCATsPage />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="lecturer-online-classes"
    path="/dashboard/lecturer/online-classes"
    element={
      <ProtectedRoute roles={["lecturer"]}>
        <SidebarLayout>
          <OnlineClassesPage />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="lecturer-online-exams"
    path="/dashboard/lecturer/online-exams"
    element={
      <ProtectedRoute roles={["lecturer"]}>
        <SidebarLayout>
          <OnlineExamsPage />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,

  // Timetable Routes
  <Route
    key="lecturer-timetable"
    path="/dashboard/lecturer/timetable"
    element={
      <ProtectedRoute roles={["lecturer"]}>
        <SidebarLayout>
          <TeacherTimetable />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="lecturer-view-timetables"
    path="/dashboard/lecturer/timetable/view"
    element={
      <ProtectedRoute roles={["lecturer"]}>
        <SidebarLayout>
          <ViewTimetables />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
];
