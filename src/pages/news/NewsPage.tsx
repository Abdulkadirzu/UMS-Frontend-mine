import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";

interface NewsItem {
  id: number;
  title: string;
  content: string;
  date: string;
  time: string;
  category: "announcement" | "news";
}

const NewsPage = () => {
  // Sample news data
  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "Semester Registration Deadline Extended",
      content:
        "Due to technical difficulties, the deadline for semester registration has been extended to March 20, 2024. Please ensure you complete your registration before the new deadline.",
      date: "2024-03-10",
      time: "10:00 AM",
      category: "announcement",
    },
    {
      id: 2,
      title: "New Library Resources Available",
      content:
        "The university library has added new digital resources and e-books to its collection. Students can now access these resources through the online library portal.",
      date: "2024-03-08",
      time: "02:30 PM",
      category: "news",
    },
    {
      id: 3,
      title: "Campus Maintenance Notice",
      content:
        "Scheduled maintenance will be carried out in Block A and B from March 15-17. Classes in these blocks will be temporarily relocated. Please check your email for the new classroom assignments.",
      date: "2024-03-07",
      time: "09:00 AM",
      category: "announcement",
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">School News</h1>
          <p className="text-gray-500">Latest announcements</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="search"
              placeholder="Search News"
              className="w-[300px] pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsItems.map((item) => (
          <Card key={item.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <Badge
                  variant={
                    item.category === "announcement" ? "default" : "secondary"
                  }
                >
                  {item.category === "announcement" ? "Announcement" : "News"}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{item.content}</p>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{item.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{item.time}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
