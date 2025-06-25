import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  Search,
  Clock,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { books } from "@/utils/mockData";
import { useState } from "react";

const LibraryPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data for borrowed books
  const borrowedBooks = [
    {
      id: "B001",
      title: "Introduction to Algorithms",
      author: "Thomas H. Cormen",
      borrowedDate: "2024-03-01",
      dueDate: "2024-03-15",
      status: "overdue",
      daysOverdue: 3,
      penalty: 1500,
    },
    {
      id: "B002",
      title: "Clean Code",
      author: "Robert C. Martin",
      borrowedDate: "2024-03-10",
      dueDate: "2024-03-24",
      status: "active",
      daysOverdue: 0,
      penalty: 0,
    },
  ];

  // Mock data for penalties
  const penalties = [
    {
      id: "P001",
      bookTitle: "Introduction to Algorithms",
      amount: 1500,
      reason: "Late return",
      status: "unpaid",
      dueDate: "2024-03-20",
    },
    {
      id: "P002",
      bookTitle: "Database Systems",
      amount: 500,
      reason: "Book damage",
      status: "paid",
      paidDate: "2024-03-15",
    },
  ];

  // Filter books based on search query
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Library</h1>
          <p className="text-gray-500 mt-1">
            Access and manage your library resources
          </p>
        </div>
      </div>

      <Tabs defaultValue="available" className="space-y-4">
        <TabsList>
          <TabsTrigger value="available">Available Books</TabsTrigger>
          <TabsTrigger value="borrowed">Borrowed Books</TabsTrigger>
          <TabsTrigger value="penalties">Penalties</TabsTrigger>
        </TabsList>

        {/* Available Books Tab */}
        <TabsContent value="available">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                  <Input
                    placeholder="Search books..."
                    className="pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button>Advanced Search</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredBooks.map((book) => (
                  <Card key={book.id} className="overflow-hidden">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold">{book.title}</h3>
                          <p className="text-sm text-gray-500">{book.author}</p>
                          <div className="mt-2 space-x-2">
                            <Badge variant="outline">{book.category}</Badge>
                            <Badge variant="outline">
                              Available: {book.availableCopies}
                            </Badge>
                          </div>
                        </div>
                        <BookOpen className="h-6 w-6 text-gray-400" />
                      </div>
                      <Button className="w-full mt-4">Borrow Book</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Borrowed Books Tab */}
        <TabsContent value="borrowed">
          <Card>
            <CardHeader>
              <CardTitle>My Borrowed Books</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Borrowed books will be displayed here */}
                <div className="text-center text-gray-500 py-8">
                  <BookOpen className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                  <p>You haven't borrowed any books yet.</p>
                  <Button variant="link" className="mt-2">
                    Browse Available Books
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Penalties Tab */}
        <TabsContent value="penalties">
          <Card>
            <CardHeader>
              <CardTitle>Penalties</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Penalties will be displayed here */}
                <div className="text-center text-gray-500 py-8">
                  <CheckCircle2 className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                  <p>You have no outstanding penalties.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LibraryPage;
