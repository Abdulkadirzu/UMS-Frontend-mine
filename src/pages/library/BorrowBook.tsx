import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const BorrowBook = () => {
  return (
    <div className="container mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Borrow a Book</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="book">Select Book</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a book" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="book1">Book 1</SelectItem>
                    <SelectItem value="book2">Book 2</SelectItem>
                    <SelectItem value="book3">Book 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="returnDate">Return Date</Label>
                <Input type="date" id="returnDate" />
              </div>
              <Button type="submit">Borrow Book</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default BorrowBook;
