import { SidebarTrigger } from "./sidebar";
import { cn } from "../../lib/utils";
import { Search } from "lucide-react";
import { Input } from "./input";
import { useSidebar } from "./sidebar";

interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Navbar({ className, ...props }: NavbarProps) {
  const { state } = useSidebar();

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6",
        className
      )}
      {...props}
    >
      {state === "collapsed" && <SidebarTrigger />}
      <div className="relative w-96">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          type="text"
          placeholder="Search anything..."
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
        />
      </div>
      <div className="flex-1" />
    </div>
  );
}
