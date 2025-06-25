import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Penalties = () => {
  // Mock data - replace with actual data from your backend
  const penalties = [
    {
      id: 1,
      bookTitle: "Book 1",
      dueDate: "2024-03-15",
      returnDate: "2024-03-20",
      amount: 25.0,
    },
    {
      id: 2,
      bookTitle: "Book 2",
      dueDate: "2024-03-10",
      returnDate: "2024-03-18",
      amount: 40.0,
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Penalties</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Book Title</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Return Date</TableHead>
                <TableHead>Penalty Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {penalties.map((penalty) => (
                <TableRow key={penalty.id}>
                  <TableCell>{penalty.bookTitle}</TableCell>
                  <TableCell>{penalty.dueDate}</TableCell>
                  <TableCell>{penalty.returnDate}</TableCell>
                  <TableCell>${penalty.amount.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Penalties;
