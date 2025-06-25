import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, Search, Download, Book, Barcode, Tag } from "lucide-react";

const BooksManagement: React.FC = () => {
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Books Management</h2>
        <div className="flex space-x-4">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Book
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        <div className="space-y-2">
          <Label>Search</Label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Search books..." className="pl-10" />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Category</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="All categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="textbooks">Textbooks</SelectItem>
              <SelectItem value="reference">Reference</SelectItem>
              <SelectItem value="fiction">Fiction</SelectItem>
              <SelectItem value="non-fiction">Non-Fiction</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Status</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="All status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="available">Available</SelectItem>
              <SelectItem value="issued">Issued</SelectItem>
              <SelectItem value="reserved">Reserved</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Sort By</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Title (A-Z)" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="title-asc">Title (A-Z)</SelectItem>
              <SelectItem value="title-desc">Title (Z-A)</SelectItem>
              <SelectItem value="author">Author</SelectItem>
              <SelectItem value="date-added">Date Added</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>ISBN</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Introduction to Computer Science</TableCell>
              <TableCell>John Smith</TableCell>
              <TableCell>978-3-16-148410-0</TableCell>
              <TableCell>Textbooks</TableCell>
              <TableCell>
                <span className="text-green-600">Available</span>
              </TableCell>
              <TableCell>Shelf A-1</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm">
                    <Book className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Barcode className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Tag className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Advanced Mathematics</TableCell>
              <TableCell>Jane Doe</TableCell>
              <TableCell>978-3-16-148410-1</TableCell>
              <TableCell>Textbooks</TableCell>
              <TableCell>
                <span className="text-yellow-600">Issued</span>
              </TableCell>
              <TableCell>Shelf B-2</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm">
                    <Book className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Barcode className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Tag className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Physics Fundamentals</TableCell>
              <TableCell>Robert Johnson</TableCell>
              <TableCell>978-3-16-148410-2</TableCell>
              <TableCell>Reference</TableCell>
              <TableCell>
                <span className="text-blue-600">Reserved</span>
              </TableCell>
              <TableCell>Shelf C-3</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm">
                    <Book className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Barcode className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Tag className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>

      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-500">Showing 1-3 of 25 books</div>
        <div className="flex space-x-2">
          <Button variant="outline" disabled>
            Previous
          </Button>
          <Button variant="outline">Next</Button>
        </div>
      </div>
    </div>
  );
};

export default BooksManagement;
