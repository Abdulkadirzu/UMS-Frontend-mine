import SidebarLayout from "@/components/layout/SidebarLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  Search,
  MessageSquare,
  CheckCircle,
  Clock,
  AlertCircle,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

// Sample support tickets
const tickets = [
  {
    id: "1",
    subject: "Login issues with student portal",
    requester: "John Student",
    status: "Open",
    priority: "High",
    category: "Technical",
    created: "2 hours ago",
  },
  {
    id: "2",
    subject: "Unable to download course materials",
    requester: "Mary Student",
    status: "In Progress",
    priority: "Medium",
    category: "Access",
    created: "5 hours ago",
  },
  {
    id: "3",
    subject: "Question about library hours",
    requester: "Robert Student",
    status: "Resolved",
    priority: "Low",
    category: "Information",
    created: "1 day ago",
  },
  {
    id: "4",
    subject: "Error in fee statement",
    requester: "Jane Student",
    status: "Pending",
    priority: "High",
    category: "Finance",
    created: "1 day ago",
  },
  {
    id: "5",
    subject: "Need help with course registration",
    requester: "David Student",
    status: "Open",
    priority: "Medium",
    category: "Academic",
    created: "2 days ago",
  },
];

// Sample knowledge base articles
const knowledgeBaseArticles = [
  {
    id: "1",
    title: "How to reset your password",
    views: 1250,
    helpfulness: 92,
  },
  {
    id: "2",
    title: "Guide to course registration",
    views: 980,
    helpfulness: 88,
  },
  { id: "3", title: "Library borrowing rules", views: 780, helpfulness: 85 },
  {
    id: "4",
    title: "Accessing online learning resources",
    views: 650,
    helpfulness: 90,
  },
  { id: "5", title: "Fee payment methods", views: 520, helpfulness: 79 },
];

// Sample metrics
const ticketsByStatusData = [
  { name: "Open", value: 15 },
  { name: "In Progress", value: 8 },
  { name: "Pending", value: 5 },
  { name: "Resolved", value: 42 },
];

const COLORS = ["#FF8042", "#FFBB28", "#00C49F", "#0088FE"];

// Sample ticket trend data
const ticketTrendData = [
  { day: "Mon", tickets: 12 },
  { day: "Tue", tickets: 19 },
  { day: "Wed", tickets: 15 },
  { day: "Thu", tickets: 18 },
  { day: "Fri", tickets: 22 },
  { day: "Sat", tickets: 8 },
  { day: "Sun", tickets: 5 },
];

const SupportDashboard = () => {
  // Calculate metrics
  const openTickets = tickets.filter((t) => t.status === "Open").length;
  const inProgressTickets = tickets.filter(
    (t) => t.status === "In Progress"
  ).length;
  const resolvedTickets = tickets.filter((t) => t.status === "Resolved").length;
  const highPriorityTickets = tickets.filter(
    (t) => t.priority === "High"
  ).length;

  return (
    <SidebarLayout>
      <div>
        <h1 className="text-2xl font-bold mb-6">Support Dashboard</h1>

        {/* Support Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500">Open Tickets</p>
                  <h3 className="text-2xl font-bold">{openTickets}</h3>
                </div>
                <div className="p-2 bg-orange-100 rounded-full">
                  <AlertCircle className="h-6 w-6 text-orange-600" />
                </div>
              </div>
              <div className="flex items-center mt-4">
                <ArrowUpRight className="h-4 w-4 text-orange-600 mr-1" />
                <p className="text-xs text-orange-600">+3 since yesterday</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500">In Progress</p>
                  <h3 className="text-2xl font-bold">{inProgressTickets}</h3>
                </div>
                <div className="p-2 bg-blue-100 rounded-full">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div className="flex items-center mt-4">
                <ArrowUpRight className="h-4 w-4 text-blue-600 mr-1" />
                <p className="text-xs text-blue-600">Currently working</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500">Resolved</p>
                  <h3 className="text-2xl font-bold">{resolvedTickets}</h3>
                </div>
                <div className="p-2 bg-green-100 rounded-full">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <div className="flex items-center mt-4">
                <ArrowUpRight className="h-4 w-4 text-green-600 mr-1" />
                <p className="text-xs text-green-600">Resolution rate: 85%</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500">High Priority</p>
                  <h3 className="text-2xl font-bold">{highPriorityTickets}</h3>
                </div>
                <div className="p-2 bg-red-100 rounded-full">
                  <AlertCircle className="h-6 w-6 text-red-600" />
                </div>
              </div>
              <div className="flex items-center mt-4">
                <ArrowDownRight className="h-4 w-4 text-green-600 mr-1" />
                <p className="text-xs text-green-600">-2 since yesterday</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search Bar */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                <Input placeholder="Search tickets..." className="pl-8" />
              </div>
              <Button>Search</Button>
            </div>
          </CardContent>
        </Card>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader className="pb-0">
              <CardTitle>Tickets by Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={ticketsByStatusData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) =>
                        `${name}: ${(percent * 100).toFixed(0)}%`
                      }
                    >
                      {ticketsByStatusData.map((_, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-0">
              <CardTitle>Weekly Ticket Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={ticketTrendData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="tickets"
                      name="Tickets"
                      stroke="#8884d8"
                      strokeWidth={2}
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Tickets */}
        <Card className="mb-6">
          <CardHeader className="pb-2 flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Recent Support Tickets</CardTitle>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </CardHeader>
          <CardContent>
            <div className="overflow-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Subject
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Requester
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Priority
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Created
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {tickets.map((ticket) => (
                    <tr key={ticket.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        #{ticket.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {ticket.subject}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {ticket.requester}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Badge
                          className={`${
                            ticket.status === "Open"
                              ? "bg-orange-100 text-orange-800 hover:bg-orange-200"
                              : ticket.status === "In Progress"
                              ? "bg-blue-100 text-blue-800 hover:bg-blue-200"
                              : ticket.status === "Resolved"
                              ? "bg-green-100 text-green-800 hover:bg-green-200"
                              : "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                          }`}
                        >
                          {ticket.status}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Badge
                          variant="outline"
                          className={`${
                            ticket.priority === "High"
                              ? "border-red-500 text-red-500 hover:bg-red-100"
                              : ticket.priority === "Medium"
                              ? "border-yellow-500 text-yellow-600 hover:bg-yellow-100"
                              : "border-green-500 text-green-500 hover:bg-green-100"
                          }`}
                        >
                          {ticket.priority}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {ticket.created}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <Button
                          size="sm"
                          className="flex items-center bg-schoolBlue hover:bg-blue-700"
                        >
                          <MessageSquare className="h-3.5 w-3.5 mr-1" />
                          Reply
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Knowledge Base */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">
              Popular Knowledge Base Articles
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Views
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Helpfulness
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {knowledgeBaseArticles.map((article) => (
                    <tr key={article.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <a
                          href="#"
                          className="text-sm font-medium text-blue-600 hover:underline"
                        >
                          {article.title}
                        </a>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {article.views}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <Progress
                            value={article.helpfulness}
                            className="h-2 w-40 mr-2"
                          />
                          <span className="text-sm text-gray-500">
                            {article.helpfulness}%
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </SidebarLayout>
  );
};

export default SupportDashboard;
