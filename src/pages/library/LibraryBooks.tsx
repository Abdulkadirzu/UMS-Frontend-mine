import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Book,
  Search,
  ArrowLeftRight,
  Barcode,
  Settings,
  History,
  RefreshCw,
  FileText,
  Tag,
  Plus,
  Edit,
  Trash2,
} from "lucide-react";

const LibraryBooks = () => {
  const books = [
    {
      id: "B001",
      title: "Introduction to Computer Science",
      author: "John Smith",
      isbn: "978-3-16-148410-0",
      category: "Computer Science",
      status: "Available",
      location: "Shelf A-1",
    },
    {
      id: "B002",
      title: "Advanced Mathematics",
      author: "Jane Doe",
      isbn: "978-3-16-148410-1",
      category: "Mathematics",
      status: "Issued",
      location: "Shelf B-2",
    },
    // Add more sample books
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Library Books</h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage library books, issues, returns, and settings
          </p>
        </div>
      </div>

      <Tabs defaultValue="books" className="space-y-4">
        <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          <TabsTrigger value="books" className="flex flex-col items-center p-4">
            <Book className="h-6 w-6 mb-2" />
            <span className="text-sm font-medium">Manage Books</span>
            <span className="text-xs text-gray-500">Manage library books</span>
          </TabsTrigger>
          <TabsTrigger
            value="search"
            className="flex flex-col items-center p-4"
          >
            <Search className="h-6 w-6 mb-2" />
            <span className="text-sm font-medium">Search Book</span>
            <span className="text-xs text-gray-500">
              Search for a book here
            </span>
          </TabsTrigger>
          <TabsTrigger
            value="return"
            className="flex flex-col items-center p-4"
          >
            <ArrowLeftRight className="h-6 w-6 mb-2" />
            <span className="text-sm font-medium">Return Book</span>
            <span className="text-xs text-gray-500">Manage book returns</span>
          </TabsTrigger>
          <TabsTrigger value="issue" className="flex flex-col items-center p-4">
            <ArrowLeftRight className="h-6 w-6 mb-2" />
            <span className="text-sm font-medium">Issue Books</span>
            <span className="text-xs text-gray-500">Issue books here</span>
          </TabsTrigger>
          <TabsTrigger
            value="barcode"
            className="flex flex-col items-center p-4"
          >
            <Barcode className="h-6 w-6 mb-2" />
            <span className="text-sm font-medium">Manage Barcode</span>
            <span className="text-xs text-gray-500">Manage book's barcode</span>
          </TabsTrigger>
          <TabsTrigger
            value="settings"
            className="flex flex-col items-center p-4"
          >
            <Settings className="h-6 w-6 mb-2" />
            <span className="text-sm font-medium">Library Setting</span>
            <span className="text-xs text-gray-500">
              Initial library setting for courses
            </span>
          </TabsTrigger>
          <TabsTrigger
            value="movement"
            className="flex flex-col items-center p-4"
          >
            <History className="h-6 w-6 mb-2" />
            <span className="text-sm font-medium">Movement Log</span>
            <span className="text-xs text-gray-500">
              Issued/Renewed Book Status
            </span>
          </TabsTrigger>
          <TabsTrigger
            value="renewal"
            className="flex flex-col items-center p-4"
          >
            <RefreshCw className="h-6 w-6 mb-2" />
            <span className="text-sm font-medium">Book Renewal</span>
            <span className="text-xs text-gray-500">Renew books here</span>
          </TabsTrigger>
          <TabsTrigger
            value="details"
            className="flex flex-col items-center p-4"
          >
            <FileText className="h-6 w-6 mb-2" />
            <span className="text-sm font-medium">
              Manage Book Additional Details
            </span>
            <span className="text-xs text-gray-500">Additional details</span>
          </TabsTrigger>
          <TabsTrigger value="fines" className="flex flex-col items-center p-4">
            <FileText className="h-6 w-6 mb-2" />
            <span className="text-sm font-medium">Library Fine Receipts</span>
            <span className="text-xs text-gray-500">Library Fine Receipts</span>
          </TabsTrigger>
          <TabsTrigger value="tags" className="flex flex-col items-center p-4">
            <Tag className="h-6 w-6 mb-2" />
            <span className="text-sm font-medium">Manage Tags</span>
            <span className="text-xs text-gray-500">Manage Tags</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="books" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Manage Books</CardTitle>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search for a book here"
                    className="pl-10 w-[300px]"
                  />
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="mr-2 h-4 w-4" />
                      Add Book
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add New Book</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="title">Book Title</Label>
                        <Input id="title" placeholder="Enter book title" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="author">Author</Label>
                        <Input id="author" placeholder="Enter author name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="isbn">ISBN</Label>
                        <Input id="isbn" placeholder="Enter ISBN" />
                      </div>
                      <div className="space-y-2">
                        <Label>Category</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cs">Computer Science</SelectItem>
                            <SelectItem value="math">Mathematics</SelectItem>
                            <SelectItem value="physics">Physics</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input
                          id="location"
                          placeholder="Enter shelf location"
                        />
                      </div>
                      <Button className="w-full">Add Book</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Author</TableHead>
                    <TableHead>ISBN</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {books.map((book) => (
                    <TableRow key={book.id}>
                      <TableCell>{book.id}</TableCell>
                      <TableCell>{book.title}</TableCell>
                      <TableCell>{book.author}</TableCell>
                      <TableCell>{book.isbn}</TableCell>
                      <TableCell>{book.category}</TableCell>
                      <TableCell>
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            book.status === "Available"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {book.status}
                        </span>
                      </TableCell>
                      <TableCell>{book.location}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end space-x-2">
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="issue">
          <Card>
            <CardHeader>
              <CardTitle>Issue Books</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Student ID</Label>
                    <Input placeholder="Enter student ID" />
                  </div>
                  <div className="space-y-2">
                    <Label>Book ID</Label>
                    <Input placeholder="Enter book ID" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Issue Date</Label>
                    <Input type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label>Return Date</Label>
                    <Input type="date" />
                  </div>
                </div>
                <Button className="w-full">Issue Book</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="return">
          <Card>
            <CardHeader>
              <CardTitle>Return Books</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Book ID</Label>
                    <Input placeholder="Enter book ID" />
                  </div>
                  <div className="space-y-2">
                    <Label>Return Date</Label>
                    <Input type="date" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Condition</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select condition" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="good">Good</SelectItem>
                      <SelectItem value="damaged">Damaged</SelectItem>
                      <SelectItem value="lost">Lost</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="w-full">Return Book</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="barcode">
          <Card>
            <CardHeader>
              <CardTitle>Manage Barcode</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Book ID</Label>
                    <Input placeholder="Enter book ID" />
                  </div>
                  <div className="space-y-2">
                    <Label>Barcode</Label>
                    <Input placeholder="Enter barcode" />
                  </div>
                </div>
                <Button className="w-full">Generate Barcode</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Library Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Maximum Books Per Student</Label>
                    <Input type="number" placeholder="Enter maximum books" />
                  </div>
                  <div className="space-y-2">
                    <Label>Maximum Days Per Issue</Label>
                    <Input type="number" placeholder="Enter maximum days" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Fine Per Day (USD)</Label>
                    <Input type="number" placeholder="Enter fine amount" />
                  </div>
                  <div className="space-y-2">
                    <Label>Grace Period (Days)</Label>
                    <Input type="number" placeholder="Enter grace period" />
                  </div>
                </div>
                <Button className="w-full">Save Settings</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="movement">
          <Card>
            <CardHeader>
              <CardTitle>Movement Log</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Book ID</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Student ID</TableHead>
                    <TableHead>Action</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>{/* Add movement log data */}</TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="renewal">
          <Card>
            <CardHeader>
              <CardTitle>Book Renewal</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Book ID</Label>
                    <Input placeholder="Enter book ID" />
                  </div>
                  <div className="space-y-2">
                    <Label>New Return Date</Label>
                    <Input type="date" />
                  </div>
                </div>
                <Button className="w-full">Renew Book</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="details">
          <Card>
            <CardHeader>
              <CardTitle>Additional Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Book ID</Label>
                    <Input placeholder="Enter book ID" />
                  </div>
                  <div className="space-y-2">
                    <Label>Edition</Label>
                    <Input placeholder="Enter edition" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Description</Label>
                  <Input placeholder="Enter book description" />
                </div>
                <Button className="w-full">Save Details</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fines">
          <Card>
            <CardHeader>
              <CardTitle>Fine Receipts</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Receipt ID</TableHead>
                    <TableHead>Student ID</TableHead>
                    <TableHead>Book ID</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>{/* Add fine receipt data */}</TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tags">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Manage Tags</CardTitle>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Tag
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add New Tag</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="tag-name">Tag Name</Label>
                      <Input id="tag-name" placeholder="Enter tag name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tag-color">Tag Color</Label>
                      <Input type="color" id="tag-color" />
                    </div>
                    <Button className="w-full">Add Tag</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tag Name</TableHead>
                    <TableHead>Color</TableHead>
                    <TableHead>Books Count</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>{/* Add tag data */}</TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LibraryBooks;
