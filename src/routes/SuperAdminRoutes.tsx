import React from "react";
import { Route } from "react-router-dom";
import ProtectedRoute from "@/components/ProtectedRoute";
import SidebarLayout from "@/components/layout/SidebarLayout";
import SuperAdminDashboard from "@/pages/superadmin/SuperAdminDashboard";
import AcademicYears from "@/pages/superadmin/academics/AcademicYears";
import CourseManagement from "@/pages/superadmin/academics/CourseManagement";
import BatchManagement from "@/pages/admin/batch-management/BatchManagement";
import SubjectCenter from "@/pages/admin/subject-center/SubjectCenter";
import Calendar from "@/pages/admin/calendar/Calendar";
import ExamsManagement from "@/pages/admin/exams-management/ExamsManagement";
import Assignments from "@/pages/admin/assignments/Assignments";
import Certificates from "@/pages/admin/certificates/Certificates";
import IDCards from "@/pages/admin/id-cards/IDCards";
import Gradebooks from "@/pages/admin/gradebooks/Gradebooks";
import Attendance from "@/pages/admin/attendance/Attendance";
import Discipline from "@/pages/admin/discipline/Discipline";
import Remarks from "@/pages/admin/remarks/Remarks";

// Timetable & Allocations

// Students

// Staff Management
import LecturerManagement from "@/pages/admin/staff/LecturerManagement";
import StaffManagement from "@/pages/admin/staff/StaffManagement";

// Library
import LibraryBooks from "@/pages/admin/library/Books";
import LibrarySearch from "@/pages/admin/library/Search";
import LibraryReturn from "@/pages/admin/library/Return";
import LibraryBarcode from "@/pages/admin/library/Barcode";
import LibrarySettings from "@/pages/admin/library/Settings";
import LibraryRenewal from "@/pages/admin/library/Renewal";
import LibraryFines from "@/pages/admin/library/Fines";
import LibraryIssue from "@/pages/admin/library/Issue";
import LibraryTags from "@/pages/admin/library/Tags";

// Finance
import FinanceOverview from "@/pages/admin/finance/Overview";
import FinancePayments from "@/pages/admin/finance/Payments";
import FinanceInvoices from "@/pages/admin/finance/Invoices";
import FinanceReports from "@/pages/admin/finance/Reports";
import FinancePayroll from "@/pages/admin/finance/Payroll";
import FinanceExpenses from "@/pages/admin/finance/Expenses";
import FinanceBudget from "@/pages/admin/finance/Budget";
import FinanceTax from "@/pages/admin/finance/Tax";
import FinanceGrants from "@/pages/admin/finance/Grants";
import FinanceDonations from "@/pages/admin/finance/Donations";
import FinanceSettings from "@/pages/admin/finance/Settings";
import FinanceScholarships from "@/pages/admin/finance/Scholarships";

// Reports & Settings

import ManageTimetables from "@/pages/timetable/ManageTimetables";
import ClassTimingSets from "@/pages/timetable/ClassTimingSets";
import ViewTimetables from "@/pages/timetable/ViewTimetables";
import TeacherTimetable from "@/pages/timetable/TeacherTimetable";
import InstitutionalTimetable from "@/pages/timetable/InstitutionalTimetable";
import WorkAllotment from "@/pages/timetable/WorkAllotment";
import TimetableTracker from "@/pages/timetable/TimetableTracker";
import ManageSubjects from "@/pages/timetable/ManageSubjects";
import ClassRoomAllocation from "@/pages/timetable/ClassRoomAllocation";
import Settings from "@/pages/admin/settings/Settings";
import StudentDetails from "@/pages/students/StudentDetails";
import Admissions from "@/pages/admin/admissions/Admissions";
import TimetableAllocations from "@/pages/admin/timetable-allocations/TimetableAllocations";
import Reports from "@/pages/admin/reports/Reports";
import NewsPage from "@/pages/news/NewsPage";
import CreateEvent from "@/pages/events/CreateEvent";
import DepartmentManagement from "@/pages/admin/staff/DepartmentManagement";
import LibraryMovement from "@/pages/admin/library/Movement";
import LibraryDetails from "@/pages/admin/library/Details";
import ViewEvents from "@/pages/events/ViewEvents";

// News & Events

export const SuperAdminRoutes = (
  <>
    {/* Dashboard */}
    <Route
      path="/dashboard/superadmin"
      element={
        <ProtectedRoute>
          <SidebarLayout>
            <SuperAdminDashboard />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />

    {/* Academics */}
    <Route
      path="/academic-years"
      element={
        <ProtectedRoute>
          <SidebarLayout>
            <AcademicYears />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/course-management"
      element={
        <ProtectedRoute>
          <SidebarLayout>
            <CourseManagement />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/batch-management"
      element={
        <ProtectedRoute>
          <SidebarLayout>
            <BatchManagement />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/subject-center"
      element={
        <ProtectedRoute>
          <SidebarLayout>
            <SubjectCenter />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/calendar"
      element={
        <ProtectedRoute>
          <SidebarLayout>
            <Calendar />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/exams-management"
      element={
        <ProtectedRoute>
          <SidebarLayout>
            <ExamsManagement />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/assignments"
      element={
        <ProtectedRoute>
          <SidebarLayout>
            <Assignments />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/certificates"
      element={
        <ProtectedRoute>
          <SidebarLayout>
            <Certificates />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/id-cards"
      element={
        <ProtectedRoute>
          <SidebarLayout>
            <IDCards />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/gradebooks"
      element={
        <ProtectedRoute>
          <SidebarLayout>
            <Gradebooks />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/attendance"
      element={
        <ProtectedRoute>
          <SidebarLayout>
            <Attendance />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/discipline"
      element={
        <ProtectedRoute>
          <SidebarLayout>
            <Discipline />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/remarks"
      element={
        <ProtectedRoute>
          <SidebarLayout>
            <Remarks />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />

    {/* Timetable & Allocations */}
    <Route
      path="/timetable/class-timing-sets"
      element={
        <ProtectedRoute>
          <SidebarLayout>
            <ClassTimingSets />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/timetable/manage"
      element={
        <ProtectedRoute>
          <SidebarLayout>
            <ManageTimetables />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/timetable/view"
      element={
        <ProtectedRoute>
          <SidebarLayout>
            <ViewTimetables />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/timetable/teacher"
      element={
        <ProtectedRoute>
          <SidebarLayout>
            <TeacherTimetable />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/timetable/work-allotment"
      element={
        <ProtectedRoute>
          <SidebarLayout>
            <WorkAllotment />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/timetable/institutional"
      element={
        <ProtectedRoute>
          <SidebarLayout>
            <InstitutionalTimetable />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/timetable/tracker"
      element={
        <ProtectedRoute>
          <SidebarLayout>
            <TimetableTracker />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/timetable/classroom-allocation"
      element={
        <ProtectedRoute>
          <SidebarLayout>
            <ClassRoomAllocation />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/timetable/subjects"
      element={
        <ProtectedRoute>
          <SidebarLayout>
            <ManageSubjects />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/timetable/settings"
      element={
        <ProtectedRoute>
          <SidebarLayout>
            <TimetableAllocations />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />

    {/* Students */}
    <Route
      path="/students/details"
      element={
        <ProtectedRoute>
          <SidebarLayout>
            <StudentDetails />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/students/admissions"
      element={
        <ProtectedRoute>
          <SidebarLayout>
            <Admissions />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />

    {/* Staff Management */}
    <Route
      path="/lecturer-management"
      element={
        <ProtectedRoute>
          <SidebarLayout>
            <LecturerManagement />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/staff-management"
      element={
        <ProtectedRoute>
          <SidebarLayout>
            <StaffManagement />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/department-management"
      element={
        <ProtectedRoute>
          <SidebarLayout>
            <DepartmentManagement />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />

    {/* Library */}
    <Route
      path="/library/books"
      element={
        <ProtectedRoute>
          <SidebarLayout>
            <LibraryBooks />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/library/search"
      element={
        <ProtectedRoute>
          <SidebarLayout>
            <LibrarySearch />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/library/return"
      element={
        <ProtectedRoute>
          <SidebarLayout>
            <LibraryReturn />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/library/issue"
      element={
        <ProtectedRoute>
          <SidebarLayout>
            <LibraryIssue />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/library/barcode"
      element={
        <ProtectedRoute>
          <SidebarLayout>
            <LibraryBarcode />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/library/settings"
      element={
        <ProtectedRoute>
          <SidebarLayout>
            <LibrarySettings />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/library/movement"
      element={
        <ProtectedRoute>
          <SidebarLayout>
            <LibraryMovement />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/library/renewal"
      element={
        <ProtectedRoute>
          <SidebarLayout>
            <LibraryRenewal />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/library/details"
      element={
        <ProtectedRoute>
          <SidebarLayout>
            <LibraryDetails />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/library/fines"
      element={
        <ProtectedRoute>
          <SidebarLayout>
            <LibraryFines />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/library/tags"
      element={
        <ProtectedRoute>
          <SidebarLayout>
            <LibraryTags />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />

    {/* Finance */}
    <Route
      path="/finance"
      element={
        <ProtectedRoute>
          <SidebarLayout>
            <FinanceOverview />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/finance/payments"
      element={
        <ProtectedRoute>
          <SidebarLayout>
            <FinancePayments />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/finance/invoices"
      element={
        <ProtectedRoute>
          <SidebarLayout>
            <FinanceInvoices />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/finance/reports"
      element={
        <ProtectedRoute>
          <SidebarLayout>
            <FinanceReports />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/finance/payroll"
      element={
        <ProtectedRoute>
          <SidebarLayout>
            <FinancePayroll />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/finance/expenses"
      element={
        <ProtectedRoute>
          <SidebarLayout>
            <FinanceExpenses />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/finance/budget"
      element={
        <ProtectedRoute>
          <SidebarLayout>
            <FinanceBudget />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/finance/tax"
      element={
        <ProtectedRoute>
          <SidebarLayout>
            <FinanceTax />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/finance/scholarships"
      element={
        <ProtectedRoute>
          <SidebarLayout>
            <FinanceScholarships />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/finance/grants"
      element={
        <ProtectedRoute>
          <SidebarLayout>
            <FinanceGrants />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/finance/donations"
      element={
        <ProtectedRoute>
          <SidebarLayout>
            <FinanceDonations />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/finance/settings"
      element={
        <ProtectedRoute>
          <SidebarLayout>
            <FinanceSettings />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />

    {/* Reports & Settings */}
    <Route
      path="/reports"
      element={
        <ProtectedRoute>
          <SidebarLayout>
            <Reports />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/settings"
      element={
        <ProtectedRoute>
          <SidebarLayout>
            <Settings />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />

    {/* News & Events */}
    <Route
      path="/news"
      element={
        <ProtectedRoute>
          <SidebarLayout>
            <NewsPage />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/news/announcements"
      element={
        <ProtectedRoute>
          <SidebarLayout>
            <div>Announcements Page</div>
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/events/create"
      element={
        <ProtectedRoute>
          <SidebarLayout>
            <CreateEvent />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/events"
      element={
        <ProtectedRoute>
          <SidebarLayout>
            <ViewEvents />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
  </>
);
