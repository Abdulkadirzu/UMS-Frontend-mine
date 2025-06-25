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
import { Plus, Search, Download, User } from "lucide-react";

const Authors: React.FC = () => {
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Authors Management</h2>
        <div className="flex space-x-4">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Author
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="space-y-2">
          <Label>Search</Label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Search authors..." className="pl-10" />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Sort By</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Name (A-Z)" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name-asc">Name (A-Z)</SelectItem>
              <SelectItem value="name-desc">Name (Z-A)</SelectItem>
              <SelectItem value="books-count">Books Count</SelectItem>
              <SelectItem value="date-added">Date Added</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Filter By</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="All authors" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Authors</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Author Name</TableHead>
              <TableHead>Biography</TableHead>
              <TableHead>Books Count</TableHead>
              <TableHead>Added Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>John Smith</TableCell>
              <TableCell>
                Renowned computer science professor and author
              </TableCell>
              <TableCell>12</TableCell>
              <TableCell>2024-01-15</TableCell>
              <TableCell>
                <span className="text-green-600">Active</span>
              </TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                  <Button variant="ghost" size="sm">
                    View Books
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jane Doe</TableCell>
              <TableCell>Best-selling fiction author</TableCell>
              <TableCell>8</TableCell>
              <TableCell>2024-01-20</TableCell>
              <TableCell>
                <span className="text-green-600">Active</span>
              </TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                  <Button variant="ghost" size="sm">
                    View Books
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Robert Johnson</TableCell>
              <TableCell>Historical non-fiction writer</TableCell>
              <TableCell>5</TableCell>
              <TableCell>2024-02-01</TableCell>
              <TableCell>
                <span className="text-yellow-600">Inactive</span>
              </TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                  <Button variant="ghost" size="sm">
                    View Books
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>

      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-500">Showing 1-3 of 25 authors</div>
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

export default Authors;
