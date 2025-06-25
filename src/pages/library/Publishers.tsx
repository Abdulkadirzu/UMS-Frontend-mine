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
import { Plus, Search, Download, Building } from "lucide-react";

const Publishers: React.FC = () => {
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Publishers Management</h2>
        <div className="flex space-x-4">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Publisher
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
            <Input placeholder="Search publishers..." className="pl-10" />
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
              <SelectValue placeholder="All publishers" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Publishers</SelectItem>
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
              <TableHead>Publisher Name</TableHead>
              <TableHead>Contact Info</TableHead>
              <TableHead>Books Count</TableHead>
              <TableHead>Added Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Academic Press</TableCell>
              <TableCell>contact@academicpress.com</TableCell>
              <TableCell>85</TableCell>
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
              <TableCell>Fiction House</TableCell>
              <TableCell>info@fictionhouse.com</TableCell>
              <TableCell>42</TableCell>
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
              <TableCell>Science Books Ltd</TableCell>
              <TableCell>contact@sciencebooks.com</TableCell>
              <TableCell>28</TableCell>
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
        <div className="text-sm text-gray-500">
          Showing 1-3 of 15 publishers
        </div>
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

export default Publishers;
