import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import SidebarLayout from "@/components/layout/SidebarLayout";
import React from "react";

// Auth Pages
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ProfilePage from "./pages/profile/ProfilePage";

// Common Components
import ProtectedRoute from "./components/ProtectedRoute";
import AccessDenied from "./pages/lecturer/AccessDenied";

// Import Route Modules
import { StudentRoutes } from "./routes/StudentRoutes";
import { LecturerRoutes } from "./routes/LecturerRoutes";
import { HRRoutes } from "./routes/HRRoutes";
import { AdminRoutes } from "./routes/AdminRoutes";
import { SuperAdminRoutes } from "./routes/SuperAdminRoutes";
import { FinanceRoutes } from "./routes/FinanceRoutes";
import { LibrarianRoutes } from "./routes/LibrarianRoutes";
import { DepartmentRoutes } from "./routes/DepartmentRoutes";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <BrowserRouter>
            <Routes>
              {/* Default route - redirect to login */}
              <Route path="/" element={<Navigate to="/login" replace />} />

              {/* Auth routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />

              {/* Protected routes */}
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <ProfilePage />
                  </ProtectedRoute>
                }
              />

              {/* Student Routes */}
              {StudentRoutes}

              {/* Lecturer Routes */}
              {LecturerRoutes}

              {/* HR Routes */}
              {HRRoutes}

              {/* Admin Routes */}
              {AdminRoutes}

              {/* Super Admin Routes */}
              {SuperAdminRoutes}

              {/* Finance Routes */}
              {FinanceRoutes}

              {/* Librarian Routes */}
              {LibrarianRoutes}

              {/* Department Routes */}
              {DepartmentRoutes}

              {/* Access Denied route */}
              <Route
                path="/access-denied"
                element={
                  <SidebarLayout>
                    <AccessDenied />
                  </SidebarLayout>
                }
              />

              {/* 404 route - must be last */}
              <Route
                path="*"
                element={
                  <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                      <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        404
                      </h1>
                      <p className="text-xl text-gray-600 mb-8">
                        Page not found. The page you're looking for doesn't
                        exist or has been moved.
                      </p>
                      <Link
                        to="/"
                        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                      >
                        Go back home
                      </Link>
                    </div>
                  </div>
                }
              />
            </Routes>
          </BrowserRouter>
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
