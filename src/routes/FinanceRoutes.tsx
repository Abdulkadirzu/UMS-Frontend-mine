import React from "react";
import { Route } from "react-router-dom";
import ProtectedRoute from "@/components/ProtectedRoute";
import SidebarLayout from "@/components/layout/SidebarLayout";

// Financial Operations
import CreateInvoice from "@/pages/finance/operations/CreateInvoice";
import EnterBills from "@/pages/finance/operations/EnterBills";
import Expenses from "@/pages/finance/operations/Expenses";
import CashReceipt from "@/pages/finance/operations/CashReceipt";
import OtherCashReceipt from "@/pages/finance/operations/OtherCashReceipt";
import BankTransaction from "@/pages/finance/operations/BankTransaction";
import PurchaseOrder from "@/pages/finance/operations/PurchaseOrder";
import SalesOrder from "@/pages/finance/operations/SalesOrder";

// Payments
import Payments from "@/pages/finance/payments/Payments";
import CashDeposit from "@/pages/finance/payments/CashDeposit";
import Refund from "@/pages/finance/payments/Refund";
import BankTransfer from "@/pages/finance/payments/BankTransfer";

// Financial Reports
import BalanceSheet from "@/pages/finance/reports/BalanceSheet";
import ProfitAndLoss from "@/pages/finance/reports/ProfitAndLoss";
import TrialBalance from "@/pages/finance/reports/TrialBalance";

// Student Reports
import StudentBalanceReport from "@/pages/finance/reports/StudentBalanceReport";
import StudentBalanceSummary from "@/pages/finance/reports/StudentBalanceSummary";
import UnknownStudentsPayment from "@/pages/finance/reports/UnknownStudentsPayment";

// Vendor Reports
import VendorReportDetail from "@/pages/finance/reports/VendorReportDetail";
import VendorReportSummary from "@/pages/finance/reports/VendorReportSummary";

// Employee Reports
import SalaryPayable from "@/pages/finance/reports/SalaryPayable";
import SalaryPayableReport from "@/pages/finance/reports/SalaryPayableReport";

export const FinanceRoutes = [
  // Default Finance Dashboard Route
  <Route
    key="finance-dashboard"
    path="finance"
    element={
      <ProtectedRoute roles={["finance"]}>
        <SidebarLayout>
          <div className="container mx-auto p-6 space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold">Finance Dashboard</h1>
              <div className="flex gap-4">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                  Export Report
                </button>
                <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                  New Transaction
                </button>
              </div>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-500 text-sm font-medium">
                    Total Revenue
                  </h3>
                  <span className="p-2 bg-green-100 rounded-lg">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                </div>
                <p className="text-2xl font-bold text-gray-900">$50,000.00</p>
                <p className="text-sm text-green-600 mt-2">
                  +12.5% from last month
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-500 text-sm font-medium">
                    Total Expenses
                  </h3>
                  <span className="p-2 bg-red-100 rounded-lg">
                    <svg
                      className="w-6 h-6 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </span>
                </div>
                <p className="text-2xl font-bold text-gray-900">$30,000.00</p>
                <p className="text-sm text-red-600 mt-2">
                  +8.2% from last month
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-500 text-sm font-medium">
                    Net Balance
                  </h3>
                  <span className="p-2 bg-blue-100 rounded-lg">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </span>
                </div>
                <p className="text-2xl font-bold text-gray-900">$20,000.00</p>
                <p className="text-sm text-blue-600 mt-2">
                  +15.3% from last month
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-500 text-sm font-medium">
                    Pending Payments
                  </h3>
                  <span className="p-2 bg-yellow-100 rounded-lg">
                    <svg
                      className="w-6 h-6 text-yellow-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                </div>
                <p className="text-2xl font-bold text-gray-900">$5,000.00</p>
                <p className="text-sm text-yellow-600 mt-2">
                  12 payments pending
                </p>
              </div>
            </div>

            {/* Quick Actions and Recent Transactions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
                <div className="space-y-3">
                  <button className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                    <span className="p-2 bg-blue-100 rounded-lg">
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </span>
                    <span>Create Invoice</span>
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                    <span className="p-2 bg-green-100 rounded-lg">
                      <svg
                        className="w-5 h-5 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </span>
                    <span>Record Payment</span>
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                    <span className="p-2 bg-purple-100 rounded-lg">
                      <svg
                        className="w-5 h-5 text-purple-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                      </svg>
                    </span>
                    <span>Enter Bill</span>
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                    <span className="p-2 bg-yellow-100 rounded-lg">
                      <svg
                        className="w-5 h-5 text-yellow-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                        />
                      </svg>
                    </span>
                    <span>Bank Transaction</span>
                  </button>
                </div>
              </div>

              <div className="md:col-span-2 bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Recent Transactions</h2>
                  <button className="text-blue-600 hover:text-blue-700">
                    View All
                  </button>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <span className="p-2 bg-blue-100 rounded-lg">
                        <svg
                          className="w-5 h-5 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </span>
                      <div>
                        <p className="font-medium">Invoice #1234</p>
                        <p className="text-sm text-gray-500">Student Payment</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-green-600">$1,200.00</p>
                      <p className="text-sm text-gray-500">2 hours ago</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <span className="p-2 bg-red-100 rounded-lg">
                        <svg
                          className="w-5 h-5 text-red-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </span>
                      <div>
                        <p className="font-medium">Payment #5678</p>
                        <p className="text-sm text-gray-500">Vendor Payment</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-red-600">-$800.00</p>
                      <p className="text-sm text-gray-500">5 hours ago</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <span className="p-2 bg-purple-100 rounded-lg">
                        <svg
                          className="w-5 h-5 text-purple-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                          />
                        </svg>
                      </span>
                      <div>
                        <p className="font-medium">Bill #9012</p>
                        <p className="text-sm text-gray-500">Utility Bill</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-red-600">-$500.00</p>
                      <p className="text-sm text-gray-500">1 day ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,

  // Financial Operations Routes
  <Route
    key="create-invoice"
    path="finance/operations/create-invoice"
    element={
      <ProtectedRoute roles={["finance"]}>
        <SidebarLayout>
          <CreateInvoice />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="enter-bills"
    path="finance/operations/enter-bills"
    element={
      <ProtectedRoute roles={["finance"]}>
        <SidebarLayout>
          <EnterBills />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="expenses"
    path="finance/operations/expenses"
    element={
      <ProtectedRoute roles={["finance"]}>
        <SidebarLayout>
          <Expenses />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="cash-receipt"
    path="finance/operations/cash-receipt"
    element={
      <ProtectedRoute roles={["finance"]}>
        <SidebarLayout>
          <CashReceipt />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="other-cash-receipt"
    path="finance/operations/other-cash-receipt"
    element={
      <ProtectedRoute roles={["finance"]}>
        <SidebarLayout>
          <OtherCashReceipt />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="bank-transaction"
    path="finance/operations/bank-transaction"
    element={
      <ProtectedRoute roles={["finance"]}>
        <SidebarLayout>
          <BankTransaction />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="purchase-order"
    path="finance/operations/purchase-order"
    element={
      <ProtectedRoute roles={["finance"]}>
        <SidebarLayout>
          <PurchaseOrder />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="sales-order"
    path="finance/operations/sales-order"
    element={
      <ProtectedRoute roles={["finance"]}>
        <SidebarLayout>
          <SalesOrder />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,

  // Payments Routes
  <Route
    key="payments"
    path="finance/payments"
    element={
      <ProtectedRoute roles={["finance"]}>
        <SidebarLayout>
          <Payments />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="cash-deposit"
    path="finance/payments/cash-deposit"
    element={
      <ProtectedRoute roles={["finance"]}>
        <SidebarLayout>
          <CashDeposit />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="refund"
    path="finance/payments/refund"
    element={
      <ProtectedRoute roles={["finance"]}>
        <SidebarLayout>
          <Refund />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="bank-transfer"
    path="finance/payments/bank-transfer"
    element={
      <ProtectedRoute roles={["finance"]}>
        <SidebarLayout>
          <BankTransfer />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,

  // Financial Reports Routes
  <Route
    key="balance-sheet"
    path="finance/reports/balance-sheet"
    element={
      <ProtectedRoute roles={["finance"]}>
        <SidebarLayout>
          <BalanceSheet />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="profit-and-loss"
    path="finance/reports/profit-and-loss"
    element={
      <ProtectedRoute roles={["finance"]}>
        <SidebarLayout>
          <ProfitAndLoss />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="trial-balance"
    path="finance/reports/trial-balance"
    element={
      <ProtectedRoute roles={["finance"]}>
        <SidebarLayout>
          <TrialBalance />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,

  // Student Reports Routes
  <Route
    key="student-balance-report"
    path="finance/reports/student-balance"
    element={
      <ProtectedRoute roles={["finance"]}>
        <SidebarLayout>
          <StudentBalanceReport />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="student-balance-summary"
    path="finance/reports/student-balance-summary"
    element={
      <ProtectedRoute roles={["finance"]}>
        <SidebarLayout>
          <StudentBalanceSummary />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="unknown-students-payment"
    path="finance/reports/unknown-students-payment"
    element={
      <ProtectedRoute roles={["finance"]}>
        <SidebarLayout>
          <UnknownStudentsPayment />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,

  // Vendor Reports Routes
  <Route
    key="vendor-report-detail"
    path="finance/reports/vendor-detail"
    element={
      <ProtectedRoute roles={["finance"]}>
        <SidebarLayout>
          <VendorReportDetail />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="vendor-report-summary"
    path="finance/reports/vendor-summary"
    element={
      <ProtectedRoute roles={["finance"]}>
        <SidebarLayout>
          <VendorReportSummary />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,

  // Employee Reports Routes
  <Route
    key="salary-payable"
    path="finance/reports/salary-payable"
    element={
      <ProtectedRoute roles={["finance"]}>
        <SidebarLayout>
          <SalaryPayable />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
  <Route
    key="salary-payable-report"
    path="finance/reports/salary-payable-report"
    element={
      <ProtectedRoute roles={["finance"]}>
        <SidebarLayout>
          <SalaryPayableReport />
        </SidebarLayout>
      </ProtectedRoute>
    }
  />,
];
