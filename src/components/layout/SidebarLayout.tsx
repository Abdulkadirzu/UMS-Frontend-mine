import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Button } from "@/components/ui/button";
import {
  Users,
  BookOpen,
  GraduationCap,
  Calendar,
  LogOut,
  Library,
  ClipboardList,
  Settings,
  FileText,
  Book,
  School,
  ChevronDown,
  User,
  MessageSquare,
  Sun,
  DollarSign,
  CreditCard,
  LayoutDashboard,
  Search,
  UserPlus,
  Clock,
  Gift,
  BarChart,
  Building,
  History,
  ArrowLeftRight,
  Barcode,
  Tag,
  RefreshCw,
  Newspaper,
  Calendar as CalendarIcon,
  AlertCircle,
  PlusCircle,
  Receipt,
  List,
  Video,
  Award,
  CheckSquare,
  AlertTriangle,
  UserCog,
  ShoppingCart,
  Store,
  LineChart,
  Calculator,
  HelpCircle,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { students } from "@/utils/mockData";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
} from "@/components/ui/sidebar";

interface SidebarLayoutProps {
  children: React.ReactNode;
}

interface SidebarItem {
  name: string;
  path?: string;
  icon: React.ReactNode;
  children?: {
    name: string;
    path?: string;
    icon: React.ReactNode;
    children?: {
      name: string;
      path: string;
      icon: React.ReactNode;
    }[];
  }[];
}

const financeNavItems: SidebarItem[] = [
  {
    name: "Financial Operations",
    icon: <DollarSign className="h-5 w-5" />,
    children: [
      {
        name: "Create Invoice",
        path: "/dashboard/finance/operations/create-invoice",
        icon: <FileText className="h-5 w-5" />,
      },
      {
        name: "Enter Bills",
        path: "/dashboard/finance/operations/enter-bills",
        icon: <FileText className="h-5 w-5" />,
      },
      {
        name: "Expenses",
        path: "/dashboard/finance/operations/expenses",
        icon: <DollarSign className="h-5 w-5" />,
      },
      {
        name: "Cash Receipt",
        path: "/dashboard/finance/operations/cash-receipt",
        icon: <Receipt className="h-5 w-5" />,
      },
      {
        name: "Other Cash Receipt",
        path: "/dashboard/finance/operations/other-cash-receipt",
        icon: <Receipt className="h-5 w-5" />,
      },
      {
        name: "Bank Transaction",
        path: "/dashboard/finance/operations/bank-transaction",
        icon: <ArrowLeftRight className="h-5 w-5" />,
      },
      {
        name: "Purchase Order",
        path: "/dashboard/finance/operations/purchase-order",
        icon: <ShoppingCart className="h-5 w-5" />,
      },
      {
        name: "Sales Order",
        path: "/dashboard/finance/operations/sales-order",
        icon: <Store className="h-5 w-5" />,
      },
    ],
  },
  {
    name: "Payments",
    icon: <CreditCard className="h-5 w-5" />,
    children: [
      {
        name: "Payments",
        path: "/dashboard/finance/payments",
        icon: <CreditCard className="h-5 w-5" />,
      },
      {
        name: "Cash Deposit",
        path: "/dashboard/finance/payments/cash-deposit",
        icon: <DollarSign className="h-5 w-5" />,
      },
      {
        name: "Refund",
        path: "/dashboard/finance/payments/refund",
        icon: <RefreshCw className="h-5 w-5" />,
      },
      {
        name: "Bank Transfer",
        path: "/dashboard/finance/payments/bank-transfer",
        icon: <ArrowLeftRight className="h-5 w-5" />,
      },
    ],
  },
  {
    name: "Financial Reports",
    icon: <BarChart className="h-5 w-5" />,
    children: [
      {
        name: "Balance Sheet",
        path: "/dashboard/finance/reports/balance-sheet",
        icon: <BarChart className="h-5 w-5" />,
      },
      {
        name: "Profit and Loss",
        path: "/dashboard/finance/reports/profit-and-loss",
        icon: <LineChart className="h-5 w-5" />,
      },
      {
        name: "Trial Balance",
        path: "/dashboard/finance/reports/trial-balance",
        icon: <Calculator className="h-5 w-5" />,
      },
    ],
  },
  {
    name: "Student Reports",
    icon: <GraduationCap className="h-5 w-5" />,
    children: [
      {
        name: "Student Balance Report",
        path: "/dashboard/finance/reports/student-balance",
        icon: <User className="h-5 w-5" />,
      },
      {
        name: "Student Balance Summary",
        path: "/dashboard/finance/reports/student-balance-summary",
        icon: <Users className="h-5 w-5" />,
      },
      {
        name: "Unknown Students Payment",
        path: "/dashboard/finance/reports/unknown-students-payment",
        icon: <HelpCircle className="h-5 w-5" />,
      },
    ],
  },
  {
    name: "Vendor Reports",
    icon: <Building className="h-5 w-5" />,
    children: [
      {
        name: "Vendor Report Detail",
        path: "/dashboard/finance/reports/vendor-detail",
        icon: <Building className="h-5 w-5" />,
      },
      {
        name: "Vendor Report Summary",
        path: "/dashboard/finance/reports/vendor-summary",
        icon: <Store className="h-5 w-5" />,
      },
    ],
  },
  {
    name: "Employee Reports",
    icon: <Users className="h-5 w-5" />,
    children: [
      {
        name: "Salary Payable",
        path: "/dashboard/finance/reports/salary-payable",
        icon: <DollarSign className="h-5 w-5" />,
      },
      {
        name: "Salary Payable Report",
        path: "/dashboard/finance/reports/salary-payable-report",
        icon: <FileText className="h-5 w-5" />,
      },
    ],
  },
];

const SidebarLayout: React.FC<SidebarLayoutProps> = ({ children }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [expandedGroups, setExpandedGroups] = useState<{
    [key: string]: boolean;
  }>({});

  // Effect to expand sidebar group based on current route
  useEffect(() => {
    const items = getSidebarItems();
    const currentPath = location.pathname;

    const newExpandedGroups: { [key: string]: boolean } = {};

    items.forEach((item) => {
      if (item.children) {
        const isChildActive = item.children.some(
          (child) => child.path === currentPath
        );
        if (isChildActive) {
          newExpandedGroups[item.name] = true;
        }
      }
    });

    setExpandedGroups((prev) => ({ ...prev, ...newExpandedGroups }));
  }, [location.pathname, user]);

  // Determine display name for navbar based on role
  let displayName = user?.name || "";
  if (user?.role === "student") {
    const student = students.find((s) => s.email === user?.email);
    if (student) displayName = student.name;
  }

  // Navbar at the very top of the page (for all roles)
  const Navbar = (
    <div className="w-full flex items-center justify-between bg-white border-b h-16 px-6 sticky top-0 z-50 shadow-sm">
      <div className="flex items-center space-x-6">
        <div className="relative flex items-center w-96">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search anything..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" className="relative">
          <MessageSquare className="h-5 w-5" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-blue-500 rounded-full"></span>
        </Button>

        <Button variant="ghost" size="icon">
          <Sun className="h-5 w-5" />
        </Button>

        <div className="h-6 w-px bg-gray-200 mx-2"></div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center cursor-pointer hover:bg-gray-50 rounded-lg px-3 py-2 transition">
              <Avatar className="h-8 w-8 ring-2 ring-blue-100">
                <AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-600 text-white font-bold">
                  {displayName.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="ml-3 text-left">
                <p className="text-sm font-medium text-gray-900">
                  {displayName}
                </p>
                <p className="text-xs text-gray-500 capitalize">{user?.role}</p>
              </div>
              <ChevronDown className="ml-2 h-4 w-4 text-gray-500" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" /> Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" /> Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => handleLogout()}>
              <LogOut className="mr-2 h-4 w-4" /> Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );

  if (!user) return null;

  const toggleGroup = (groupName: string) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [groupName]: !prev[groupName],
    }));
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  // Define sidebar items based on user role
  const getSidebarItems = (): SidebarItem[] => {
    const commonItems: SidebarItem[] = [
      {
        name: "Dashboard",
        path: `/dashboard/${user.role}`,
        icon: <LayoutDashboard className="h-5 w-5" />,
      },
    ];

    let roleItems: SidebarItem[] = [];
    switch (user.role) {
      case "superadmin":
      case "admin":
        return [
          ...commonItems,
          {
            name: "Academics",
            icon: <GraduationCap className="h-5 w-5" />,
            children: [
              {
                name: "Academic Years",
                path: "/academic-years",
                icon: <Calendar className="h-5 w-5" />,
              },
              {
                name: "Course Management",
                path: "/course-management",
                icon: <BookOpen className="h-5 w-5" />,
              },
              {
                name: "Batch Management",
                path: "/batch-management",
                icon: <Users className="h-5 w-5" />,
              },
              {
                name: "Subject Center",
                path: "/subject-center",
                icon: <Book className="h-5 w-5" />,
              },
              {
                name: "Calendar",
                path: "/calendar",
                icon: <Calendar className="h-5 w-5" />,
              },
              {
                name: "Exams Management",
                path: "/exams-management",
                icon: <FileText className="h-5 w-5" />,
              },
              {
                name: "Assignments",
                path: "/assignments",
                icon: <ClipboardList className="h-5 w-5" />,
              },
              {
                name: "Certificates",
                path: "/certificates",
                icon: <Award className="h-5 w-5" />,
              },
              {
                name: "ID Cards",
                path: "/id-cards",
                icon: <CreditCard className="h-5 w-5" />,
              },
              {
                name: "Gradebooks",
                path: "/gradebooks",
                icon: <BookOpen className="h-5 w-5" />,
              },
              {
                name: "Attendance",
                path: "/attendance",
                icon: <CheckSquare className="h-5 w-5" />,
              },
              {
                name: "Discipline",
                path: "/discipline",
                icon: <AlertTriangle className="h-5 w-5" />,
              },
              {
                name: "Remarks",
                path: "/remarks",
                icon: <MessageSquare className="h-5 w-5" />,
              },
            ],
          },
          {
            name: "Timetable & Allocations",
            icon: <Clock className="h-5 w-5" />,
            children: [
              {
                name: "Class Timing Sets",
                path: "/timetable/class-timing-sets",
                icon: <Clock className="h-5 w-5" />,
              },
              {
                name: "Manage Timetables",
                path: "/timetable/manage",
                icon: <Calendar className="h-5 w-5" />,
              },
              {
                name: "View Timetables",
                path: "/timetable/view",
                icon: <Calendar className="h-5 w-5" />,
              },
              {
                name: "Teacher Timetable",
                path: "/timetable/teacher",
                icon: <User className="h-5 w-5" />,
              },
              {
                name: "Work Allotment",
                path: "/timetable/work-allotment",
                icon: <ClipboardList className="h-5 w-5" />,
              },
              {
                name: "Institutional Timetable",
                path: "/timetable/institutional",
                icon: <Building className="h-5 w-5" />,
              },
              {
                name: "Timetable Tracker",
                path: "/timetable/tracker",
                icon: <History className="h-5 w-5" />,
              },
              {
                name: "Classroom Allocation",
                path: "/timetable/classroom-allocation",
                icon: <Building className="h-5 w-5" />,
              },
              {
                name: "Manage Subjects",
                path: "/timetable/subjects",
                icon: <Book className="h-5 w-5" />,
              },
              {
                name: "Settings",
                path: "/timetable/settings",
                icon: <Settings className="h-5 w-5" />,
              },
            ],
          },
          {
            name: "Students",
            icon: <Users className="h-5 w-5" />,
            children: [
              {
                name: "Student Details",
                path: "/students/details",
                icon: <UserCog className="h-5 w-5" />,
              },
              {
                name: "Admissions",
                path: "/students/admissions",
                icon: <UserPlus className="h-5 w-5" />,
              },
            ],
          },
          {
            name: "Staff Management",
            icon: <Users className="h-5 w-5" />,
            children: [
              {
                name: "Lecturers",
                path: "/lecturer-management",
                icon: <School className="h-5 w-5" />,
              },
              {
                name: "Staff",
                path: "/staff-management",
                icon: <Users className="h-5 w-5" />,
              },
              {
                name: "Departments",
                path: "/department-management",
                icon: <School className="h-5 w-5" />,
              },
            ],
          },
          {
            name: "Library",
            icon: <Library className="h-5 w-5" />,
            children: [
              {
                name: "Manage Books",
                path: "/library/books",
                icon: <Book className="h-5 w-5" />,
              },
              {
                name: "Search Book",
                path: "/library/search",
                icon: <Search className="h-5 w-5" />,
              },
              {
                name: "Return Book",
                path: "/library/return",
                icon: <ArrowLeftRight className="h-5 w-5" />,
              },
              {
                name: "Issue Books",
                path: "/library/issue",
                icon: <ArrowLeftRight className="h-5 w-5" />,
              },
              {
                name: "Manage Barcode",
                path: "/library/barcode",
                icon: <Barcode className="h-5 w-5" />,
              },
              {
                name: "Library Setting",
                path: "/library/settings",
                icon: <Settings className="h-5 w-5" />,
              },
              {
                name: "Movement Log",
                path: "/library/movement",
                icon: <History className="h-5 w-5" />,
              },
              {
                name: "Book Renewal",
                path: "/library/renewal",
                icon: <RefreshCw className="h-5 w-5" />,
              },
              {
                name: "Manage Book Additional Details",
                path: "/library/details",
                icon: <FileText className="h-5 w-5" />,
              },
              {
                name: "Library Fine Receipts",
                path: "/library/fines",
                icon: <FileText className="h-5 w-5" />,
              },
              {
                name: "Manage Tags",
                path: "/library/tags",
                icon: <Tag className="h-5 w-5" />,
              },
            ],
          },
          {
            name: "Finance",
            icon: <DollarSign className="h-5 w-5" />,
            children: [
              {
                name: "Overview",
                path: "/finance",
                icon: <DollarSign className="h-5 w-5" />,
              },
              {
                name: "Payments",
                path: "/finance/payments",
                icon: <CreditCard className="h-5 w-5" />,
              },
              {
                name: "Invoices",
                path: "/finance/invoices",
                icon: <FileText className="h-5 w-5" />,
              },
              {
                name: "Financial Reports",
                path: "/finance/reports",
                icon: <ClipboardList className="h-5 w-5" />,
              },
              {
                name: "Payroll",
                path: "/finance/payroll",
                icon: <FileText className="h-5 w-5" />,
              },
              {
                name: "Expenses",
                path: "/finance/expenses",
                icon: <DollarSign className="h-5 w-5" />,
              },
              {
                name: "Budget",
                path: "/finance/budget",
                icon: <BarChart className="h-5 w-5" />,
              },
              {
                name: "Tax Management",
                path: "/finance/tax",
                icon: <FileText className="h-5 w-5" />,
              },
              {
                name: "Scholarships",
                path: "/finance/scholarships",
                icon: <Gift className="h-5 w-5" />,
              },
              {
                name: "Grants",
                path: "/finance/grants",
                icon: <Gift className="h-5 w-5" />,
              },
              {
                name: "Donations",
                path: "/finance/donations",
                icon: <Gift className="h-5 w-5" />,
              },
              {
                name: "Settings",
                path: "/finance/settings",
                icon: <Settings className="h-5 w-5" />,
              },
            ],
          },
          {
            name: "Reports",
            path: "/reports",
            icon: <ClipboardList className="h-5 w-5" />,
          },
          {
            name: "Settings",
            path: "/settings",
            icon: <Settings className="h-5 w-5" />,
          },
          {
            name: "News",
            icon: <Newspaper className="h-5 w-5" />,
            children: [
              {
                name: "School News",
                path: "/news",
                icon: <Newspaper className="h-5 w-5" />,
              },
              {
                name: "Latest Announcements",
                path: "/news/announcements",
                icon: <Newspaper className="h-5 w-5" />,
              },
            ],
          },
          {
            name: "Events",
            icon: <CalendarIcon className="h-5 w-5" />,
            children: [
              {
                name: "Create Event",
                path: "/events/create",
                icon: <CalendarIcon className="h-5 w-5" />,
              },
              {
                name: "View Events",
                path: "/events",
                icon: <CalendarIcon className="h-5 w-5" />,
              },
            ],
          },
        ];
      case "department":
        return [
          ...commonItems,
          {
            name: "Students",
            path: "/department/students",
            icon: <Users className="h-5 w-5" />,
          },
          {
            name: "Lecturers",
            path: "/department/lecturers",
            icon: <UserCog className="h-5 w-5" />,
          },
          {
            name: "Courses",
            path: "/department/courses",
            icon: <BookOpen className="h-5 w-5" />,
          },
          {
            name: "Subjects",
            path: "/department/subjects",
            icon: <Book className="h-5 w-5" />,
          },
          {
            name: "Staff",
            path: "/department/staff",
            icon: <Users className="h-5 w-5" />,
          },
          {
            name: "Timetable",
            path: "/department/timetable",
            icon: <Calendar className="h-5 w-5" />,
          },
          {
            name: "Quick Actions",
            icon: <PlusCircle className="h-5 w-5" />,
            children: [
              {
                name: "Add New Student",
                path: "/department/students/add",
                icon: <UserPlus className="h-5 w-5" />,
              },
              {
                name: "Schedule Class",
                path: "/department/timetable/schedule",
                icon: <Clock className="h-5 w-5" />,
              },
              {
                name: "Generate Report",
                path: "/department/reports",
                icon: <BarChart className="h-5 w-5" />,
              },
              {
                name: "Update Timetable",
                path: "/department/timetable/update",
                icon: <RefreshCw className="h-5 w-5" />,
              },
            ],
          },
        ];
      case "student":
        return [
          ...commonItems,
          {
            name: "Academics",
            icon: <GraduationCap className="h-5 w-5" />,
            children: [
              {
                name: "Courses & Subjects",
                path: "/academics/courses",
                icon: <BookOpen className="h-5 w-5" />,
              },
              {
                name: "Exams",
                path: "/academics/exams",
                icon: <FileText className="h-5 w-5" />,
              },
              {
                name: "Failed Exams",
                path: "/academics/failed",
                icon: <AlertTriangle className="h-5 w-5" />,
              },
              {
                name: "Timetable",
                path: "/academics/timetable",
                icon: <Calendar className="h-5 w-5" />,
              },
              {
                name: "Provisional Results",
                path: "/academics/results",
                icon: <ClipboardList className="h-5 w-5" />,
              },
              {
                name: "Assignments",
                path: "/academics/assignments",
                icon: <ClipboardList className="h-5 w-5" />,
              },
            ],
          },
          {
            name: "Finance",
            icon: <DollarSign className="h-5 w-5" />,
            children: [
              {
                name: "Fees Statement",
                path: "/fees-statement",
                icon: <FileText className="h-5 w-5" />,
              },
              {
                name: "Receipts",
                path: "/receipts",
                icon: <Receipt className="h-5 w-5" />,
              },
              {
                name: "Fees Structure",
                path: "/fees-structure",
                icon: <List className="h-5 w-5" />,
              },
              {
                name: "Pay Fees",
                path: "/pay-fees",
                icon: <CreditCard className="h-5 w-5" />,
              },
            ],
          },
          {
            name: "Library",
            icon: <BookOpen className="h-5 w-5" />,
            children: [
              {
                name: "Available Books",
                path: "/library",
                icon: <BookOpen className="h-5 w-5" />,
              },
              {
                name: "Borrowed Books",
                path: "/library/borrowed",
                icon: <BookOpen className="h-5 w-5" />,
              },
              {
                name: "Penalties",
                path: "/library/penalties",
                icon: <AlertCircle className="h-5 w-5" />,
              },
            ],
          },
          {
            name: "News",
            icon: <Newspaper className="h-5 w-5" />,
            path: "/news",
          },
          {
            name: "Events",
            icon: <Calendar className="h-5 w-5" />,
            path: "/events",
          },
          {
            name: "My Account",
            icon: <User className="h-5 w-5" />,
            children: [
              {
                name: "Profile",
                path: "/profile",
                icon: <User className="h-5 w-5" />,
              },
              {
                name: "Logout",
                path: "/logout",
                icon: <LogOut className="h-5 w-5" />,
              },
            ],
          },
        ];
      case "lecturer":
        roleItems = [
          {
            name: "My Courses",
            path: "/dashboard/lecturer/courses",
            icon: <BookOpen className="h-5 w-5" />,
          },
          {
            name: "Departments",
            path: "/dashboard/lecturer/departments",
            icon: <Users className="h-5 w-5" />,
          },
          {
            name: "Subjects",
            path: "/dashboard/lecturer/subjects",
            icon: <BookOpen className="h-5 w-5" />,
          },
          {
            name: "Assignments",
            path: "/dashboard/lecturer/assignments",
            icon: <ClipboardList className="h-5 w-5" />,
          },
          {
            name: "Exams",
            path: "/dashboard/lecturer/exams",
            icon: <FileText className="h-5 w-5" />,
          },
          {
            name: "Online CATs",
            path: "/dashboard/lecturer/online-cats",
            icon: <Video className="h-5 w-5" />,
          },
          {
            name: "Online Classes",
            path: "/dashboard/lecturer/online-classes",
            icon: <Video className="h-5 w-5" />,
          },
          {
            name: "Online Exams",
            path: "/dashboard/lecturer/online-exams",
            icon: <FileText className="h-5 w-5" />,
          },
        ];
        break;
      case "finance":
        roleItems = financeNavItems;
        break;
      case "librarian":
        roleItems = [
          {
            name: "Manage Books",
            path: "/library/books",
            icon: <Book className="h-5 w-5" />,
          },
          {
            name: "Search Book",
            path: "/library/search",
            icon: <Search className="h-5 w-5" />,
          },
          {
            name: "Return Book",
            path: "/library/return",
            icon: <ArrowLeftRight className="h-5 w-5" />,
          },
          {
            name: "Issue Books",
            path: "/library/issue",
            icon: <ArrowLeftRight className="h-5 w-5" />,
          },
          {
            name: "Manage Barcode",
            path: "/library/barcode",
            icon: <Barcode className="h-5 w-5" />,
          },
          {
            name: "Library Setting",
            path: "/library/settings",
            icon: <Settings className="h-5 w-5" />,
          },
          {
            name: "Movement Log",
            path: "/library/movement",
            icon: <History className="h-5 w-5" />,
          },
          {
            name: "Book Renewal",
            path: "/library/renewal",
            icon: <RefreshCw className="h-5 w-5" />,
          },
          {
            name: "Manage Book Additional Details",
            path: "/library/details",
            icon: <FileText className="h-5 w-5" />,
          },
          {
            name: "Library Fine Receipts",
            path: "/library/fines",
            icon: <FileText className="h-5 w-5" />,
          },
          {
            name: "Manage Tags",
            path: "/library/tags",
            icon: <Tag className="h-5 w-5" />,
          },
        ];
        break;
      case "support":
        roleItems = [
          {
            name: "Tickets",
            path: "/tickets",
            icon: <FileText className="h-5 w-5" />,
          },
          {
            name: "Knowledge Base",
            path: "/knowledge-base",
            icon: <Book className="h-5 w-5" />,
          },
        ];
        break;
      case "hr":
        roleItems = [
          {
            name: "HR Settings",
            path: "/hr/settings",
            icon: <Settings className="h-5 w-5" />,
          },
          {
            name: "Employee Management",
            path: "/hr/employee-management",
            icon: <Users className="h-5 w-5" />,
          },
          {
            name: "Employee Leave Management",
            path: "/hr/leave-management",
            icon: <Calendar className="h-5 w-5" />,
          },
          {
            name: "Employee Search",
            path: "/hr/employee-search",
            icon: <Search className="h-5 w-5" />,
          },
          {
            name: "Payroll and Payslip Management",
            path: "/hr/payroll-payslip",
            icon: <FileText />,
          },
          { name: "__divider__", icon: <div /> },
        ];
        break;
      default:
        roleItems = [];
    }

    // Add profile and logout at the end of the list
    return [
      ...commonItems,
      ...roleItems,
      {
        name: "Profile",
        path: "/profile",
        icon: <User className="h-5 w-5" />,
      },
      {
        name: "Logout",
        path: "#",
        icon: <LogOut className="h-5 w-5" />,
      },
    ];
  };

  const renderSidebarItems = (items: SidebarItem[]) => (
    <SidebarMenu>
      {items.map((item, idx) =>
        item.name === "__divider__" ? (
          <div
            key={"divider-" + idx}
            className="my-4 border-t border-gray-200"
          />
        ) : (
          <div
            key={item.name}
            className={user?.role === "hr" ? "mb-2" : undefined}
          >
            {item.children ? (
              <SidebarGroup>
                <SidebarMenuButton
                  onClick={() => toggleGroup(item.name)}
                  isActive={Object.values(item.children).some(
                    (child) => child.path === location.pathname
                  )}
                  className="group flex items-center w-full px-3 py-1.5 rounded-lg transition-all duration-200 hover:bg-gray-50/80"
                >
                  <div className="flex items-center flex-1">
                    <span className="text-gray-600 group-hover:text-gray-900">
                      {item.icon}
                    </span>
                    <span className="ml-3 font-medium text-gray-700 group-hover:text-gray-900">
                      {item.name}
                    </span>
                  </div>
                  <ChevronDown
                    className={`ml-auto h-4 w-4 text-gray-400 transition-transform duration-200 ${
                      expandedGroups[item.name] ? "rotate-180" : ""
                    }`}
                  />
                </SidebarMenuButton>
                <SidebarGroupContent
                  className={`overflow-hidden transition-all duration-200 ${
                    expandedGroups[item.name]
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <SidebarMenu className="mt-0.5 space-y-0.5">
                    {item.children.map((child) => (
                      <SidebarMenuItem key={child.name}>
                        <SidebarMenuButton
                          onClick={() => child.path && navigate(child.path)}
                          isActive={child.path === location.pathname}
                          className={`pl-8 py-1.5 rounded-lg transition-all duration-200 ${
                            child.path === location.pathname
                              ? "bg-blue-500 text-white hover:bg-blue-600"
                              : "hover:bg-gray-50"
                          }`}
                        >
                          <div className="flex items-center">
                            <span
                              className={
                                child.path === location.pathname
                                  ? "text-white"
                                  : "text-gray-600"
                              }
                            >
                              {child.icon}
                            </span>
                            <span className="ml-3 font-medium">
                              {child.name}
                            </span>
                          </div>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            ) : (
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() =>
                    item.name === "Logout"
                      ? handleLogout()
                      : navigate(item.path!)
                  }
                  isActive={item.path === location.pathname}
                  className={`flex items-center w-full px-3 py-1.5 rounded-lg transition-all duration-200 ${
                    item.path === location.pathname
                      ? "bg-blue-500 text-white hover:bg-blue-600"
                      : item.name === "Logout"
                      ? "hover:bg-red-50 hover:text-red-600"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center">
                    <span
                      className={
                        item.path === location.pathname
                          ? "text-white"
                          : "text-gray-600"
                      }
                    >
                      {item.icon}
                    </span>
                    <span className="ml-3 font-medium">{item.name}</span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )}
          </div>
        )
      )}
    </SidebarMenu>
  );

  const isLecturerRoute =
    location.pathname.includes("/lecturer") ||
    location.pathname === "/assignments" ||
    location.pathname === "/exams" ||
    location.pathname === "/lecturer-courses";

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full bg-gray-50 overflow-hidden">
        <Sidebar
          className={`border-r bg-white shadow-lg transition-all duration-300 w-64 hover:shadow-xl z-40 h-screen overflow-hidden`}
        >
          <div className="flex flex-col items-center justify-center p-3 border-b bg-gradient-to-b from-white to-gray-50">
            <img
              className="h-16 w-16 object-contain cursor-pointer hover:opacity-90 transition-opacity"
              src="https://res.cloudinary.com/pitz/image/upload/v1748458219/NeuroUni_k7qgq2.png"
              alt="Logo"
            />
          </div>

          <SidebarContent className="px-1.5 py-2 space-y-0.5 h-[calc(100vh-88px)] overflow-y-auto">
            {renderSidebarItems(getSidebarItems())}
          </SidebarContent>
        </Sidebar>

        <main
          className={`flex-grow h-screen overflow-hidden relative z-50 ${
            isLecturerRoute ? "" : ""
          }`}
        >
          {Navbar}
          <div className="h-[calc(100vh-64px)] overflow-y-auto p-0">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default SidebarLayout;
