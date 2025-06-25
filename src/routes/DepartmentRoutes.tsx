import { Route } from "react-router-dom";
import ProtectedRoute from "@/components/ProtectedRoute";
import SidebarLayout from "@/components/layout/SidebarLayout";
import DepartmentDashboard from "@/pages/dashboards/DepartmentDashboard";
import DepartmentStudents from "@/pages/department/DepartmentStudents";
import DepartmentCourses from "@/pages/department/DepartmentCourses";
import DepartmentSubjects from "@/pages/department/DepartmentSubjects";
import DepartmentStaff from "@/pages/department/DepartmentStaff";
import DepartmentTimetable from "@/pages/department/DepartmentTimetable";

export const DepartmentRoutes = (
  <>
    <Route
      path="/dashboard/department"
      element={
        <ProtectedRoute roles={["department"]}>
          <SidebarLayout>
            <DepartmentDashboard />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/department/students"
      element={
        <ProtectedRoute roles={["department"]}>
          <SidebarLayout>
            <DepartmentStudents />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/department/courses"
      element={
        <ProtectedRoute roles={["department"]}>
          <SidebarLayout>
            <DepartmentCourses />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/department/subjects"
      element={
        <ProtectedRoute roles={["department"]}>
          <SidebarLayout>
            <DepartmentSubjects />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/department/staff"
      element={
        <ProtectedRoute roles={["department"]}>
          <SidebarLayout>
            <DepartmentStaff />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/department/timetable"
      element={
        <ProtectedRoute roles={["department"]}>
          <SidebarLayout>
            <DepartmentTimetable />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
  </>
);
