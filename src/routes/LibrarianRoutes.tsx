import { Route } from "react-router-dom";
import ProtectedRoute from "@/components/ProtectedRoute";
import SidebarLayout from "@/components/layout/SidebarLayout";
import LibrarianDashboard from "@/pages/dashboards/LibrarianDashboard";
import LibraryBooks from "@/pages/admin/library/Books";
import LibrarySearch from "@/pages/admin/library/Search";
import LibraryReturn from "@/pages/admin/library/Return";
import LibraryIssue from "@/pages/admin/library/Issue";
import LibraryBarcode from "@/pages/admin/library/Barcode";
import LibrarySettings from "@/pages/admin/library/Settings";
import LibraryMovement from "@/pages/admin/library/Movement";
import LibraryRenewal from "@/pages/admin/library/Renewal";
import LibraryDetails from "@/pages/admin/library/Details";
import LibraryFines from "@/pages/admin/library/Fines";
import LibraryTags from "@/pages/admin/library/Tags";

export const LibrarianRoutes = (
  <>
    <Route
      path="/dashboard/librarian"
      element={
        <ProtectedRoute roles={["librarian"]}>
          <SidebarLayout>
            <LibrarianDashboard />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/library/books"
      element={
        <ProtectedRoute roles={["librarian"]}>
          <SidebarLayout>
            <LibraryBooks />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/library/search"
      element={
        <ProtectedRoute roles={["librarian"]}>
          <SidebarLayout>
            <LibrarySearch />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/library/return"
      element={
        <ProtectedRoute roles={["librarian"]}>
          <SidebarLayout>
            <LibraryReturn />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/library/issue"
      element={
        <ProtectedRoute roles={["librarian"]}>
          <SidebarLayout>
            <LibraryIssue />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/library/barcode"
      element={
        <ProtectedRoute roles={["librarian"]}>
          <SidebarLayout>
            <LibraryBarcode />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/library/settings"
      element={
        <ProtectedRoute roles={["librarian"]}>
          <SidebarLayout>
            <LibrarySettings />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/library/movement"
      element={
        <ProtectedRoute roles={["librarian"]}>
          <SidebarLayout>
            <LibraryMovement />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/library/renewal"
      element={
        <ProtectedRoute roles={["librarian"]}>
          <SidebarLayout>
            <LibraryRenewal />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/library/details"
      element={
        <ProtectedRoute roles={["librarian"]}>
          <SidebarLayout>
            <LibraryDetails />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/library/fines"
      element={
        <ProtectedRoute roles={["librarian"]}>
          <SidebarLayout>
            <LibraryFines />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/library/tags"
      element={
        <ProtectedRoute roles={["librarian"]}>
          <SidebarLayout>
            <LibraryTags />
          </SidebarLayout>
        </ProtectedRoute>
      }
    />
  </>
);
