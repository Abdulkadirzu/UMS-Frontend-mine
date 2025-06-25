import React from "react";
import { Route } from "react-router-dom";
import ProtectedRoute from "@/components/ProtectedRoute";
import SidebarLayout from "@/components/layout/SidebarLayout";

// Admin Dashboard
import AdminDashboard from "@/pages/dashboards/AdminDashboard";

// Course Management
import AllCourses from "@/pages/admin/course-management/AllCourses";
import CourseSubjects from "@/pages/admin/course-management/CourseSubjects";
import AcademicYears from "@/pages/admin/academic-years/AcademicYears";
import Admissions from "@/pages/admin/admissions/Admissions";
import BatchManagement from "@/pages/admin/batch-management/BatchManagement";

// Staff Management
import Staff from "@/pages/admin/staff-management/Staff";
import Lecturers from "@/pages/admin/staff-management/Lecturers";
import Departments from "@/pages/admin/staff-management/Departments";

// Academic Management
import SubjectCenter from "@/pages/admin/subject-center/SubjectCenter";
import Assignments from "@/pages/admin/assignments/Assignments";
import Certificates from "@/pages/admin/certificates/Certificates";
import Gradebooks from "@/pages/admin/gradebooks/Gradebooks";
import Attendance from "@/pages/admin/attendance/Attendance";
import Discipline from "@/pages/admin/discipline/Discipline";
import Remarks from "@/pages/admin/remarks/Remarks";
import ExamsManagement from "@/pages/admin/exams-management/ExamsManagement";

// Timetable Management
import TimetableAllocations from "@/pages/admin/timetable-allocations/TimetableAllocations";
import ManageTimetables from "@/pages/timetable/ManageTimetables";
import ViewTimetables from "@/pages/timetable/ViewTimetables";
import WorkAllotment from "@/pages/timetable/WorkAllotment";
import InstitutionalTimetable from "@/pages/timetable/InstitutionalTimetable";
import TimetableTracker from "@/pages/timetable/TimetableTracker";
import ClassRoomAllocation from "@/pages/timetable/ClassRoomAllocation";
import ManageSubjects from "@/pages/timetable/ManageSubjects";
import TimetableSettings from "@/pages/timetable/Settings";
import ClassTimingSets from "@/pages/timetable/ClassTimingSets";

// Student Management
import StudentDetails from "@/pages/students/StudentDetails";
import StudentList from "@/pages/students/StudentList";

// Other Admin Features
import CalendarPage from "@/pages/admin/calendar/Calendar";
import IDCards from "@/pages/admin/id-cards/IDCards";
import Reports from "@/pages/admin/reports/Reports";
import Settings from "@/pages/admin/settings/Settings";

export const AdminRoutes = [
  // Dashboard
  <Route
    key="admin-dashboard"
    path="/dashboard/admin"
    element={
      <ProtectedRoute roles={["admin"]}>
        <SidebarLayout>
          <AdminDashboard />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,

  // Course Management Routes
  <Route
    key="admin-courses"
    path="/admin/courses"
    element={
      <ProtectedRoute roles={["admin"]}>
        <SidebarLayout>
          <AllCourses />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="admin-course-subjects"
    path="/admin/courses/:courseId/subjects"
    element={
      <ProtectedRoute roles={["admin"]}>
        <SidebarLayout>
          <CourseSubjects />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="admin-academic-years"
    path="/admin/academic-years"
    element={
      <ProtectedRoute roles={["admin"]}>
        <SidebarLayout>
          <AcademicYears />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="admin-admissions"
    path="/admin/admissions"
    element={
      <ProtectedRoute roles={["admin"]}>
        <SidebarLayout>
          <Admissions />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="admin-batch-management"
    path="/admin/batch-management"
    element={
      <ProtectedRoute roles={["admin"]}>
        <SidebarLayout>
          <BatchManagement />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,

  // Staff Management Routes
  <Route
    key="admin-staff"
    path="/admin/staff"
    element={
      <ProtectedRoute roles={["admin"]}>
        <SidebarLayout>
          <Staff />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="admin-lecturers"
    path="/admin/lecturers"
    element={
      <ProtectedRoute roles={["admin"]}>
        <SidebarLayout>
          <Lecturers />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="admin-departments"
    path="/admin/departments"
    element={
      <ProtectedRoute roles={["admin"]}>
        <SidebarLayout>
          <Departments />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,

  // Academic Management Routes
  <Route
    key="admin-subject-center"
    path="/admin/subject-center"
    element={
      <ProtectedRoute roles={["admin"]}>
        <SidebarLayout>
          <SubjectCenter />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="admin-assignments"
    path="/admin/assignments"
    element={
      <ProtectedRoute roles={["admin"]}>
        <SidebarLayout>
          <Assignments />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="admin-certificates"
    path="/admin/certificates"
    element={
      <ProtectedRoute roles={["admin"]}>
        <SidebarLayout>
          <Certificates />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="admin-gradebooks"
    path="/admin/gradebooks"
    element={
      <ProtectedRoute roles={["admin"]}>
        <SidebarLayout>
          <Gradebooks />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="admin-attendance"
    path="/admin/attendance"
    element={
      <ProtectedRoute roles={["admin"]}>
        <SidebarLayout>
          <Attendance />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="admin-discipline"
    path="/admin/discipline"
    element={
      <ProtectedRoute roles={["admin"]}>
        <SidebarLayout>
          <Discipline />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="admin-remarks"
    path="/admin/remarks"
    element={
      <ProtectedRoute roles={["admin"]}>
        <SidebarLayout>
          <Remarks />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="admin-exams"
    path="/admin/exams"
    element={
      <ProtectedRoute roles={["admin"]}>
        <SidebarLayout>
          <ExamsManagement />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,

  // Timetable Management Routes
  <Route
    key="admin-timetable-allocations"
    path="/admin/timetable/allocations"
    element={
      <ProtectedRoute roles={["admin"]}>
        <SidebarLayout>
          <TimetableAllocations />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="admin-timetable-manage"
    path="/admin/timetable/manage"
    element={
      <ProtectedRoute roles={["admin"]}>
        <SidebarLayout>
          <ManageTimetables />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="admin-timetable-view"
    path="/admin/timetable/view"
    element={
      <ProtectedRoute roles={["admin"]}>
        <SidebarLayout>
          <ViewTimetables />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="admin-timetable-work-allotment"
    path="/admin/timetable/work-allotment"
    element={
      <ProtectedRoute roles={["admin"]}>
        <SidebarLayout>
          <WorkAllotment />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="admin-timetable-institutional"
    path="/admin/timetable/institutional"
    element={
      <ProtectedRoute roles={["admin"]}>
        <SidebarLayout>
          <InstitutionalTimetable />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="admin-timetable-tracker"
    path="/admin/timetable/tracker"
    element={
      <ProtectedRoute roles={["admin"]}>
        <SidebarLayout>
          <TimetableTracker />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="admin-timetable-classroom"
    path="/admin/timetable/classroom"
    element={
      <ProtectedRoute roles={["admin"]}>
        <SidebarLayout>
          <ClassRoomAllocation />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="admin-timetable-subjects"
    path="/admin/timetable/subjects"
    element={
      <ProtectedRoute roles={["admin"]}>
        <SidebarLayout>
          <ManageSubjects />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="admin-timetable-settings"
    path="/admin/timetable/settings"
    element={
      <ProtectedRoute roles={["admin"]}>
        <SidebarLayout>
          <TimetableSettings />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="admin-timetable-timing"
    path="/admin/timetable/timing"
    element={
      <ProtectedRoute roles={["admin"]}>
        <SidebarLayout>
          <ClassTimingSets />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,

  // Student Management Routes
  <Route
    key="admin-student-details"
    path="/admin/students/details"
    element={
      <ProtectedRoute roles={["admin"]}>
        <SidebarLayout>
          <StudentDetails />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="admin-student-list"
    path="/admin/students/list"
    element={
      <ProtectedRoute roles={["admin"]}>
        <SidebarLayout>
          <StudentList />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,

  // Other Admin Routes
  <Route
    key="admin-calendar"
    path="/admin/calendar"
    element={
      <ProtectedRoute roles={["admin"]}>
        <SidebarLayout>
          <CalendarPage />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="admin-id-cards"
    path="/admin/id-cards"
    element={
      <ProtectedRoute roles={["admin"]}>
        <SidebarLayout>
          <IDCards />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="admin-reports"
    path="/admin/reports"
    element={
      <ProtectedRoute roles={["admin"]}>
        <SidebarLayout>
          <Reports />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="admin-settings"
    path="/admin/settings"
    element={
      <ProtectedRoute roles={["admin"]}>
        <SidebarLayout>
          <Settings />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
];
