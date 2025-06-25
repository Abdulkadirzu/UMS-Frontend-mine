import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ReturnBook = () => {
  // Mock data - replace with actual data from your backend
  const borrowedBooks = [
    { id: 1, title: "Book 1", borrowDate: "2024-03-01", dueDate: "2024-03-15" },
    { id: 2, title: "Book 2", borrowDate: "2024-03-05", dueDate: "2024-03-20" },
  ];

  return (
    <div className="container mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Return Books</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Book Title</TableHead>
                <TableHead>Borrow Date</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {borrowedBooks.map((book) => (
                <TableRow key={book.id}>
                  <TableCell>{book.title}</TableCell>
                  <TableCell>{book.borrowDate}</TableCell>
                  <TableCell>{book.dueDate}</TableCell>
                  <TableCell>
                    <Button variant="outline">Return</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReturnBook;
