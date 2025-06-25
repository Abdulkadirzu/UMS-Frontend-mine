import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, AlertCircle, BookOpen } from "lucide-react";

const BorrowedBooks = () => {
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

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Borrowed Books</h1>
        <p className="text-gray-500 mt-1">
          View and manage your borrowed books
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>My Borrowed Books</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {borrowedBooks.map((book) => (
              <Card key={book.id}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">{book.title}</h3>
                      <p className="text-sm text-gray-500">{book.author}</p>
                      <div className="mt-2 space-y-1">
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-2" />
                          <span>Due: {book.dueDate}</span>
                        </div>
                        {book.status === "overdue" && (
                          <div className="flex items-center text-red-600">
                            <AlertCircle className="h-4 w-4 mr-2" />
                            <span>
                              {book.daysOverdue} days overdue - Penalty: KES{" "}
                              {book.penalty}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    <Button variant="outline">Return Book</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BorrowedBooks;
