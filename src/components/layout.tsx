import { Sidebar, SidebarProvider } from "./ui/sidebar";
import { Navbar } from "./ui/navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider>
      <div className="relative min-h-screen">
        <Navbar />
        <div className="flex min-h-screen">
          <Sidebar>
            <div className="flex h-full w-full flex-col">
              {/* Sidebar content */}
            </div>
          </Sidebar>
          <main className="flex-1 p-4 pt-20">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
