import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";

interface NewsPageProps {
  type?: "announcements" | "news";
}

const NewsPage = ({ type = "news" }: NewsPageProps) => {
  // Mock data for news and announcements
  const newsData = [
    {
      id: 1,
      title: "New Library Hours",
      content: "The library will now be open until 10 PM on weekdays.",
      date: "2024-03-15",
      time: "10:00 AM",
      type: "announcement",
    },
    {
      id: 2,
      title: "Mid-term Break Schedule",
      content: "Mid-term break will be from March 25 to March 29.",
      date: "2024-03-14",
      time: "2:30 PM",
      type: "announcement",
    },
    {
      id: 3,
      title: "New Course Registration",
      content: "Course registration for next semester begins next week.",
      date: "2024-03-13",
      time: "9:00 AM",
      type: "news",
    },
  ];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">News & Announcements</h1>
        <p className="text-gray-500 mt-1">
          Stay updated with the latest news and announcements
        </p>
      </div>

      <Tabs defaultValue={type} className="space-y-4">
        <TabsList>
          <TabsTrigger value="news">Latest News</TabsTrigger>
          <TabsTrigger value="announcements">Announcements</TabsTrigger>
        </TabsList>

        <TabsContent value="news" className="space-y-4">
          {newsData
            .filter((item) => item.type === "news")
            .map((news) => (
              <Card key={news.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{news.title}</CardTitle>
                    <Badge variant="outline" className="ml-2">
                      News
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{news.content}</p>
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{news.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{news.time}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </TabsContent>

        <TabsContent value="announcements" className="space-y-4">
          {newsData
            .filter((item) => item.type === "announcement")
            .map((announcement) => (
              <Card key={announcement.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{announcement.title}</CardTitle>
                    <Badge variant="secondary" className="ml-2">
                      Announcement
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{announcement.content}</p>
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{announcement.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{announcement.time}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default NewsPage;
