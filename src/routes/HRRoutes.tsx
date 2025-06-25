import React from "react";
import { Route } from "react-router-dom";
import ProtectedRoute from "@/components/ProtectedRoute";
import SidebarLayout from "@/components/layout/SidebarLayout";
import HRDashboard from "@/pages/dashboards/HRDashboard";
import HRSettingsPage from "@/pages/hr/HRSettingsPage";
import EmployeeManagementPage from "@/pages/hr/EmployeeManagementPage";
import EmployeeLeaveManagementPage from "@/pages/hr/EmployeeLeaveManagementPage";
import EmployeeSearchPage from "@/pages/hr/EmployeeSearchPage";
import PayrollPayslipPage from "@/pages/hr/PayrollPayslipPage";

export const HRRoutes = [
  <Route
    key="hr-dashboard"
    path="/dashboard/hr"
    element={
      <ProtectedRoute roles={["hr"]}>
        <SidebarLayout>
          <HRDashboard />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="hr-settings"
    path="/hr/settings"
    element={
      <ProtectedRoute roles={["hr"]}>
        <SidebarLayout>
          <HRSettingsPage />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="hr-employee-management"
    path="/hr/employee-management"
    element={
      <ProtectedRoute roles={["hr"]}>
        <SidebarLayout>
          <EmployeeManagementPage />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="hr-leave-management"
    path="/hr/leave-management"
    element={
      <ProtectedRoute roles={["hr"]}>
        <SidebarLayout>
          <EmployeeLeaveManagementPage />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="hr-employee-search"
    path="/hr/employee-search"
    element={
      <ProtectedRoute roles={["hr"]}>
        <SidebarLayout>
          <EmployeeSearchPage />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="hr-payroll-payslip"
    path="/hr/payroll-payslip"
    element={
      <ProtectedRoute roles={["hr"]}>
        <SidebarLayout>
          <PayrollPayslipPage />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
];
